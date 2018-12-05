package com.mmall.concurrency.example.immutable;

import com.google.common.collect.Maps;
import com.mmall.concurrency.annoations.ThreadSafe;
import lombok.extern.slf4j.Slf4j;

import java.util.Collections;
import java.util.Map;

@Slf4j
@ThreadSafe
public class ImmutableExample2 {

    private  static Map<Integer, Integer> map = Maps.newHashMap();

    static {
        map.put(1, 2);
        map.put(3, 4);
        map.put(5, 6);
        /**
         * unmodifiableMap方法的实现，通过将map复制到新的unmodifiableMap上，对可以修改的
         * 方法抛出异常，由于改变了引用，调用该方法的map不能是final类型
         */
        map = Collections.unmodifiableMap(map);
    }

    public static void main(String[] args) {
//        map.put(1, 3);
        log.info("{}", map.get(1));
    }

}
