{
  let arr=['hello','world'];
  //Symbol.iterator方法名称，()表示方法执行
  let map=arr[Symbol.iterator]();
  console.log(map.next());
  console.log(map.next());
  console.log(map.next());
}

{
  let obj={
    start:[1,3,2],
    end:[7,9,8],
      // [变量名]声明接口方法
    [Symbol.iterator](){
      let self=this;
      let index=0;
      // 合并数组
      let arr=self.start.concat(self.end);
      let len=arr.length;
      // 返回一个对象，且对象有next方法，说明遍历的过程
      return {
        next(){
          if(index<len){
            return {
              value:arr[index++],
              done:false
            }
          }else{
            return {
              value:arr[index++],
              done:true
            }
          }
        }
      }
    }
  }
  for(let key of obj){
    console.log(key);
  }
}

{
  let arr=['hello','world'];
  for(let value of arr){
    console.log('value',value);
  }
}
