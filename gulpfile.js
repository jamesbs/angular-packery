var gulp = require('gulp');
var eslint = require('gulp-eslint');
var path = require('path');
var debug = require('gulp-debug');

gulp.task('lint', function() {
    var files = gulp.src(path.join(__dirname, 'src/**/*.js'));

    return gulp.src(path.join(__dirname, 'src/**/*.js'))
        .pipe(debug())
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});
