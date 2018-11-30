
// 数组扩展
{
  let arr = Array.of(3,4,7,9,11);
  console.log('arr=',arr);

  //empty = []
  let empty=Array.of();
  console.log('empty',empty);
}

{
  let p=document.querySelectorAll('p');
  // 把集合转换成数组
  let pArr=Array.from(p);
  pArr.forEach(function(item){
      // textContent原生节点的一个属性
    console.log(item.textContent);
  });

  // from类似map的用法
  console.log(Array.from([1,3,5],function(item){return item*2}));
}

{
  console.log('fill-7',[1,'a',undefined].fill(7));//[7,7,7]
  console.log('fill,pos',['a','b','c'].fill(7,1,3));//['a',7,7],1标识起始位置，3表示长度
}

{
  for(let index of ['1','c','ks'].keys()){
    console.log('keys',index);
  }
  // 需es7兼容
  for(let value of ['1','c','ks'].values()){
    console.log('values',value);
  }
    // entries不存在兼容问题
  for(let [index,value] of ['1','c','ks'].entries()){
    console.log('values',index,value);
  }
}

{
  //0位置开始替换，从3开始读数据，4截至
  console.log([1,2,3,4,5].copyWithin(0,3,4));//4，2，3，4，5
}

{
  // 查找find只找到第一个符合条件的
  console.log([1,2,3,4,5,6].find(function(item){return item>3}));//4
  console.log([1,2,3,4,5,6].findIndex(function(item){return item>3}));//3
}

{

  console.log('number',[1,2,NaN].includes(1));
  console.log('number',[1,2,NaN].includes(NaN));
}
