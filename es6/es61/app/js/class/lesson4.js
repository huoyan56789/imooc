{

    {  // babel-_babelPolyfill这个库，补丁库兼容，兼容是es7的提案
  console.log('a',`\u0061`);
  // 超过0xffff
  console.log('s',`\u20BB7`);

  console.log('s',`\u{20BB7}`);


}


{
  let s='𠮷';
  // es5對unicode处理不到位，charCodeAt取2个字节
  console.log('length',s.length);//2
  console.log('0',s.charAt(0));//
  console.log('1',s.charAt(1));//57271
  console.log('at0',s.charCodeAt(0));
  console.log('at1',s.charCodeAt(1));

  // es6,𠮷4个字节
  let s1='𠮷a';
  console.log('length',s1.length);//3
  console.log('code0',s1.codePointAt(0));//134071
  console.log('code0',s1.codePointAt(0).toString(16));//20BB7
  console.log('code1',s1.codePointAt(1));//57271，取后2个字节
  console.log('code2',s1.codePointAt(2));//97为a
}

{
 // 将unicode转
  console.log(String.fromCharCode("0x20bb7"));//es5 乱码
  console.log(String.fromCodePoint("0x20bb7"));//es6 正确
}

{
  let str='\u{20bb7}abc';
  // 2个乱码，a,b,c
  for(let i=0;i<str.length;i++){
    console.log('es5',str[i]);
  }
  // 遍历器
  for(let code of str){
    console.log('es6',code);
  }
}

{
  let str="string";
  console.log('includes',str.includes("c"));
  console.log('start',str.startsWith('str'));
  console.log('end',str.endsWith('ng'));
}

{
    // abcabc
  let str="abc";
  console.log(str.repeat(2));
}

{
  // 模板字符串
  let name="list";
  let info="hello world";
  let m=`i am ${name},${info}`;
  console.log(m);
}

{
  // es7的草案，补白，需装，
    // babel-_babelPolyfill这个库，补丁库兼容，兼容是es7的提案
  console.log('1'.padStart(2,'0'));//前补
  console.log('1'.padEnd(2,'0'));//后补
}

{
  let user={
    name:'list',
    info:'hello world'
  };
    // abc`i am ${user.name},${user.info}`标签模板
    // i am ,,, listhello world
    // 作用，防止xss攻击，多语言转换
    console.log(abc`i am ${user.name},${user.info}`);
  function abc(s,v1,v2){
    console.log(s,v1,v2);
    return s+v1+v2
  }
}

{
    // String.raw对所有\进行转义
  console.log(String.raw`Hi\n${1+2}`);//Hi\n3
  console.log(`Hi\n${1+2}`);
}
