var gulp = require('gulp');
var bs = require('browser-sync');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
concat = require('gulp-concat');
debug = require('gulp-debug');
var sourcemaps = require('gulp-sourcemaps');
var imagemin = require('gulp-imagemin');
var imageminJpegRecompress = require('imagemin-jpeg-recompress');
const terser = require('gulp-terser');
var gcmq = require('gulp-group-css-media-queries');

var gulpif = require('gulp-if');
var argv = require('yargs').argv;
var pngquant = require('imagemin-pngquant');
var cache = require('gulp-cache');
var webpCss = require('gulp-webp-css');

var gwatch = require('gulp-watch');

const webp = require('gulp-webp');
const path = {
  public: {
    html: 'dist/',
    css: 'dist/css',
    js: 'dist/js',
    img: 'dist/img/',
    fonts: 'dist/fonts/'
  },
  src: {
    html: 'src/*.html',
    libs: 'src/sass/libs/*.css',
    styles: 'src/sass/*.sass',
    js: 'src/js/**/*.js',
    img: 'src/img/**/*.*',
    fonts: 'src/fonts/**/*.*'
  },
  clean: './dist'
};

const config = {
  server: {
    baseDir: './dist'
  },
  host: 'localhost',
  port: 3000
};


function buildCSS(callback) {
  setTimeout(function () {
    gulp.src(['src/sass/libs/reboot/bootstrap-reboot.css', path.src.libs, path.src.styles])
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', notify.onError({
        message: "<%= error.message %>",
        title: "CSS compilation error"
      })))

      .pipe(autoprefixer({
        browsers: ['last 4 versions'],
        cascade: false
      }))

      .pipe(concat('bundle.css'))
      .pipe(gcmq())
      .pipe(cleanCSS())
      .pipe(sourcemaps.write('.'))
      //.pipe(webpCss()) //замещение webp в css(не работате)
      .pipe(gulp.dest(path.public.css))
      .pipe(bs.reload({
        stream: true
      }));
  }, 500);
  callback();
}


function buildImgs() {
  return gulp.src(path.src.img)
    //Продакшн
    .pipe(imagemin([
      imagemin.gifsicle({
        interlaced: true
      }),
      imagemin.jpegtran({
        progressive: true
      }),
      imageminJpegRecompress({
        loops: 5,
        min: 65,
        max: 70,
        quality: 'medium'
      }),
      imagemin.svgo(),
      imagemin.optipng({
        optimizationLevel: 3
      }),
      pngquant({
        quality: '65-70',
        speed: 5
      })
    ], {
      verbose: true
    }))

    //Обычная разработка
    .pipe(gulp.dest(path.public.img))
    .pipe(webp())

    .pipe(gulp.dest(path.public.img))
    .pipe(bs.reload({
      stream: true
    }))
}
gulp.task('minImg', buildImgs)




function buildJS() {
  //return gulp.src(['src/js/jquery/jquery.min.js', path.src.js, 'src/js/scripts/scripts.js'])
  return gulp.src([path.src.js, 'src/js/scripts/scripts.js'])
    .pipe(concat('bundle.js'))
  Продакшн
    .pipe(terser())
    .pipe(gulp.dest(path.public.js))
    .pipe(bs.reload({
      stream: true
    }))
}
gulp.task('buildJS', buildJS)

function buildFonts() {
  return gulp.src(path.src.fonts)
    .pipe(gulp.dest(path.public.fonts))
}


function buildHtml() {
  return gulp.src(path.public.html)
    .pipe(bs.reload({
      stream: true
    }))
}

function webserver() {
  return bs(config)
}

function watch() {

  gwatch(path.public.html, buildHtml);
  gwatch(path.src.styles, buildCSS);
  gwatch(path.src.libs, buildCSS);
  gwatch(path.src.js, buildJS);
  gwatch(path.src.img, buildImgs);
  gwatch(path.src.fonts, buildFonts);
}




const build = gulp.series(buildCSS, buildJS, buildImgs, buildFonts);

gulp.task('default', gulp.series(build, gulp.parallel(webserver, watch)));





//Cоздание критического css
var critical = require('critical');

function crit(cb) {
  return critical.generate({
    inline: true,
    base: 'dist/',
    src: 'index.html',
    css: ['dist/css/bundle.css'],
    dimensions: [{
      width: 320,
      height: 480
    }, {
      width: 768,
      height: 1024
    }, {
      width: 1280,
      height: 960
    }],
    dest: 'index.html',
    minify: true,
    ignore: ['@font-face', /url\(/]
  });
}
gulp.task('crit', crit);



//Создание webp копий изображений


//Замещение webp в html (не работает)
var webpHTML = require('gulp-webp-html');

function webpHtmlReplace() {
  return gulp.src('dist/index.html')
    .pipe(webpHTML())
    .pipe(gulp.dest('dist'))
}
gulp.task('webpHtmlReplace', webpHtmlReplace);




// function  addStyle (paths, outputFilename) {
//     setTimeout(function(){
//         return gulp.src(paths)
//         .pipe(sourcemaps.init())
//         .pipe(sass()
//         .on('error', notify.onError({
//             message: "<%= error.message %>",
//             title: "CSS compilation error"
//         })))
//         .pipe(concat(outputFilename))
//         .pipe(gulpif(argv.prod, cleanCSS()  ))
//         .pipe(sourcemaps.write('.'))

//         .pipe(gulp.dest( path.public.css))

//         // .pipe(debug({title: 'sass:'}))
//         .pipe(browserSync.stream());

//     }, 500);
// };
// function  styles(){
//     addStyle([ 
//         path.src.css +'/bootstrap-reboot.css',
//         path.src.css +'/bootstrap-grid.min.css',
//         path.src.css +'/animate.css',
//         path.src.styles +'/sass/**/*.sass',
//     ], 'style.css') ;
// }