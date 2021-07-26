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

const pxMultiplePlugin = require('postcss-px-multiple')({times: 2})

gulp.task('less', function () {
  return gulp
    .src('./src/index.less')
    .pipe(
      less({
        paths: [path.join(__dirname, 'src')],
        relativeUrls: true,
      })
    )
    .pipe(gulp.dest('./umd'))
})

gulp.task('multiply-px', function () {
  return gulp
    .src('./umd/index.css')
    .pipe(postcss([pxMultiplePlugin]))
    .pipe(
      rename({
        suffix: '@2x',
      })
    )
    .pipe(gulp.dest('./umd'))
})

gulp.task('assets', function () {
  return gulp
    .src('./src/assets/**/*')
    .pipe(gulp.dest('es/assets'))
    .pipe(gulp.dest('cjs/assets'))
})

gulp.task('copy-css', function () {
  return gulp
    .src(['./umd/index.css', './umd/index@2x.css'])
    .pipe(gulp.dest('es/'))
    .pipe(gulp.dest('umd/'))
})

gulp.task('clean', async function () {
  await del('cjs/**')
  await del('es/**')
  await del('umd/**')
})

gulp.task('cjs', function () {
  const tsProject = ts({
    ...tsconfig.compilerOptions,
    module: 'CommonJS',
  })
  return gulp
    .src(['src/**/*.{ts,tsx}'], {
      ignore: ['**/demos/**/*', '**/__tests__/**/*', '**/__test__/**/*'],
    })
    .pipe(tsProject)
    .pipe(babel())
    .pipe(gulp.dest('cjs/'))
})

gulp.task('es', function () {
  const tsProject = ts({
    ...tsconfig.compilerOptions,
    module: 'ESNext',
  })
  return gulp
    .src(['src/**/*.{ts,tsx}'], {
      ignore: ['**/demos/**/*', '**/__tests__/**/*', '**/__test__/**/*'],
    })
    .pipe(tsProject)
    .pipe(babel())
    .pipe(gulp.dest('es/'))
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
      ignore: ['**/demos/**/*', '**/__tests__/**/*', '**/__test__/**/*'],
    })
    .pipe(tsProject)
    .pipe(gulp.dest('es/'))
    .pipe(gulp.dest('cjs/'))
})

gulp.task('umd', function () {
  return gulp
    .src('es/index.js')
    .pipe(
      webpackStream(
        {
          output: {
            filename: 'antd-mobile.js',
            library: {
              type: 'umd',
              name: 'am',
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
    .pipe(gulp.dest('umd/'))
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
    'copy-css'
  )
)
