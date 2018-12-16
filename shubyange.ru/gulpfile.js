var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var sass         = require('gulp-sass');
var notify       = require('gulp-notify');
var autoprefixer = require('gulp-autoprefixer');
var concatCss    = require('gulp-concat-css');
sourcemaps       = require('gulp-sourcemaps');


var imagemin = require('gulp-imagemin'); 
var imageminJpegRecompress = require('imagemin-jpeg-recompress');
var pngquant = require('imagemin-pngquant');
var cache = require('gulp-cache');

gulp.task('conkat', function () {
    return gulp.src('css/**/*.css')
      .pipe(concatCss("bundle.css"))
      .pipe(gulp.dest('out/'));
  });


// Images optimization and copy in /dist
gulp.task('images', function() {

  
    return gulp.src(['img/**/*.+(jpg|png)'])
      .pipe(cache(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.jpegtran({progressive: true}),
        imageminJpegRecompress({
          loops: 5,
          min: 65,
          max: 70,
          quality:'medium'
        }),
        imagemin.svgo(),
        imagemin.optipng({optimizationLevel: 3}),
        pngquant({quality: '65-70', speed: 5})
      ],{
        verbose: true
      })))
      .pipe(gulp.dest('optim'));
  });
  
  // Clearing the cache
  gulp.task('clear', function (done) {
    return cache.clearAll(done);
  });






// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./src"
    });
  
    gulp.watch("src/sass/**/*.sass", ['sass']);
  
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    setTimeout(function(){
    return gulp.src("src/sass/*.sass")
        .pipe(sourcemaps.init())
        .pipe(sass()
        .on('error', notify.onError({
            message: "<%= error.message %>",
            title: "CSS compilation error"
        })))
        
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(concatCss("style.css"))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
    }, 1000);
});

gulp.task('default', ['serve']);