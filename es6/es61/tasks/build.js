import gulp from 'gulp';
// 任务间的关联关系，顺序
import gulpSequence from 'gulp-sequence';
// 清空，css，编译脚本，执行
gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','serve']));
