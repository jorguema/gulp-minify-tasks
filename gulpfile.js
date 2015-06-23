var gulp = require('gulp'),
	less = require('gulp-less'),
	path = require('path');



var config = {rootPath: path.normalize(__dirname)};
var generalOutput = path.join(config.rootPath, '/public/dist'); 

var pathLess = {
    directives: config.rootPath + '/public/app/directives/**/*.less',
    scripts: config.rootPath + '/public/content/**/*.less',
    main: config.rootPath + '/public/content/less/main.less',
    dest: generalOutput
};


gulp.task('compileless', function () {
    return gulp.src(pathLess.scripts)
        .pipe(less())
        .pipe(gulp.dest(function(file) {    
            console.log(file);
            return file.base;
          }));
    //.pipe(notify("Task STYLES DONE!"));
}); 

gulp.task('default', function() {
    return console.log ("Hello gulp!");
});

