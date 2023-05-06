import React, { useState, useEffect } from 'react'

export default function EffectCounterDemo() {
  const [count, setCount] = useState(10);
  //与Effect的区别就在于先修改数据再渲染视图
  useEffect(() => {
    if (count === 0) {
      setCount(Math.random() + 200)
    }
  }, [count]);

  return (
    <div>
      <h2>数字: {count}</h2>
      <button onClick={e => setCount(0)}>修改数字</button>
    </div>
  )
}
