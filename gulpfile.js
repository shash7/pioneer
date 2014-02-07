var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('compressjs', function() {
  gulp.src('assets/js/*.js')
    .pipe(uglify())
		.pipe(concat("all.js"))
    .pipe(gulp.dest('assets/js/'));
});

gulp.task('default', ['compressjs']);