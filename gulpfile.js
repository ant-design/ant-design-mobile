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
const rename = require('gulp-rename')
const autoprefixer = require('autoprefixer')
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const tsconfig = require('./tsconfig.json')
const packageJson = require('./package.json')
const StatoscopeWebpackPlugin = require('@statoscope/webpack-plugin').default
const pxMultiplePlugin = require('postcss-px-multiple')({ times: 2 })

function clean() {
  return del('./lib/**')
}

function buildStyle() {
  return gulp
    .src(['./src/**/*.less'], {
      base: './src/',
      ignore: ['**/demos/**/*', '**/tests/**/*', '*.patch.less'],
    })
    .pipe(
      less({
        paths: [path.join(__dirname, 'src')],
        relativeUrls: true,
      })
    )
    .pipe(
      postcss([
        autoprefixer({
          overrideBrowserslist: 'iOS >= 10, Chrome >= 49',
        }),
      ])
    )
    .pipe(gulp.dest('./lib/es'))
    .pipe(gulp.dest('./lib/cjs'))
}

function copyPatchStyle(prefix = '') {
  return () =>
    gulp
      .src([`./lib${prefix}/es/global/css-vars-patch.css`])
      .pipe(
        rename({
          dirname: '',
          extname: '.css',
        })
      )
      .pipe(gulp.dest(`./lib${prefix}/bundle`))
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
    module: 'ES6',
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
    paths: {
      ...tsconfig.compilerOptions.paths,
      'react': ['node_modules/@types/react'],
      'rc-field-form': ['node_modules/rc-field-form'],
      '@react-spring/web': ['node_modules/@react-spring/web'],
      '@use-gesture/react': ['node_modules/@use-gesture/react'],
    },
    module: 'ES6',
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

function getViteConfigForPackage({ env, formats, external }) {
  const name = packageJson.name
  const isProd = env === 'production'
  return {
    root: process.cwd(),

    mode: env,

    logLevel: 'silent',

    define: { 'process.env.NODE_ENV': `"${env}"` },

    build: {
      cssTarget: 'chrome61',
      lib: {
        name: 'antdMobile',
        entry: './lib/es/index.js',
        formats,
        fileName: format => `${name}.${format}${isProd ? '' : `.${env}`}.js`,
      },
      rollupOptions: {
        external,
        output: {
          dir: './lib/bundle',
          // exports: 'named',
          globals: {
            'react': 'React',
            'react-dom': 'ReactDOM',
          },
        },
      },
      minify: isProd ? 'esbuild' : false,
    },
  }
}

async function buildBundles(cb) {
  const envs = ['development', 'production']
  const configs = envs.map(env =>
    getViteConfigForPackage({
      env,
      formats: ['es', 'cjs', 'umd'],
      external: ['react', 'react-dom'],
    })
  )

  // Let it step by step since `style.css` is same name.
  // Production should override it.
  for (let i = 0; i < configs.length; i += 1) {
    const config = configs[i]
    if (i !== 0) {
      config.build.emptyOutDir = false
    }

    await vite.build(config)
  }

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
          performance: {
            hints: false,
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
            new StatoscopeWebpackPlugin({
              saveReportTo: 'report/statoscope/report.html',
              saveStatsTo: 'report/statoscope/stats.json',
              open: false,
            }),
          ],
          module: {
            rules: [
              {
                test: /\.m?js$/,
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
                            'ios': '9',
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

function copyUmd() {
  return gulp
    .src(['lib/umd/antd-mobile.js'])
    .pipe(rename('antd-mobile.compatible.umd.js'))
    .pipe(gulp.dest('lib/bundle/'))
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
        delete parsed.resolutions
        delete parsed.packageManager
        const stringified = JSON.stringify(parsed, null, 2)
        file.contents = Buffer.from(stringified)
        cb(null, file)
      })
    )
    .pipe(gulp.dest('./lib/'))
}

function init2xFolder() {
  return gulp
    .src('./lib/**', {
      base: './lib/',
    })
    .pipe(gulp.dest('./lib/2x/'))
}

function build2xCSS() {
  return (
    gulp
      .src('./lib/2x/**/*.css', {
        base: './lib/2x/',
      })
      // Hack fix since postcss-px-multiple ignores the `@supports` block
      .pipe(
        replace(
          '@supports not (color: var(--adm-color-text))',
          '@media screen and (min-width: 999999px)'
        )
      )
      .pipe(postcss([pxMultiplePlugin]))
      .pipe(
        replace(
          '@media screen and (min-width: 999999px)',
          '@supports not (color: var(--adm-color-text))'
        )
      )
      .pipe(
        gulp.dest('./lib/2x', {
          overwrite: true,
        })
      )
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
  buildBundles,
  gulp.series(init2xFolder, build2xCSS),
  umdWebpack,
  copyUmd,
  copyPatchStyle(),
  copyPatchStyle('/2x')
)
