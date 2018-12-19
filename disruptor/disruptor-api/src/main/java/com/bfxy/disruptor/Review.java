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

public class Review {

	
	public static void main(String[] args) throws Exception {
		
		//ConcurrentHashMap<String, String> map = new ConcurrentHashMap<>();
		
		//CopyOnWriteArrayList<String> cowal = new CopyOnWriteArrayList<>();
		
		//cowal.add("aaaa");
		
//		AtomicLong count = new AtomicLong(1);
//		boolean flag = count.compareAndSet(0, 2);
//		System.err.println(flag);
//		System.err.println(count.get());
		
		
		/**
		 * LockSupport基于线程，不需要纠结唤醒与阻塞的先后，只要是同一线程即可
		 *  LockSupport : 
		Thread A = new Thread(new Runnable() {
			
			@Override
			public void run() {
				int sum = 0;
				for(int i =0; i < 10; i ++){
					sum += i;
				}
				try {
					Thread.sleep(4000);
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
		//让线程挂起等待
				LockSupport.park();	//由于sleep4000，后于unpark执行
				System.err.println("sum: " + sum);
			}
		});
		
		A.start();
		
		Thread.sleep(1000);
		//解锁的线程为A
		LockSupport.unpark(A);	//先执行
		*/
		
		/**
		Executors.newCachedThreadPool();
		Executors.newFixedThreadPool(10);
		
		
		ThreadPoolExecutor pool = new ThreadPoolExecutor(
		 		5,
				Runtime.getRuntime().availableProcessors() * 2,
				60,
				TimeUnit.SECONDS,
		 //有界队列
				new ArrayBlockingQueue<>(200),
		 //线程工厂，制定线程
				new ThreadFactory() {
					@Override
					public Thread newThread(Runnable r) {
						Thread t = new Thread(r);
						t.setName("order-thread");
		//线程后台运行，改成非后台运行
						if(t.isDaemon()) {
							t.setDaemon(false);
						}
		//线程优先级
						if(Thread.NORM_PRIORITY != t.getPriority()) {
							t.setPriority(Thread.NORM_PRIORITY);
						}
						return t;
					}
				},
		 //拒绝策略
				new RejectedExecutionHandler() {
					@Override
					public void rejectedExecution(Runnable r, ThreadPoolExecutor executor) {
						System.err.println("拒绝策略:" + r);
					}
				});
		//shutdown，shutdownhack（?）
		*/
		
		ReentrantLock reentrantLock = new ReentrantLock(true);

	
		
		
		
		
		
		
		
		
		
		
	}
}
