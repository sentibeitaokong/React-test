import React, {useState,useEffect} from 'react';
export default function EffectHook() {
    const [count,setCount]=useState(0)
    //挂载和更新在第一个函数,销毁在第二个函数
    useEffect(()=>{
        console.log('订阅事件')
        document.title=count
        return ()=>{
            console.log('取消订阅')
        }
    },[count])
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={e=>setCount(count+1)}>+1</button>
        </div>
    )
}
