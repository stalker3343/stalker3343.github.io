var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var sass         = require('gulp-sass');
var notify       = require('gulp-notify');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
concat = require('gulp-concat');
debug = require('gulp-debug');
var sourcemaps       = require('gulp-sourcemaps');

var gulpif = require('gulp-if');
var argv = require('yargs').argv;


var imagemin = require('gulp-imagemin'); 
var imageminJpegRecompress = require('imagemin-jpeg-recompress');
var pngquant = require('imagemin-pngquant');
var cache = require('gulp-cache');
var critical = require('critical');





const path = {
    public: {
        html: 'dist/',
        css: 'dist/css',
        js: 'dist/js',
        img: 'dist/img/',
        fonts: 'dist/fonts/'
    },
    src: { 
        reboot: "src/sass/libs/reboot/bootstrap-reboot.css",
        components: 'src/sass/components/*.scss',   
        htmlComponents: 'src/components/*.html',
        html: 'src/*.html',
        libs: 'src/sass/libs/*.css' ,
        // libs: [
        //   './src/sass/libs/bootstrap-reboot.css',
        //   './src/sass/libs/bootstrap-grid.min.css',
        //   './src/sass/libs/animate.css',
        //   './src/sass/libs/magnific-popup.css',
        //   './src/sass/libs/slick.css'
        // ],
        styles: 'src/sass/*.sass',
        js: 'src/js/',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/*.*'
    },
    clean: './public'
  };


function buildCSS() {
    return gulp.src([path.src.reboot, path.src.libs,  path.src.styles])
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
      .pipe(cleanCSS())
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(path.public.css))
    //   .pipe(bs.reload({ stream: true }));
  }


  function buildImgs() {
    return gulp.src(path.src.img)

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
      //.pipe(imagemin())
      .pipe(gulp.dest(path.public.img))
      // .pipe(bs.reload({ stream: true }))
  }


  function buildJS() {
    return gulp.src([path.src.js + 'jquery.min.js',
                     path.src.js + 'magnific-popup.min.js', 
                     path.src.js + 'slick.min.js', 
                     path.src.js + 'wow.js', 
                     path.src.js + 'scripts.js'])
      .pipe(concat('bundle.js'))
      // .pipe(babel({
      //   presets: ['env']
      // }))
      // .pipe(uglify())
      .pipe(gulp.dest(path.public.js))
      // .pipe(bs.reload({ stream: true }))
  }


  
  function crit(cb){
    return critical.generate({
     
      base: 'dist/',
      src: 'index.html',
      css: ['dist/css/bundle.css'],
      dimensions: [{
        width: 320,
        height: 480
      },{
        width: 768,
        height: 1024
      },{
        width: 1280,
        height: 960
      }],
      dest: 'css/critical.css',
      minify: true,
    
      ignore: ['@font-face',/url\(/]
    });
  }

    
  gulp.task('crit', crit);
  
  gulp.task('buildCSS', buildCSS);
  gulp.task('buildImgs', buildImgs);
  gulp.task('buildJS', buildJS);


// function watch (){
//     browserSync.init({
//         server: config.srcDir
//     });
//     gulp.watch( ['./src/*/**/*.+(sass|css)', '!./src/css/style.css'] , ['styles']);
 
//     gulp.watch(config.srcDir + "/*.html").on('change', browserSync.reload);
// } 

// gulp.task('webserver', webserver);
// gulp.task('styles', styles);
// gulp.task('watch', watch);

// gulp.task('default', gulp.series(webserver,styles,watch ));
// gulp.task('default', ['styles','watch' ]);











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