var gulp = require('gulp');
var bs = require('browser-sync');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
// var autoprefixer = require('gulp-autoprefixer');
// var cleanCSS = require('gulp-clean-css');
// var concat = require('gulp-concat');
// var debug = require('gulp-debug');
var sourcemaps = require('gulp-sourcemaps');
var gwatch = require('gulp-watch');

const config = {
  server: {
    baseDir: './'
  },
  host: 'localhost',
  port: 3000
};

function buildCSS(callback) {
  setTimeout(function() {
    return (
      gulp
        .src('./sass/*')
        .pipe(sourcemaps.init())
        .pipe(
          sass().on(
            'error',
            notify.onError({
              message: '<%= error.message %>',
              title: 'CSS compilation error'
            })
          )
        )

        // .pipe(autoprefixer({
        //   browsers: ['last 4 versions'],
        //   cascade: false
        //   }))

        //   .pipe(concat('bundle.css'))
        //.pipe(gcmq())
        // .pipe(cleanCSS())
        .pipe(sourcemaps.write('.'))
        //.pipe(webpCss()) //замещение webp в css(не работате)
        .pipe(gulp.dest('./css'))
        .pipe(
          bs.reload({
            stream: true
          })
        )
    );
  }, 500);
  callback();
}

function webserver() {
  return bs(config);
}

function buildHtml() {
  return gulp.src('./*.html').pipe(
    bs.reload({
      stream: true
    })
  );
}

function watch() {
  gwatch('./sass', buildCSS);
  gwatch('./*.html', buildHtml);
}

const build = gulp.series(buildCSS, buildHtml);

gulp.task('default', gulp.series(build, gulp.parallel(webserver, watch)));
