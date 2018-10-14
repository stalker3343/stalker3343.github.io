var gulp         = require('gulp'),
    browserSync = require('browser-sync'),
    sass         = require('gulp-sass'),
    concatCss    = require('gulp-concat-css'),
    postcss      = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    concat       = require('gulp-concat'),
    uglify       = require('gulp-uglify'),
    cleanCSS     = require('gulp-clean-css')
    notify       = require('gulp-notify');
    var reload = browserSync.reload;
var connectPHP = require('gulp-connect-php');


var paths = {
    html: ['*.html'],
    css: ['sass/**/*.sass'],
    script: ['js/**/*.js']
};

gulp.task('mincss', function () {
    return gulp.src(paths.css)
        .pipe(sass().on('error', notify.onError({
            message: "<%= error.message %>",
            title: "CSS compilation error"
        })))
        .pipe(postcss([autoprefixer()]))
        //.pipe(concatCss("style.css"))
        .pipe(cleanCSS())
        .pipe(gulp.dest("css"))
        .pipe(reload({
            stream: true
        }));
});

// ////////////////////////////////////////////////
// HTML 
// ///////////////////////////////////////////////
gulp.task('html', function () {
    gulp.src(paths.html)
        .pipe(reload({
            stream: true
        }));
});

// ////////////////////////////////////////////////
// Browser-Sync
// // /////////////////////////////////////////////
gulp.task('browserSync', function () {
    browserSync({
        server: {
            baseDir: "./"
        },
        port: 8080,
        open: true,
        notify: false
    });
});

gulp.task('scripts', function () {
    return gulp.src(paths.script)
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(gulp.dest('src/js/'))
        .pipe(reload({
            stream: true
        }));
});


gulp.task('watcher', function () {
    gulp.watch(paths.css, ['mincss']);
    gulp.watch(paths.script, ['scripts']);
    gulp.watch(paths.html, ['html']);
});




// gulp.task('php', function () {
//     connectPHP.server({ base: './', keepalive: true, hostname: 'localhost', port: 8080, open: false });
// });

// gulp.task('browserSync', function () {
//     browserSync({
//         proxy: '127.0.0.1',
//         port: 8080
//     });
// });



// gulp.task('default', ['watcher', 'browserSync', 'php']);

gulp.task('default', ['watcher', 'browserSync']);








