import React, {Component,useState,useMemo} from 'react';
function calcNumber(count) {
    console.log("calcNumber重新计算");
    let total = 0;
    for (let i = 1; i <= count; i++) {
        total += i;
    }
    return total;
}
export default function MemoHookDemo() {
    const [count,setCount]=useState(10)
    const [show,setShow]=useState(false)

    //使用useMemo对count值进行缓存，当count不变时,也不进行计算,并且计算total值只根据count的值来更新
    // const total=calcNumber(count)
    const total=useMemo(()=>{
        return calcNumber(count)
    },[count])
    return (
        <div>
            <h2>当前计数{total}</h2>
            <button onClick={e => setCount(count + 1)}>+1</button>
            <button onClick={e => setShow(!show)}>show切换</button>
        </div>
    )
}
