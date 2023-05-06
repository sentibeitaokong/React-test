import React, {useState,useEffect} from 'react';
export default function EffectHook() {
    const [count,setCount]=useState(0)
    const [login,setLogin]=useState(false)
    //挂载和更新在第一个函数,销毁在第二个函数
    useEffect(()=>{
        console.log('修改DOM')
        document.title=count
        return ()=>{
            console.log('取消DOM')
        }
    },[count])
    useEffect(()=>{
        console.log('订阅事件')
        return ()=>{
            console.log('取消订阅')
        }
    },[])

    useEffect(()=>{
        console.log('网络请求')
        return ()=>{
            console.log('取消网络请求')
        }
    },[login])
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={e=>setCount(count+1)}>+1</button>
            <div>{login?'hello World':'hello React'}</div>
            <button onClick={e=>setLogin(!login)}>登录/隐藏</button>
        </div>
    )
}
