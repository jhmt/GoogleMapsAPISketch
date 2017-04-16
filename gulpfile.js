var gulp = require('gulp');
var babel = require('gulp-babel');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// es6 compile task
gulp.task('es6', function() {
  gulp.src('./app/javascript/script.js')
    .pipe(babel())
    .pipe(gulp.dest('./src/javascript/'))
});

// Sass compile task
gulp.task('sass', function() {
  gulp.src('./app/sass/*.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('./src/css/')); 
});

// watch task
gulp.task( 'watch', [ 'es6', 'sass' ], function () {
  gulp.watch( [ './app/sass/*.scss' ], [ 'sass' ] );
  gulp.watch( [ './app/javascript/*.js' ], [ 'es6' ] );
});

gulp.task( 'build', [ 'es6', 'sass' ], function () {
});