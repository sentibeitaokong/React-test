import React, {Component,useState,useCallback,useMemo,memo} from 'react';

//useCallback主要用于缓存函数   useMemo主要用于缓存变量
// useCallback(fn, deps) 相当于 useMemo(() => fn, deps)。 主要区别是 React.useMemo 将调用 fn 函数并返回其结果，而 React.useCallback 将返回 fn 函数而不调用它。
//useCallback的使用场景：
// 有一个父组件，其中包含子组件，子组件接收一个函数作为 props ；通常而言，如果父组件更新了，子组件也会执行更新；
// 但是大多数场景下，更新是没有必要的，我们可以借助 useCallback 来返回函数，然后把这个函数作为 props 传递给子组件；这样，子组件就能避免不必要的更新。

//useMemo的使用场景
//useMemo常用在以下两种场景的优化中：1）引用类型的变量   2）需要大量时间执行的计算函数。

export default function CallbackHook() {
    const [count,setCount]=useState(0)
    const [show,setShow]=useState(false)
    const increment1=()=>{
        console.log('正常情况')
        setCount(count+1)
    }
    //useCallback第二个参数表示根据这个值进行更新，这个不变则不更新
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
            <HYButton title='btn1' increment={increment1}>+1</HYButton>
            <HYButton title='btn2' increment={increment2}>+1</HYButton>
            <button onClick={e => setShow(!show)}>show切换</button>
            {/*<button onClick={increment3}>+1</button>*/}
        </div>
    )
}
const HYButton = memo((props) => {
    console.log("HYButton重新渲染: " + props.title);
    return <button onClick={props.increment}>HYButton +1</button>
});