import React, {Component,useRef,useState,useEffect} from 'react';

export default function RefHook() {
    const [count,setCount]=useState(0)

    //useRef可以传入一个参数作为他的值
    const numRef=useRef(count)

    //numRef.current记录更新时的值，也就是count上一次的值
    useEffect(()=>{
        numRef.current = count;
    },[count])
    return (
        <div>
            {/* <h2>numRef中的值: {numRef.current}</h2>
            <h2>count中的值: {count}</h2> */}
            <h2>count上一次的值: {numRef.current}</h2>
            <h2>count这一次的值: {count}</h2>
            <button onClick={e => setCount(count + 10)}>+10</button>
        </div>
    )
}
