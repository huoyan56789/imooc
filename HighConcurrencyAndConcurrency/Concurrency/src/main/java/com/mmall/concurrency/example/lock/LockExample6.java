package com.mmall.concurrency.example.lock;

import lombok.extern.slf4j.Slf4j;

import java.util.concurrent.locks.Condition;
import java.util.concurrent.locks.ReentrantLock;

@Slf4j
public class LockExample6 {

    public static void main(String[] args) {
        ReentrantLock reentrantLock = new ReentrantLock();
        Condition condition = reentrantLock.newCondition();

        new Thread(() -> {
            try {
                reentrantLock.lock();//加入了aqs的等待队列
                log.info("wait signal"); // 1
                condition.await();//从aqs移除，对应锁的释放，加入condition的等待队列
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            log.info("get signal"); // 4
            reentrantLock.unlock();
        }).start();

        new Thread(() -> {
            reentrantLock.lock();//由于线程1释放锁，被唤醒
            log.info("get lock"); // 2
            try {
                Thread.sleep(3000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            //发送信号，condition有线程1的等待节点，
            // 被取出加入到aqs的等待队列，这时线程1还没有被唤醒
            condition.signalAll();//
            log.info("send signal ~ "); // 3

            reentrantLock.unlock(); //aqs中的线程1被唤醒
        }).start();
    }
}
