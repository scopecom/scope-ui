const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');

const css = () => {
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
};

const scss = () => {
  return gulp.src('./src/styles/**/*.scss')
    .pipe(gulp.dest('./dist/scss'));
};

const scssIcons = () => {
  return gulp.src('./src/styles/icons/scope-ui.icons.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed',
      errLogToConsole: false
    }).on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['last 3 versions']}))
    .pipe(rename('scope-ui.icons.min.css'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/css'));
};

const build = gulp.parallel(css, scss, scssIcons);

exports.default = build;
