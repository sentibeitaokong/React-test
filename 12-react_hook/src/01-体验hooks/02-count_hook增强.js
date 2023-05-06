import React, {Component,useState} from 'react';

export  default function CounterHook() {
    const [count,setCount]=useState(0)
    return (
        <div>
            <div>当前计数:{count}</div>
            <button onClick={e=>setCount(count-1)}>-1</button>
            <button onClick={e=>setCount(count+1)}>+1</button>
            <button onClick={e=>handleClick()}>+10</button>
            <button onClick={e=>setCount(prevState => prevState+10)}>+10</button>
        </div>
    )
    function handleClick(){
        //setState叠加 prevState上一个state的值
        /*setCount((prevState)=>prevState+10)
        setCount((prevState)=>prevState+10)
        setCount((prevState)=>prevState+10)
        setCount((prevState)=>prevState+10)*/

        //setState会自动合并
        setCount(count+10)
        setCount(count+10)
        setCount(count+10)
        setCount(count+10)
    }
}
