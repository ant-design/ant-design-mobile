const gulp = require('gulp')
const less = require('gulp-less')
const path = require('path')
const postcss = require('gulp-postcss')
const babel = require('gulp-babel')
const replace = require('gulp-replace')
const ts = require('gulp-typescript')
const del = require('del')
const webpackStream = require('webpack-stream')
const webpack = require('webpack')
const through = require('through2')
const vite = require('vite')
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const tsconfig = require('./tsconfig.json')
const packageJson = require('./package.json')

const pxMultiplePlugin = require('postcss-px-multiple')({ times: 2 })

function clean() {
  return del('./lib/**')
}

function buildStyle() {
  return gulp
    .src(['./src/**/*.less'], {
      base: './src/',
      ignore: ['**/demos/**/*', '**/tests/**/*'],
    })
    .pipe(
      less({
        paths: [path.join(__dirname, 'src')],
        relativeUrls: true,
      })
    )
    .pipe(gulp.dest('./lib/es'))
    .pipe(gulp.dest('./lib/cjs'))
}

function copyAssets() {
  return gulp
    .src('./src/assets/**/*')
    .pipe(gulp.dest('lib/assets'))
    .pipe(gulp.dest('lib/es/assets'))
    .pipe(gulp.dest('lib/cjs/assets'))
}

function buildCJS() {
  return gulp
    .src(['lib/es/**/*.js'])
    .pipe(
      babel({
        'plugins': ['@babel/plugin-transform-modules-commonjs'],
      })
    )
    .pipe(gulp.dest('lib/cjs/'))
}

function buildES() {
  const tsProject = ts({
    ...tsconfig.compilerOptions,
    module: 'ESNext',
  })
  return gulp
    .src(['src/**/*.{ts,tsx}'], {
      ignore: ['**/demos/**/*', '**/tests/**/*'],
    })
    .pipe(tsProject)
    .pipe(
      babel({
        'plugins': ['./babel-transform-less-to-css'],
      })
    )
    .pipe(gulp.dest('lib/es/'))
}

function buildDeclaration() {
  const tsProject = ts({
    ...tsconfig.compilerOptions,
    module: 'ESNext',
    declaration: true,
    emitDeclarationOnly: true,
  })
  return gulp
    .src(['src/**/*.{ts,tsx}'], {
      ignore: ['**/demos/**/*', '**/tests/**/*'],
    })
    .pipe(tsProject)
    .pipe(gulp.dest('lib/es/'))
    .pipe(gulp.dest('lib/cjs/'))
}

function getViteConfigForPackage({ minify, formats, external }) {
  const name = packageJson.name
  return {
    root: process.cwd(),

    logLevel: 'silent',

    build: {
      lib: {
        name,
        entry: './lib/es/index.js',
        formats,
        fileName: format => {
          const suffix = format === 'umd' ? '' : `.${format}`
          return minify ? `${name}${suffix}.min.js` : `${name}${suffix}.js`
        },
      },
      minify: minify ? 'terser' : false,
      rollupOptions: {
        external,
        output: {
          dir: './lib/bundle',
          exports: 'named',
          globals: {
            react: 'React',
          },
        },
      },
    },
  }
}

async function buildBundles(cb) {
  const dependencies = packageJson.dependencies || {}
  const externals = Object.keys(dependencies)

  const configs = [
    // esm/cjs bundle
    getViteConfigForPackage({
      minify: false,
      formats: ['es', 'cjs'],
      external: ['react', ...externals],
    }),
  ]

  await Promise.all(configs.map(config => vite.build(config)))
  cb && cb()
}

function umdWebpack() {
  return gulp
    .src('lib/es/index.js')
    .pipe(
      webpackStream(
        {
          output: {
            filename: 'antd-mobile.js',
            library: {
              type: 'umd',
              name: 'antdMobile',
            },
          },
          mode: 'production',
          optimization: {
            usedExports: true,
          },
          resolve: {
            extensions: ['.js', '.json'],
          },
          plugins: [
            new BundleAnalyzerPlugin({
              analyzerMode: 'static',
              openAnalyzer: false,
              reportFilename: 'report/report.html',
            }),
          ],
          module: {
            rules: [
              {
                test: /\.js$/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    'presets': [
                      [
                        '@babel/preset-env',
                        {
                          'loose': true,
                          'modules': false,
                          'targets': {
                            'chrome': '49',
                            'ios': '10',
                          },
                        },
                      ],
                      '@babel/preset-typescript',
                      '@babel/preset-react',
                    ],
                  },
                },
              },
              {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                type: 'asset/inline',
              },
              {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
              },
            ],
          },
          externals: [
            {
              react: {
                commonjs: 'react',
                commonjs2: 'react',
                amd: 'react',
                root: 'React',
              },
              'react-dom': {
                commonjs: 'react-dom',
                commonjs2: 'react-dom',
                amd: 'react-dom',
                root: 'ReactDOM',
              },
            },
          ],
        },
        webpack
      )
    )
    .pipe(gulp.dest('lib/umd/'))
}

function copyMetaFiles() {
  return gulp.src(['./README.md', './LICENSE.txt']).pipe(gulp.dest('./lib/'))
}

function generatePackageJSON() {
  return gulp
    .src('./package.json')
    .pipe(
      through.obj((file, enc, cb) => {
        const rawJSON = file.contents.toString()
        const parsed = JSON.parse(rawJSON)
        delete parsed.scripts
        delete parsed.devDependencies
        delete parsed.publishConfig
        delete parsed.files
        const stringified = JSON.stringify(parsed, null, 2)
        file.contents = Buffer.from(stringified)
        cb(null, file)
      })
    )
    .pipe(gulp.dest('./lib/'))
}

function create2xFolder() {
  return gulp
    .src('./lib/**', {
      base: './lib/',
      ignore: ['./lib/2x/demos/**/*'],
    })
    .pipe(gulp.dest('./lib/2x/'))
}

function build2xCSS() {
  return gulp
    .src('./lib/2x/**/*.css', {
      base: './lib/2x/',
    })
    .pipe(postcss([pxMultiplePlugin]))
    .pipe(replace('--adm-hd: 1;', '--adm-hd: 2;'))
    .pipe(
      gulp.dest('./lib/2x', {
        overwrite: true,
      })
    )
}

exports.umdWebpack = umdWebpack
exports.buildBundles = buildBundles

exports.default = gulp.series(
  clean,
  buildES,
  buildCJS,
  gulp.parallel(buildDeclaration, buildStyle),
  copyAssets,
  copyMetaFiles,
  generatePackageJSON,
  gulp.series(create2xFolder, build2xCSS),
  gulp.parallel(umdWebpack, buildBundles)
)
