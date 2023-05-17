import React, {Component,useState} from 'react';
/**
 * Hook: useState
 *  > 本身是一个函数, 来自react包
 *  > 参数和返回值
 *    1.参数: 作用是给创建出来的状态一个默认值
 *    2.返回值: 数组
 *      * 元素1: 当前state的值
 *      * 元素2: 设置新的值时,使用的一个函数
 */
export  default function CounterHook() {
    const [count,setCount]=useState(0)
    return (
        <div>
            <div>当前计数:{count}</div>
            <button onClick={e=>setCount(count-1)}>-1</button>
            <button onClick={e=>setCount(count+1)}>+1</button>
        </div>
    )
}
