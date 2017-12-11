const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');


// using image min // type gulp imageMin in terminal to run 

gulp.task('imageMin', () =>
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('public/images')) // it creates images automatically
);

// compile all .js files I have into a main.js

gulp.task('scripts', function(){
	gulp.src('src/js/*.js')
		.pipe(concat('main.js'))
		.pipe(uglify()) 
		.pipe(gulp.dest('public/js'))
});

// compile sass // type gulp sass in terminal to run 

gulp.task('sass', function(){
	gulp.src('src/sass/style.scss')
		.pipe(sass().on('error',sass.logError))
		.pipe(gulp.dest('public/css'));
});

// set to default all these tasks // just type gulp in terminal 

gulp.task('default', ['imageMin','scripts','sass']);

// Use gulp watch on terminal to work while everything is refreshed automatically

gulp.task('watch', function(){
	gulp.watch('src/js/*.js',['scripts']);
	gulp.watch('src/images/*',['imageMin']);
	gulp.watch('src/sass/*.scss',['sass']);
});