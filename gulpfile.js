var gulp = require('gulp')
var less = require('gulp-less')
var plumber = require('gulp-plumber')
gulp.task('watch', function() {
    gulp.watch("./less/**/*", ['less'])
});

gulp.task('less', function() {
    return gulp.src(['./less/index.less'])
        .pipe(plumber())
        .pipe(less())
        .pipe(gulp.dest("./styles"))
});

gulp.task('default', ['watch', 'less'])
