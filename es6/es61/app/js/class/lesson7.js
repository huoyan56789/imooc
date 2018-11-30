{

  function test(x, y = 'world'){
    console.log('默认值',x,y);
  }
  test('hello');
  test('hello','kill');
}

{

  let x='test';
  function test2(x,y=x){
    console.log('作用域',x,y);
  }
  test2('kill');//kill kill
  test2();//undefined undefined
}

{
  // rest参数，一系列参数转换成数组
  function test3(...arg){
    for(let v of arg){
      console.log('rest',v);
    }
  }
  test3(1,2,3,4,'a');
}

{
  // 数组转换成一系列参数
  console.log(...[1,2,4]);//1 2 4
  console.log('a',...[1,2,4]);//a 1 2 4
}

{

  let arrow = v => v*2;
  let arrow2 = () => 5;
  console.log('arrow',arrow(3));
  console.log(arrow2());

}

{
  // 尾调用，函数的最后是函数，提升性能
  function tail(x){
    console.log('tail',x);
  }
  function fx(x){
    return tail(x)
  }
  fx(123)
}
