{
  // genertaor基本定义 *，yield，
    // 遇到yield，return就停止不执行
  let tell=function* (){
    yield 'a';
    yield 'b';
    return 'c'
  };

  // 执行到第一个yield之前的语句
  let k=tell();
// next执行第一个yield
  console.log(k.next());
  console.log(k.next());
  console.log(k.next());
  console.log(k.next());
}

{
  let obj={};
  obj[Symbol.iterator]=function* (){
    yield 1;
    yield 2;
    yield 3;
  }

  for(let value of obj){
    console.log('value',value);
  }
}

{
  // 状态机，只在a,b,c三种状态循环
  let state=function* (){
    while(1){
      yield 'A';
      yield 'B';
      yield 'C';
    }
  }
  let status=state();
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
}
//async,await是generate语法糖
// {
//   let state=async function (){
//     while(1){
//       await 'A';
//       await 'B';
//       await 'C';
//     }
//   }
//   let status=state();
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
// }

{
  // 抽奖次数限制

    let draw = function(count){
      //具体抽奖逻辑
        console.info('剩余${count}次')
    }
    //设全局变量保存当前次数，不安全，影响页面性能
    //通过generate控制次数限制
    let residue=function *(count) {
        while (count>0){
          count--;
          yield draw(count);
        }
    }

    // 将generate实例化，次数不保存再全局
    let star=residue(5);
    let btn=document.createElement('button');
    btn.id='start';
    btn.textContent='抽奖';
    document.body.appendChild(btn);
    document.getElementById('start')
        .addEventListener('click',function (){
          star.next();
    },false)
}


{
  // 1，长轮询，定时器不断访问接口2，websocket
    let ajax=function*() {
      yield new Promise(function (resolve,reject) {
              setTimeout(function () {
                  resolve({code:0})
              },200);
          })
      }

      let pull = function () {
          let generater = ajax();
          let step = generater.next();
          step.value.then(function (d) {
              // 不为0则不是最新的
              if (d.code != 0) {
                  setTimeout(function () {
                      console.log('wait');
                      pull()
                  }, 1000)
              } else {
                  console.log(d);
              }
          })
      }
}