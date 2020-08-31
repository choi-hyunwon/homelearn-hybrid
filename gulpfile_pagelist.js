const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const rename = require("gulp-rename");
const del = require('del');
const cssImport = require('postcss-import');

gulp.task('distDel', function () {
  del('pagelist/css');
});
/* sass TASK*/
function tasksass() {
  return gulp.src(['pagelist/sass/style.scss'])
    .pipe(sass())
    .pipe(rename({extname: '.css' }))
    .pipe(gulp.dest('pagelist/css/'))
}
/* pcss TASK*/
function pcss() {
  return gulp.src(['pagelist/css/style.css'])
    .pipe(
      postcss([
        require('postcss-preset-env')({
          stage: 0,
          features: {
            'nesting-rules': true
          }
        })
      ])
    )
    .pipe(rename({extname: '.css' }))
    .pipe(gulp.dest('pagelist/css/'))
}
gulp.task("csscompile", gulp.series(tasksass,pcss));
function watchsass() {
  gulp.watch('pagelist/scss/style.css', gulp.series(tasksass, pcss));
}
gulp.task("watchJs", watchsass);
