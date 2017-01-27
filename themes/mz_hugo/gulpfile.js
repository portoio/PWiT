var gulp = require('gulp'),
  autoprefixer = require('gulp-autoprefixer'),
  concat = require('gulp-concat'),
  sass = require('gulp-sass'),
  nano = require('gulp-cssnano'),
  runSequence = require('run-sequence'),
  exec = require('child_process').exec,
  uglify = require('gulp-uglify'),
  jimp = require('gulp-jimp');


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

// Jimp variables
var imgSrc          = ['../../static/images/**/*', './static/images/**/*'],
    imgDest         = '../../public/images/',
    imgQuality      = 80,
    largeWidth      = 1400,
    regularWidth    = 820,
    mediumWidth     = 680,
    smallWidth      = 460;

// Clean the image folder
gulp.task('jimp-clean', function() {
  return exec('rm ' + imgDest + '*', {stdio: 'inherit'});
});

// Copy original image
gulp.task('jimp-original', function() {
  return gulp.src(imgSrc).pipe(gulp.dest(imgDest));
});

// Create large image
gulp.task('jimp-large', function() {
  return gulp.src(imgSrc).pipe(jimp({
    '-large': {
      resize: { width: largeWidth, height: jimp.AUTO },
      quality: imgQuality
    }
  })).pipe(gulp.dest(imgDest));
});

// Create Regular image
gulp.task('jimp-regular', function() {
  // Regular image
  return gulp.src(imgSrc).pipe(jimp({
    '-regular': {
      resize: { width: regularWidth, height: jimp.AUTO },
      quality: imgQuality
    }
  })).pipe(gulp.dest(imgDest));
});

// Create Medium image
gulp.task('jimp-medium', function() {
  return gulp.src(imgSrc).pipe(jimp({
    '-medium': {
      resize: { width: mediumWidth, height: jimp.AUTO },
      quality: imgQuality
    }
  })).pipe(gulp.dest(imgDest));
});

// Create Small image
gulp.task('jimp-small', function() {
  return gulp.src(imgSrc).pipe(jimp({
    '-small': {
      resize: { width: smallWidth, height: jimp.AUTO },
      quality: imgQuality
    }
  })).pipe(gulp.dest(imgDest));
});

/**
 * Create responsive images with JIMP
 *
 * We divide this into several tasks so we can have a callback
 * and make sure 'build' runs after it's finished.
 */
gulp.task('jimp', function (callback) {
  runSequence(
    'jimp-clean',
    ['jimp-original','jimp-large', 'jimp-regular', 'jimp-medium', 'jimp-small'],
    callback
  );
});

/**
 * Watch / Serve
 */

gulp.task('watch', function(){
  gulp.watch('./scss/**/*.scss', ['sass']);
  gulp.watch('./scripts/**/*.js', ['scripts']);
  gulp.watch(['../../static/images/*', './static/images/*'], ['jimp']);
});

gulp.task('serve', function(){
  return exec('rm -Rf ../../public && hugo serve --source ../../ --renderToDisk', function (err) {
    console.log("Hugo exited with error: ", err);
  }).stdout.pipe(process.stdout);
});

gulp.task('compile', ['sass', 'scripts'], function(){
  return exec('rm -Rf ../../public && hugo --source ../../', function (err) {
    console.log("Hugo exited with error: ", err);
  }).stdout.pipe(process.stdout);
});


/**
 * Aggregator Tasks
 */

gulp.task('build', ['compile', 'jimp']);
gulp.task('default', ['sass', 'scripts', 'serve', 'jimp', 'watch']);
