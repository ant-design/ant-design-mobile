const gulp = require('gulp')
const less = require('gulp-less')
const path = require('path')
const postcss = require('gulp-postcss')
const rename = require('gulp-rename')
const babel = require('gulp-babel')
const ts = require('gulp-typescript')
const del = require('del')

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
    .pipe(gulp.dest('es/assets'))
    .pipe(gulp.dest('lib/assets'))
})

gulp.task('copy-files', function () {
  return gulp
    .src(['./lib/index.css', './lib/index@2x.css'])
    .pipe(gulp.dest('es/'))
})

gulp.task('clean', async function () {
  await del('lib/**')
  await del('es/**')
  await del('dist/**')
})

gulp.task('cjs', function () {
  const tsProject = ts.createProject('tsconfig.json', {
    module: 'CommonJS',
  })
  return gulp
    .src(['src/**/*.{ts,tsx}'], {
      ignore: ['**/demos', '**/__tests__', '**/__test__'],
    })
    .pipe(tsProject())
    .pipe(
      babel({
        // configFile: './.babelrc.json',
      })
    )
    .pipe(gulp.dest('lib/'))
})

gulp.task('es', function () {
  const tsProject = ts.createProject('tsconfig.json', {
    module: 'ESNext',
  })
  return gulp
    .src(['src/**/*.{ts,tsx}'], {
      ignore: ['**/demos', '**/__tests__', '**/__test__'],
    })
    .pipe(tsProject())
    .pipe(
      babel({
        // configFile: '.babelrc',
      })
    )
    .pipe(gulp.dest('es/'))
})

gulp.task('declaration', function () {
  const tsProject = ts.createProject('tsconfig.json', {
    declaration: true,
    emitDeclarationOnly: true,
  })
  return gulp
    .src(['src/**/*.{ts,tsx}'], {
      ignore: ['**/demos', '**/__tests__', '**/__test__'],
    })
    .pipe(tsProject())
    .pipe(gulp.dest('es/'))
    .pipe(gulp.dest('lib/'))
})

// gulp.task('less', function () {
//   return gulp.src('./src/index.less').pipe(less()).pipe(gulp.dest('./dist'))
// })

gulp.task(
  'default',
  gulp.series(
    'clean',
    'cjs',
    'es',
    'declaration',
    'less',
    'multiply-px',
    'copy-files',
    'assets'
  )
)
// exports.default = gulp.series('clean', 'cjs', 'es', 'declaration', 'less')
