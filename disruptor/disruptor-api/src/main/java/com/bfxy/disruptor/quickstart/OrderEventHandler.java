package com.bfxy.disruptor.quickstart;

import com.lmax.disruptor.EventHandler;

public class OrderEventHandler implements EventHandler<OrderEvent>{
	/**
	 * 事件驱动的模式，监听模式
	 * @param event
	 * @param sequence
	 * @param endOfBatch
	 * @throws Exception
	 */
	public void onEvent(OrderEvent event, long sequence, boolean endOfBatch) throws Exception {
		Thread.sleep(Integer.MAX_VALUE);
		System.err.println("消费者: " + event.getValue());
	}

}
