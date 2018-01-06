const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', () => gulp.src('./scss/style.scss')
    .pipe(sass({
        /* Default: nested | Values: nested, expanded, compact, compressed */
        outputStyle: 'compact'
    }).on('error', sass.logError))
    .pipe(gulp.dest('./css/'))
);

gulp.task('watch', () => gulp.watch('./scss/*.scss', ['sass']));

gulp.task('default', ['sass']);
