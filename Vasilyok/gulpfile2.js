var gulp = require('gulp'),
  browserSync = require('browser-sync').create(),
  sass = require('gulp-sass'),
  concatCss = require('gulp-concat-css'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  cleanCSS = require('gulp-clean-css');
notify = require('gulp-notify');

// Запускаем сервер + отслеживаем sass/html файлы
gulp.task('serve', ['sass'], function() {
  browserSync.init({
    server: ''
  });

  gulp.watch('sass/**/*.sass', ['sass']);
  gulp.watch('*.html').on('change', browserSync.reload);
  gulp.watch('js/**/*.js').on('change', browserSync.reload);
});

// Компилируем sass в CSS, ставим префиксы и сжимаем, вставляем изменения в браузер
gulp.task('sass', function() {
  return (
    gulp
      .src('sass/**/*.sass')
      .pipe(
        sass().on(
          'error',
          notify.onError({
            message: '<%= error.message %>',
            title: 'CSS compilation error'
          })
        )
      )

      .pipe(postcss([autoprefixer()]))
      //.pipe(concatCss("style.css"))
      .pipe(cleanCSS())
      .pipe(gulp.dest('css'))
      .pipe(browserSync.stream())
  );
});

gulp.task('compileJs', function() {
  return gulp
    .src('src/js/*.js')
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(gulp.dest('src/js/'));
});

gulp.task('compileCss', function() {
  return gulp
    .src('css/*.css')
    .pipe(concat('style.css'))
    .pipe(gulp.dest('css/'));
});

gulp.task('default', ['serve']);
