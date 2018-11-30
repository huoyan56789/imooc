import gulp from 'gulp';
import gulpif from 'gulp-if';
import concat from 'gulp-concat';
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';
import named from 'vinyl-named';
import livereload from 'gulp-livereload';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import {log,colors} from 'gulp-util';
import args from './util/args';
// task，标准api，创建一个任务
gulp.task('scripts',()=>{
  打开
  return gulp.src(['app/js/index.js'])

    .pipe(plumber({
      errorHandle:function(){

      }
    }))
    .pipe(named())
      // 重新编译
    .pipe(gulpWebpack({
      module:{
        loaders:[{
          test:/\.js$/,
          loader:'babel'
        }]
      }
    }),null,(err,stats)=>{
      log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
        chunks:false
      }))
    })
// 指定路径
    .pipe(gulp.dest('server/public/js'))
    .pipe(rename({
      basename:'cp',
      extname:'.min.js'
    }))
    // 压缩
    .pipe(uglify({compress:{properties:false},output:{'quote_keys':true}}))
    // 存储
    .pipe(gulp.dest('server/public/js'))
    // 监听
    .pipe(gulpif(args.watch,livereload()))
})
