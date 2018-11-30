{
  // 基本定义ajax执行完后执行 callback
    // 输出结果执行，timeout1，限制性ajax后执行callback
    //回调的顺序困难
  let ajax=function(callback){
    console.log('执行');
    setTimeout(function () {
      callback&&callback.call()
    }, 1000);
  };
  ajax(function(){
    console.log('timeout1');
  })
}

{
  // ajax返回promise对象
  let ajax=function(){
    console.log('执行2');
      // resolve执行下一步的操作，reject中断下一步操作
    return new Promise(function(resolve,reject){
      setTimeout(function () {
        resolve()
      }, 1000);
    })
  };

  // then后有2个function，第一个对应resolve
  ajax().then(function(){
    console.log('promise','timeout2');
  })
}

{
// 串联操作
  let ajax=function(){
    console.log('执行3');
    return new Promise(function(resolve,reject){
      setTimeout(function () {
        resolve()
      }, 1000);
    })
  };

  ajax()
    .then(function(){
    return new Promise(function(resolve,reject){
      setTimeout(function () {
        resolve()
      }, 2000);
    });
  })
    .then(function(){
    console.log('timeout3');
  })
}

{
  let ajax=function(num){
    console.log('执行4');
    return new Promise(function(resolve,reject){
      if(num>5){
        resolve()
      }else{
        throw new Error('出错了')
      }
    })
  }

  ajax(6).then(function(){
    console.log('log',6);
  }).catch(function(err){
    console.log('catch',err);
  });

  ajax(3).then(function(){
    console.log('log',3);
  }).catch(function(err){
    console.log('catch',err);
  });
}


{
  // 所有图片加载完再加载到页面,loadImg本身是promise实例
  function loadImg(src){
    return new Promise((resolve,reject)=>{
      let img=document.createElement('img');
      img.src=src;
      img.onload=function(){
        // 传递图片过去
        resolve(img);
      }
      img.onerror=function (err) {
        reject(err);
      }
    })
  }
  function showImg(imgs) {
      imgs.forEach(function (img) {
          document.body.appendChild(img);
      })
  }
  // 多个promise当作1个promise，所有完成才触发then
  Promise.all([
      loadImg('1.png'),
      loadImg('2.png'),
      loadImg('3.png'),
  ]).then(showImg)
}

{
    // 所有图片加载一个就显示,
    function loadImg(src){
        return new Promise((resolve,reject)=>{
            let img=document.createElement('img');
            img.src=src;
            img.onload=function(){
                // 传递图片过去
                resolve(img);
            }
            img.onerror=function (err) {
                reject(err);
            }
        })
    }
    function showImg(img) {
       let p=document.createElement('p');
       p.appendChild(img);
       document.body.appendChild(p)
    }
    // 有一个状态率先改变
    Promise.race([
        loadImg('1.png'),
        loadImg('2.png'),
        loadImg('3.png'),
    ]).then(showImg)
}