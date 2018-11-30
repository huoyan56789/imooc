{
  //修饰器是一个函数，修改类的行为
    //额外安装插件
    //babel-plugin-transform-decorators-legacy
    //限制某一属性只读
    // 修改target类本身，
    // 属性名称name，
    // 该属性描述对象descriptor
  let readonly=function(target,name,descriptor){
    descriptor.writable=false;
    return descriptor
  };

  class Test{
    //修饰器用再类里面
    @readonly
    time(){
      return '2017-03-11'
    }
  }

  let test=new Test();

  // test.time=function(){
  //   console.log('reset time');
  // };

  console.log(test.time());
}


{

  //修饰器在类外面操作，必须在类的前面
  let typename=function(target,name,descriptor){
    target.myname='hello';
  }

  @typename
  class Test{

  }

  console.log('类修饰符',Test.myname);
  // 第三方库修饰器的js库：core-decorators; npm install core-decorators
}

{
  //日志埋点,修饰器，type值
    //好处1，埋点系统分离，修改代码方便，2业务代码简洁
    let log=(type)=>{
      return function(target,name,descriptor){
        // 保存原始函数的函数体
        let src_method=descriptor.value;
        // 方法重新赋值
        descriptor.value=(...arg)=>{
          // 原来的方法先执行
          src_method.apply(target,arg);
          console.info('log ${type}');
          }
      }
    }
  class AD{
      @log('show')
      show(){
        console.info('ad is show')
      }
      @log('click')
      click(){
          console.info('ad is click')
      }
  }
  let ad=new AD();
    ad.show();
    ad.click();
}