import React, {Component,useState} from 'react';
export default function MultiState() {
    const [count,setCount]=useState(0)
    const [age,setAge]=useState(18)
    const [friend,setFriend]=useState(['kobe','lilei'])
    return (
        <div>
            <h2>当前计数{count}</h2>
            <h2>当前年龄{age}</h2>
            <ul>
                {
                    friend.map(item=>{
                        return <li key={item}>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}
