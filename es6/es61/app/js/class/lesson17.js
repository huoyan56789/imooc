// export let A=123;
//
// export function test(){
//   console.log('test');
// }
//
// export class Hello{
//   test(){
//     console.log('class');
//   }
// }
//es6模块化
//变量导出
let A=123;
//函数导出
let test=function(){
  console.log('test');
}
//类导出
class Hello{
  test(){
    console.log('class');
  }
}

export default {
  A,
  test,
  Hello
}
