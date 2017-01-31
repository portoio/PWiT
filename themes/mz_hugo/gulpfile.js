var gulp = require('gulp'),
  autoprefixer = require('gulp-autoprefixer'),
  concat = require('gulp-concat'),
  sass = require('gulp-sass'),
  nano = require('gulp-cssnano'),
  runSequence = require('run-sequence'),
  exec = require('child_process').exec,
  uglify = require('gulp-uglify');


/**
 * Compile assets
 */

gulp.task('sass', function() {
  return gulp.src("./scss/**/*.scss") // Gets all files ending with .scss
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('app.css'))
    .pipe(nano())
    .pipe(gulp.dest('./static/css'));
});

gulp.task('scripts', function() {
  return gulp.src("./scripts/**/*.js") // Gets all files ending with .scss
    .pipe(concat('site.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./static/js'));
});

/**
 * Watch / Serve
 */

gulp.task('serve', function(){
  gulp.watch('./scss/**/*.scss', ['sass']);
  gulp.watch('./scripts/**/*.js', ['scripts']);

  return exec('hugo server -s ../../', function (err) {
    console.log("Hugo exited with error: ", err);
  }).stdout.pipe(process.stdout);
});


/**
 * Aggregator Tasks
 */

gulp.task('build', ['sass', 'scripts'], function() {
  return exec('hugo -s ../../', function (err) {
    console.log("Hugo exited with error: ", err);
  }).stdout.pipe(process.stdout).stderr.pipe(process.stderr);
});

gulp.task('netlify', ['sass', 'scripts'], function() {
  return exec('hugo_0.18 -s ../../', function (err) {
    if (err) {
      console.log("Hugo exited with error: ", err);
    }
  });
});

gulp.task('default', ['serve']);
