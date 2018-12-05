# Concurrency

## Jimin 微信公众号：TechDevPro

不断更新，可以关注并留言自己希望学习的技术

## Jimin 手记地址

http://www.imooc.com/u/5980627/articles

不断更新

## Jimin 实战课程【Java开发企业级权限管理系统】推荐

http://coding.imooc.com/class/149.html


## 课程专属的QQ学习群

Web端"进入课程"，页面右侧会看到QQ群号，验证信息是：购买课程对应的订单号

进群可以额外获得学习一些【课外知识】及【面试知识】



lombok中的slf4j
并发模拟
1，postman
2,apache bench(ab)并发测试
ab -n 1000 -c 50 http://lo...
  测试总数   并发数
3,jmeter
4,代码CountDownLatch 计数器闭锁阻塞线程，适合保证线程执行完，进行其他处理
Semaphore信号量，控制同一时间请求的并发量，适合同时并发的线程数


\example\count\CountExample2
AtomicInteger，死循环不断对比尝试，
native是java底层方法
 /**
     * 
     * @param var1 当前对象
     * @param var2 当前值（工作内存）
     * @param var4
     * @param var5 底层值（主内存）
     */
compareAndSwapInt(Object var1, long var2, int var4, int var5);


example\atomic\AtomicExample2.java
AtomicLong，将64位拆成2个32位
example\atomic\AtomicExample3.java
LongAdder，热点数据分离，统计时可能会有误差
/**
 * aba问题，根据版本号
 */
AtomStampedReference

CountExample4 关于volatile


























