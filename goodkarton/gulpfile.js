var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var sass         = require('gulp-sass');
var notify       = require('gulp-notify');
var autoprefixer = require('gulp-autoprefixer');
var concatCss    = require('gulp-concat-css');
sourcemaps       = require('gulp-sourcemaps');

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
        
        .pipe(concatCss("style.css"))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
    }, 1000);
});

gulp.task('default', ['serve']);