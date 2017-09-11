var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var fileInclude = require('gulp-file-include');
var config = require('./config');

var projectDir = 'app';
var projectBase = 'app';
var lang = config.get('lang');

//if(isServer){
//    var htmls = [projectDir + '/nims.html', projectDir + '/index.html', projectDir + '/player.html'];
//} else {
var htmls = [projectDir + '/index.html'];
var partials = ['./translations/' + lang + '/**/*'];
//}
    
gulp.task('copyPresentation', function() {
    return gulp.src(projectDir + '/presentation' + '/**/*')
    .pipe(gulp.dest('dist'));
});

gulp.task('html', function() {
    return gulp.src(htmls, {base : projectDir})
    .pipe(fileInclude({
      prefix: '@@',
      basepath: './translations/' + lang + '/',
      context: {
//        MODE: isServer ? 'NIMS_Server' : 'Standalone'
      }
    }))
//    .pipe(htmlmin({collapseWhitespace : true}))
    .pipe(gulp.dest('dist'))
});

gulp.task('watch', function() {
    
    gulp.watch(htmls, ['html']);
    gulp.watch(partials, ['html']);
    
});

gulp.task('dev', ['copyPresentation', 'html','watch']);