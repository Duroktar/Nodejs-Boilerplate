var gulp = require('gulp'),
    webserver = require('gulp-webserver');

gulp.task('webserver', function() {
    gulp.src('app')
        .pipe(webserver({
            // fallback: "app/index.html",
            livereload: true,
            open: true

        }));
});

gulp.task('default', ['webserver']);