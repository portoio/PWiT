var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    nano = require('gulp-cssnano'),
    runSequence = require('run-sequence');


/**
 * Tasks
 */

gulp.task('sass', function() {
  return gulp.src("./scss/**/*.scss") // Gets all files ending with .scss
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('app.css'))
    .pipe(nano())
    .pipe(gulp.dest('./static/css'));
});


gulp.task('watch', function(){
  gulp.watch('./scss/*.scss', ['sass']);
});

gulp.task('default', ['watch']);
