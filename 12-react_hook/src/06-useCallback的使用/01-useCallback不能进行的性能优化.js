import React, {Component,useState,useCallback,useMemo} from 'react';
export default function CallbackHook() {
    const [count,setCount]=useState(0)
    const increment1=()=>{
        console.log('正常情况')
        setCount(count+1)
    }
    const increment2=useCallback(()=>{
        console.log('使用useCallback情况')
        setCount(count+1)
    },[count])

   /* const increment3=useMemo(()=>{
        console.log('使用useMemo的情况')
        return ()=>{
            setCount(count+1)
        }
    },[count])*/
    return (
        <div>
            <h2>当前计数{count}</h2>
            <button onClick={increment1}>+1</button>
            <button onClick={increment2}>+1</button>
            {/*<button onClick={increment3}>+1</button>*/}
        </div>
    )
}
