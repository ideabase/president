var gulp = require('gulp');

var imageResize = require('gulp-image-resize');
var changed = require("gulp-changed");

// Gallery Crops //

gulp.task('gallery', function () {
  gulp.src('assets/img/gallery/*.{png,gif,jpg,JPG,JPEG}')
    .pipe(changed('assets/img/gallery/crop/'))
    .pipe(imageResize({
      width : 100,
      height : 100,
      crop : true,
      upscale : false,
      quality : .8,
      format : "jpg"
    }))
    .pipe(gulp.dest('assets/img/gallery/crop/'));
});

// Thumbnail Crops //

gulp.task('thumbnail', function () {
  gulp.src('assets/img/thumbnail/*.{png,gif,jpg,JPG,JPEG}')
    .pipe(changed('assets/img/thumbnail/crop/'))
    .pipe(imageResize({
      width : 500,
      height : 500,
      crop : true,
      upscale : false,
      quality : .8,
      format : "jpg"
    }))
    .pipe(gulp.dest('assets/img/thumbnail/crop/'));
});

// Add Task Names Here //

gulp.task('default', ['gallery', 'thumbnail']);
