var gulp = require('gulp');

var imageResize = require('gulp-image-resize');
var changed = require("gulp-changed");

// Gallery Crops //

gulp.task('gallery', function () {
  gulp.src('assets/img/gallery/*.{png,gif,jpg,JPG,JPEG}')
    .pipe(changed('assets/img/gallery/crop/'))
    .pipe(imageResize({
      width : 1500,
      height : 800,
      crop : true,
      upscale : true,
      quality : .6,
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

// Video Screenshot Crops //

gulp.task('videoThumb', function () {
  gulp.src('assets/img/videoThumb/*.{png,gif,jpg,JPG,JPEG}')
    .pipe(changed('assets/img/videoThumb/crop/'))
    .pipe(imageResize({
      width : 800,
      height : 534,
      crop : true,
      upscale : false,
      quality : .7,
      format : "jpg"
    }))
    .pipe(gulp.dest('assets/img/videoThumb/crop/'));
});

// Featured Priority Crops //

gulp.task('featuredPriority', function () {
  gulp.src('assets/img/featuredPriority/*.{png,gif,jpg,JPG,JPEG}')
    .pipe(changed('assets/img/featuredPriority/crop/'))
    .pipe(imageResize({
      width : 300,
      height : 260,
      crop : true,
      upscale : true,
      quality : .7,
      format : "jpg"
    }))
    .pipe(gulp.dest('assets/img/featuredPriority/crop/'));
});

// Banner Crops //

gulp.task('banner', function () {
  gulp.src('assets/img/banner/*.{png,gif,jpg,JPG,JPEG}')
    .pipe(changed('assets/img/banner/crop/'))
    .pipe(imageResize({
      width : 1944,
      height : 656,
      crop : true,
      gravity : "Center",
      upscale : true,
      quality : .7,
      format : "jpg"
    }))
    .pipe(gulp.dest('assets/img/banner/crop/'));
});

// Priority Landing Banner Crops //

gulp.task('priority', function () {
  gulp.src('assets/img/priority/*.{png,gif,jpg,JPG,JPEG}')
    .pipe(changed('assets/img/priority/crop/'))
    .pipe(imageResize({
      width : 1000,
      height : 500,
      crop : true,
      gravity : "Center",
      upscale : true,
      quality : .8,
      format : "jpg"
    }))
    .pipe(gulp.dest('assets/img/priority/crop/'));
});


gulp.task('default', ['gallery', 'priority', 'thumbnail', 'videoThumb', 'featuredPriority', 'banner']);
