const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');

gulp.task('scss', function () {
  return gulp.src('./src/styles/scope-ui.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed',
      errLogToConsole: false
    }).on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['last 3 versions']}))
    .pipe(rename('scope-ui.min.css'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('default', ['scss']);
