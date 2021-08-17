const gulp = require('gulp')
const less = require('gulp-less')
const path = require('path')
const postcss = require('gulp-postcss')
const imageInliner = require('postcss-image-inliner')
const rename = require('gulp-rename')
const babel = require('gulp-babel')
const ts = require('gulp-typescript')
const del = require('del')
const webpackStream = require('webpack-stream')
const webpack = require('webpack')
const tsconfig = require('./tsconfig.json')
const glob = require('glob')

const pxMultiplePlugin = require('postcss-px-multiple')({ times: 2 })

function clean() {
  return del('./lib/**')
}

function buildStyle() {
  return gulp
    .src(
      [
        './src/index.less',
        './src/global.less',
        './src/components/**/index.less',
      ],
      {
        base: './src/',
        ignore: ['**/demos/**/*', '**/tests/**/*'],
      }
    )
    .pipe(
      less({
        paths: [path.join(__dirname, 'src')],
        relativeUrls: true,
      })
    )
    .pipe(gulp.dest('./lib/es'))
    .pipe(gulp.dest('./lib/cjs'))
    .pipe(postcss([pxMultiplePlugin]))
    .pipe(
      rename({
        suffix: '@2x',
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

function copyCSS() {
  return gulp
    .src(['./lib/es/index.css', './lib/es/index@2x.css'])
    .pipe(gulp.dest('lib/'))
}

function tsCJS() {
  const tsProject = ts({
    ...tsconfig.compilerOptions,
    module: 'CommonJS',
  })
  return gulp
    .src(['src/**/*.{ts,tsx}'], {
      ignore: ['**/demos/**/*', '**/tests/**/*'],
    })
    .pipe(tsProject)
    .pipe(babel())
    .pipe(gulp.dest('lib/cjs/'))
}

function tsES() {
  const tsProject = ts({
    ...tsconfig.compilerOptions,
    module: 'ESNext',
  })
  return gulp
    .src(['src/**/*.{ts,tsx}'], {
      ignore: ['**/demos/**/*', '**/tests/**/*'],
    })
    .pipe(tsProject)
    .pipe(babel())
    .pipe(gulp.dest('lib/es/'))
}

function tsDeclaration() {
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
          resolve: {
            extensions: ['.js', '.json'],
          },
          module: {
            rules: [
              {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                type: 'asset/inline',
              },
            ],
          },
          externals: [
            {
              react: 'React',
            },
          ],
        },
        webpack
      )
    )
    .pipe(gulp.dest('lib/umd/'))
}

function umdCSS() {
  return gulp
    .src(['./lib/index.css', './lib/index@2x.css'])
    .pipe(
      postcss([
        imageInliner({
          assetPaths: ['./lib'],
          maxFileSize: 0,
        }),
      ])
    )
    .pipe(gulp.dest('./lib/umd'))
}

const mergeCommonIntoComponents = (function () {
  function doTask(folder) {
    const componentDirs = glob.sync(`./lib/${folder}/components/*/`)
    let ret = gulp.src(`./lib/${folder}/components/_common/*`)
    for (const dir of componentDirs) {
      ret = ret.pipe(gulp.dest(dir))
    }
    return ret
  }
  const mergeCommonIntoComponentsES = () => doTask('es')
  const mergeCommonIntoComponentsCJS = () => doTask('cjs')
  async function removeCommonFolder() {
    await del(['./lib/es/components/_common', './lib/cjs/components/_common'])
  }
  return gulp.series(
    gulp.parallel(mergeCommonIntoComponentsES, mergeCommonIntoComponentsCJS),
    removeCommonFolder
  )
})()

function copyMetaFiles() {
  return gulp
    .src(['./package.json', './README.md', './LICENSE.txt'])
    .pipe(gulp.dest('lib/'))
}

exports.default = gulp.series(
  clean,
  gulp.parallel(tsCJS, tsES, tsDeclaration, buildStyle),
  mergeCommonIntoComponents,
  copyCSS,
  copyAssets,
  gulp.parallel(umdWebpack, umdCSS),
  copyMetaFiles
)
