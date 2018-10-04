var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('message', function() {
  return console.log('Gulp is running...')
});

gulp.task('sass', function() {
  gulp.src('public/scss/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('dist/css'));
});