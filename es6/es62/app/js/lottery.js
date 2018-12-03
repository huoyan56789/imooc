//处理兼容性
import 'babel-polyfill';
import Base from './lottery/base.js';
import Timer from './lottery/timer.js';
import Calculate from './lottery/calculate.js';
import Interface from './lottery/interface.js';
import $ from 'jquery';
//多重继承，深度拷贝
const copyProperties=function(target,source){

  //Reflect映射，拿到所有属性
  for(let key of Reflect.ownKeys(source)){
      //选择性拷贝
    if(key!=='constructor'&&key!=='prototype'&&key!=='name'){
      //从原对象上获取函数明文
      let desc=Object.getOwnPropertyDescriptor(source,key);
      //es5的方法
      Object.defineProperty(target,key,desc);
    }
  }
}
//多重继承的方法，类的多从继承
const mix=function(...mixins){
  class Mix{}
  for(let mixin of mixins){
    copyProperties(Mix,mixin);
    copyProperties(Mix.prototype,mixin.prototype);
  }
  return Mix
}
//通过mix返回1个类，继承多个类
class Lottery extends mix(Base,Calculate,Interface,Timer){
  constructor(name='syy',cname='11选5',issue='**',state='**'){
    super();
    this.name=name;
    this.cname=cname;
    this.issue=issue;
    this.state=state;
    this.el='';
    //遗漏
    this.omit=new Map();
    //开奖号码
    this.open_code=new Set();
    //开奖记录
    this.open_code_list=new Set();
    //玩法列表
    this.play_list=new Map();
    //选号
    this.number=new Set();
    // 期号选择器
    this.issue_el='#curr_issue';
    // 倒计时
    this.countdown_el='#countdown';
    // 状态
    this.state_el='.state_el';
    // 购物车
    this.cart_el='.codelist';
    //遗漏选择器
    this.omit_el='';
    // 当前玩法
    this.cur_play='r5';
    this.initPlayList();
    this.initNumber();
    //
    this.updateState();
    //
    this.initEvent();
  }

  /**
   * [updateState 状态更新]
   * @return {[type]} [description]
   */
  updateState(){
    //保存当前对象
    let self=this;
    this.getState().then(function(res){
      //当前期号
      self.issue=res.issue;
        // 最新的销售截止时间
      self.end_time=res.end_time;
      self.state=res.state;
      //更新当前期号
      $(self.issue_el).text(res.issue);
      //更新倒计时
      self.countdown(res.end_time,function(time){
        $(self.countdown_el).html(time)
      }, function(){
        setTimeout(function () {
            //重新获取最新的销售状态
          self.updateState();
          self.getOmit(self.issue).then(function(res){
          });
          self.getOpenCode(self.issue).then(function(res){
          })
        }, 500);
      })
    })
  }

  /**
   * [initEvent 初始化事件]
   * @return {[type]} [description]
   */
  initEvent(){
    let self=this;
    // 完成切换，通过bind将changePlayNav方法的this指向，指到当前对象
    $('#plays').on('click','li',self.changePlayNav.bind(self));
    $('.boll-list').on('click','.btn-boll',self.toggleCodeActive.bind(self));
    $('#confirm_sel_code').on('click',self.addCode.bind(self));
    $('.dxjo').on('click','li',self.assistHandle.bind(self));
    $('.qkmethod').on('click','.btn-middle',self.getRandomCode.bind(self));
  }
}

export default Lottery;
