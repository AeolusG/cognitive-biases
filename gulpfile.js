import { createRequire } from "module";
const require = createRequire(import.meta.url);

import imagemin, {gifsicle, mozjpeg, optipng, svgo} from 'gulp-imagemin';

const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const prefix = require('gulp-autoprefixer');
const concatFiles = require('gulp-concat-css');
 
gulp.task('concat', function () {
    return gulp.src('src/assets/styles/**/*.css')
      .pipe(concatFiles("styles-min.css"))
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('src/assets/styles-min'));
  });

gulp.task('add-prefix', () => {
    return gulp.src('src/assets/styles/*.css')
    .pipe(prefix({
        cascade: false
    }))
    .pipe(gulp.dest('src/assets/styles-min'))
});

gulp.task('optimize-img', () => {
    return  gulp.src('src/assets/images/**', { encoding: false })
    .pipe(imagemin([
        gifsicle({interlaced: true}),
	    mozjpeg({quality: 75, progressive: true}),
	    optipng({optimizationLevel: 5})
    ],
    {
        verbose: true
    }
    ))
    .pipe(gulp.dest('src/assets/images-opti'))
});
