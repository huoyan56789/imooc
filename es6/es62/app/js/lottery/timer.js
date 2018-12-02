class Timer{
  //定时器方法end结束时间,update时间更新的回调,handle倒计时结束之后回调函数
  countdown(end,update,handle){
    const now=new Date().getTime();
    // 获取当前对象的指针
    const self=this;
    // 如果当前时间>截至时间，说明倒计时结束
    if(now-end>0){
        // 倒计时结束的回调
      handle.call(self);
    }else{
      // 当前时间距结束的剩余时间
      let last_time=end-now;
      const px_d=1000*60*60*24;
      const px_h=1000*60*60;
      const px_m=1000*60;
      const px_s=1000;
      //取整
      let d=Math.floor(last_time/px_d);
      let h=Math.floor((last_time-d*px_d)/px_h);
      let m=Math.floor((last_time-d*px_d-h*px_h)/px_m);
      let s=Math.floor((last_time-d*px_d-h*px_h-m*px_m)/px_s);
      let r=[];
      if(d>0){
        //es6字符串模板
        r.push(`<em>${d}</em>天`);
      }
      if(r.length||(h>0)){
        r.push(`<em>${h}</em>时`);
      }
      if(r.length||m>0){
        r.push(`<em>${m}</em>分`);
      }
      if(r.length||s>0){
        r.push(`<em>${s}</em>秒`);
      }
      self.last_time=r.join('');
      update.call(self,r.join(''));
      // 1秒钟轮询一次
      setTimeout(function () {
        self.countdown(end,update,handle);
      }, 1000);
    }
  }
}

export default Timer
