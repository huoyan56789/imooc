import $ from 'jquery';

class Interface{
  /**
   * [getOmit 获取遗漏数据]
   * @param  {string} issue [当前期号]
   * @return {[type]}       [description]
   */
  getOmit(issue){
    //获取当前对象，赋值一个变量
      //箭头函数的this指向是定义时的this指向，而不是运行时的this指向
      //
    let self=this;
    //1
    return new Promise((resolve,reject)=>{
      //jquery的用法
      $.ajax({
        url:'/get/omit',
        data:{
          issue:issue
        },
        dataType:'json',
        success:function(res){
          // 数据保存到当前对象
            //lottery.js多重继承，要this对象
            //lottery实例对象可以访问interface
            //对象.getOmit,
            //setOmit用对象方法的方式保存数据，数据共享
          self.setOmit(res.data);
          resolve.call(self,res)
        },
        error:function(err){
          reject.call(err);
        }
      })
    });
  }
  /**
   * [getOpenCode 获取开奖号码]
   * @param  {string} issue [期号]
   * @return {[type]}       [description]
   */
  getOpenCode(issue){
    let self=this;
    return new Promise((resolve,rejet)=>{
      $.ajax({
        url:'/get/opencode',
        data:{
          issue:issue
        },
        dataType:'json',
        success:function(res){
          c.setOpenCode(res.data);
          resolve.call(self,res);
        },
        error:function(err){
          reject.call(err);
        }
      })
    });
  }

  /**
   * [getState 获取当前状态]
   * @param  {string} issue [当前期号]
   * @return {[type]}       [description]
   */
  getState(issue){
    let self=this;
    return new Promise((resolve,rejet)=>{
      $.ajax({
        url:'/get/state',
        data:{
          issue:issue
        },
        dataType:'json',
        success:function(res){
          resolve.call(self,res);
        },
        error:function(err){
          reject.call(err);
        }
      })
    });
  }
}

export default Interface
