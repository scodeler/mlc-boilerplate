var gulp = require('gulp');
var uglify = require('gulp-uglify');
var compass = require('gulp-compass');
var livereload = require('gulp-livereload');

// PHP
gulp.task('php',function(){
  return gulp.src('dev/*php')
  .pipe(gulp.dest(''))
  .pipe(livereload());
});

// Script
gulp.task('script',function(){
  return gulp.src('dev/js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('js'))
  .pipe(livereload());
});

// Compass
gulp.task('compass',function(){
  return gulp.src('dev/sass/*.scss')
  .pipe(compass({
    config_file : 'dev/sass/config.rb',
    css: '',
    sass: 'dev/sass'
  }))
  .pipe(gulp.dest(''))
  .pipe(livereload());
});

gulp.task('watch',function(){
  livereload.listen({host:'localhost'});
  gulp.watch('dev/*.php',['php']);
  gulp.watch('dev/js/*.js',['script']);
  gulp.watch('dev/sass/*.scss',['compass']);
});