let gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    cssnano      = require('gulp-cssnano'),
    // uglify = require('gulp-uglify'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-cssmin'), 
    postcss = require('gulp-postcss'),
    pxtoviewport = require('@tporl/postcss-px-to-viewport'),
    gcmq = require('gulp-group-css-media-queries'),
    tinypng = require('gulp-tinypng-compress');

//sass
gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 8 versions']
        }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({ stream: true }))
});


//style
gulp.task('style', function() {
    return gulp.src([
            'node_modules/normalize.css/normalize.css', 
            'node_modules/slick-carousel/slick/slick.css',
            'node_modules/fancybox/dist/css/jquery.fancybox.css',
            // 'node_modules/rateyo/src/jquery.rateyo.css',    
            'node_modules/ion-rangeslider/css/ion.rangeSlider.css', 
            'node_modules/select2/dist/css/select2.css', 
        ])
        .pipe(concat('libs.min.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('app/css'))
});

//script
gulp.task('script', function() {
    return gulp.src([
            'node_modules/jquery/dist/jquery.js', 
            'node_modules/slick-carousel/slick/slick.js',
            'node_modules/svg4everybody/dist/svg4everybody.js',
            'node_modules/fancybox/dist/js/jquery.fancybox.js',
            // 'node_modules/rateyo/src/jquery.rateyo.js',    
            'node_modules/ion-rangeslider/js/ion.rangeSlider.js',
            'node_modules/select2/dist/js/select2.js', 
            'node_modules/lazysizes/lazysizes.js', 
        ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'))
});

//html
gulp.task('html', function() {
    return gulp.src('app/*.html')
        .pipe(browserSync.reload({ stream: true }))
});

//css
gulp.task('css', function() {
    return gulp.src('app/css/*.css')
        .pipe(browserSync.reload({ stream: true }))
});

//js
gulp.task('js', function() {
    return gulp.src('app/js/*.js')
        .pipe(browserSync.reload({ stream: true }))
});


//browser-sync
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
}); 

//function
//images
function images() {
    // gulp.task('images', function() {
        gulp.src('images/**/*.{png,jpg,jpeg}')
            .pipe(tinypng({
                key: 'VFk6s0sk0b4N6SMT30XkYrz4S68r7Sfs',
                sigFile: 'app/images/png-jpg/.tinypng-sigs',
                log: true
            }))
            .pipe(gulp.dest('app/images'));
    // });
}
//css2vw
function css2vw() {
    var processors = [
        pxtoviewport({
            viewportSize: 1920,
            viewportUnit: 'vw',
            mediaViewportSize: [['(max-width: 1024px)', 1024], ['(max-width: 768px)', 360]], 
        })
    ];
    return gulp.src(['app/css/style.min.css'])
        .pipe(gcmq())
        .pipe(postcss(processors))
        .pipe(cssnano())
        .pipe(gulp.dest('app/css'));
}

//watch
gulp.task('watch', function() {
    gulp.watch('app/scss/**/*.scss', gulp.parallel('sass')); 
    gulp.watch('images/**/*', gulp.parallel('images'));
    gulp.watch('app/*.html', gulp.parallel('html'));
    gulp.watch('app/js/*.js', gulp.parallel('js'));
    gulp.watch('app/css/style.min.css', gulp.parallel('css'));
});

//gulp 
gulp.task('convertFromPxToVW', gulp.series(css2vw));   //convert from px to vw
gulp.task('images', gulp.series(images)); //'images'
gulp.task('default', gulp.parallel( 'style', 'script', 'sass', 'watch', 'browser-sync')) // 'style', 'script',