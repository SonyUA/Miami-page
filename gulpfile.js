let gulp = require('gulp');
let sass = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');


function sassToCSS(done) {
    gulp.src('./scss/style.scss')
        .pipe(sass({
            errorLogToConsole: true,

        }))
        .on('error', console.error.bind(console))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 3 versions'],
            cascade: true,
            grid: true
        }))
        .pipe(gulp.dest('./css/'));
    done();
};


function watchSass() {
    gulp.watch('./scss/**/*', sassToCSS);
}
gulp.task('default', gulp.series(sassToCSS, watchSass))