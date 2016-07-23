var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('connectDev', function () {
    connect.server({
        root: ['app'],
        port: 8080,
        livereload: true
    });
});

gulp.task('html', function () {
    gulp.src('./app/*.html')
        .pipe(connect.reload());
});
gulp.task('js', function () {
    gulp.src('./app/js/*.js')
        .pipe(connect.reload());
});
gulp.task('css', function () {
    gulp.src('./app/css/*.css')
        .pipe(connect.reload());
});


gulp.task('watch', function () {
    gulp.watch(['./app/*.html'], ['html']);
    gulp.watch(['./app/js/*.js'], ['js']);
    gulp.watch(['./app/css/*.css'], ['css']);
});
gulp.task('default', ['connectDev', 'watch']);
