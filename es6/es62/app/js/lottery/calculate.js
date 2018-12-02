class Calculate{
  /**
   * [computeCount 计算注数]
   * @param  {number} active    [当前选中的号码]
   * @param  {string} play_name [当前的玩法标识]
   * @return {number}           [注数]
   */
  computeCount(active,play_name){
    let count=0;
    //用set判断是否存在
    const exist=this.play_list.has(play_name);
    // 指定长度为active，默认值为0
    const arr=new Array(active).fill('0');
    if(exist && play_name.at(0)==='r'){
      //play_name.split('')[1]) 2，3，4，5.。。
      count=Calculate.combine(arr,play_name.split('')[1]).length;
    }
    return count;
  }

  /**
   * [computeBonus 奖金范围预测]
   * @param  {number} active    [当前选中的号码]
   * @param  {string} play_name [当前的玩法标识]
   * @return {array}           [奖金范围]
   */
  computeBonus(active,play_name){
    const play=play_name.split('');
    const self=this;
    let arr=new Array(play[1]*1).fill(0);
    let min,max;
    if(play[0]==='r'){
      //最小命中，11个数，选8，至少命中2个
      let min_active=5-(11-active);
      if(min_active>0){
        if(min_active-play[1]>=0){
          arr=new Array(min_active).fill(0);
          min=Calculate.combine(arr,play[1]).length;
        }else{
          if(play[1]-5>0&&active-play[1]>=0){
            arr=new Array(active-5).fill(0);
            min=Calculate.combine(arr,play[1]-5).length;
          }else{
            min=active-play[1]>-1?1:0
          }
        }
      }else{
        min=active-play[1]>-1?1:0;
      }

      let max_active=Math.min(active,5);
      if(play[1]-5>0){
        if(active-play[1]>=0){
          arr=new Array(active-5).fill(0);
          max=Calculate.combine(arr,play[1]-5).length;
        }else{
          max=0;
        }
      }else if(play[1]-5<0){
        arr=new Array(Math.min(active,5)).fill(0);
        max=Calculate.combine(arr,play[1]).length;
      }else{
        max=1;
      }
    }
    //注数转换成金额，注数*奖金
    return [min,max].map(item=>item*self.play_list.get(play_name).bonus)
  }

  /**
   * [combine 组合运算]
   * @param  {array} arr  [参与组合运算的数组]选中的数组
   * @param  {number} size [组合运算的基数]任2，任3
   * @return {number}      [计算注数]
   */
  static combine(arr,size){
    // 保存结果
    let allResult=[];
    // 即时运行函数
    (function f(arr,size,result){
      let arrLen=arr.length;
      if(size>arrLen){
        return;
      }
      if(size===arrLen){
        // 把最后数组保存到结果中
        allResult.push([].concat(result,arr))
      }else{
        for(let i=0;i<arrLen;i++){
          // 不断生成新数组
          let newResult=[].concat(result);
          newResult.push(arr[i]);
          if(size===1){
            allResult.push(newResult)
          }else{
              // 保存上次结果，且生成新数组
            let newArr=[].concat(arr);
            newArr.splice(0,i+1);
            // 当前size-1,在newArr上运算，newResult结果保存下来
            f(newArr,size-1,newResult)
          }
        }
      }
    })(arr,size,[])
    return allResult
  }

}

export default Calculate
