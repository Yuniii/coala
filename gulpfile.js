var gulp = require('gulp'),
    stylus = require('gulp-stylus');

var mainStylus = './src/stylus/main.styl';

gulp.task('stylus', function () {
    gulp.src(mainStylus)
        .pipe(stylus({compress: true}))
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('default', function () {
    gulp.watch('./src/stylus/**/*.styl', ['stylus']);
});
