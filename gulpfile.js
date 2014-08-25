var uglify = require('gulp-uglify'),
    rjs = require('gulp-requirejs'),
    gulp = require('gulp');

gulp.task('build', function() {
  return rjs({
    mainConfigFile: 'main.js',
    baseUrl: './',
    name: 'main',
    out: 'main.min.js'
  })
    .pipe(uglify({mangle: false}))
    .pipe(gulp.dest("./"));
});