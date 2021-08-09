const gulp = require('gulp')
const less = require('gulp-less')
const path = require('path')
const postcss = require('gulp-postcss')
const rename = require('gulp-rename')
const babel = require('gulp-babel')
const ts = require('gulp-typescript')
const del = require('del')
const webpackStream = require('webpack-stream')
const webpack = require('webpack')
const tsconfig = require('./tsconfig.json')

const pxMultiplePlugin = require('postcss-px-multiple')({ times: 2 })

gulp.task('less', function () {
  return gulp
    .src('./src/index.less')
    .pipe(
      less({
        paths: [path.join(__dirname, 'src')],
        relativeUrls: true,
      })
    )
    .pipe(gulp.dest('./lib'))
})

gulp.task('multiply-px', function () {
  return gulp
    .src('./lib/index.css')
    .pipe(postcss([pxMultiplePlugin]))
    .pipe(
      rename({
        suffix: '@2x',
      })
    )
    .pipe(gulp.dest('./lib'))
})

gulp.task('assets', function () {
  return gulp
    .src('./src/assets/**/*')
    .pipe(gulp.dest('lib/es/assets'))
    .pipe(gulp.dest('lib/cjs/assets'))
})

gulp.task('copy-css', function () {
  return gulp
    .src(['./lib/index.css', './lib/index@2x.css'])
    .pipe(gulp.dest('lib/es/'))
    .pipe(gulp.dest('lib/cjs/'))
    .pipe(gulp.dest('lib/umd/'))
})

gulp.task('clean', async function () {
  await del('lib/**')
})

gulp.task('cjs', function () {
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
})

gulp.task('es', function () {
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
})

gulp.task('declaration', function () {
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
})

gulp.task('umd', function () {
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
                use: ['file-loader'],
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
})

gulp.task('copy-files', () => {
  return gulp
    .src(['./package.json', './README.md', './LICENSE.txt'])
    .pipe(gulp.dest('lib/'))
})

gulp.task(
  'default',
  gulp.series(
    'clean',
    'cjs',
    'es',
    'assets',
    'declaration',
    'umd',
    'less',
    'multiply-px',
    'copy-css',
    'copy-files'
  )
)
