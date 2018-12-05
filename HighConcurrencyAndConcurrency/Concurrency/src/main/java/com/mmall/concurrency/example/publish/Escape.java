package com.mmall.concurrency.example.publish;

import com.mmall.concurrency.annoations.NotRecommend;
import com.mmall.concurrency.annoations.NotThreadSafe;
import lombok.extern.slf4j.Slf4j;

/**
 * 内部类
 * 有可能溢出
 *不正确发布可变对象会导致2种错误：
 * 1，发布线程以外的任何线程都可以看到过期值
 * 2，线程看到被发布对象的引用是最新的，被发布对象的状态是过期的
 *
 */
@Slf4j
@NotThreadSafe
@NotRecommend
public class Escape {

    private int thisCanBeEscape = 7;

    /**
     * 错误：构造函数期间启动一个线程，
     * 建议：可以采用工厂方法，和私有构造函数完成对象创建
     */
    public Escape () {
        new InnerClass();
    }

    private class InnerClass {
        /**
         * 内部类包含了封装实例的隐含，引用，有可能没有被完全构造完就被发布
         * 构造函数期间启动一个线程
         */
        public InnerClass() {
            log.info("{}", Escape.this.thisCanBeEscape);
        }
    }

    public static void main(String[] args) {
        new Escape();
    }
}
