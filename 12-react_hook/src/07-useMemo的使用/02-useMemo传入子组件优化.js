import React, {Component,useState,useCallback,useMemo,memo} from 'react';


export default function MemoHook() {
    console.log("MemoHook重新渲染");
    const [show,setShow]=useState(false)
    // const info={
    //     name:'xiaohua',
    //     age:19
    // }
    //使用useMemo缓存info后，子组件渲染父组件则会根据info值是否变动来决定是否渲染
    const info=useMemo(()=>{
        return { name: "why", age: 18}
    },[])
    return (
        <div>
            <HYButton info={info}></HYButton>
            <button onClick={e => setShow(!show)}>show切换</button>
        </div>
    )
}
const HYButton = memo((props) => {
    console.log("HYButton重新渲染:");
    return <h2>名字:{props.info.name} 年龄:{props.info.age}</h2>
});