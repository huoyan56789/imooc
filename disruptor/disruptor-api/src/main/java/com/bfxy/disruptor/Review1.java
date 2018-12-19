package com.bfxy.disruptor;

import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.concurrent.Executors;
import java.util.concurrent.RejectedExecutionHandler;
import java.util.concurrent.ThreadFactory;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicLong;
import java.util.concurrent.locks.LockSupport;
import java.util.concurrent.locks.ReentrantLock;

public class Review1 {

	//用object锁，可用LockSupport，看类Review
	public static void main(String[] args) throws Exception {
		
		Object lock = new Object();
		Thread A = new Thread(new Runnable() {
			@Override
			public void run() {
				int sum =0;
				for(int i=0;i<10;i++){
					sum +=i;
				}
				synchronized (lock){
					try {
						//wait方法阻塞后是会释放，notify不释放锁
						lock.wait();
					} catch (InterruptedException e) {
						e.printStackTrace();
					}
				}
			}
		});
		A.start();
		Thread.sleep(2000);
		//wait,notify方法需要配合synchronized使用，得到锁
		synchronized (lock){
			//唤醒了，wait后面的方法执行
			lock.notify();
		}
	}
}
