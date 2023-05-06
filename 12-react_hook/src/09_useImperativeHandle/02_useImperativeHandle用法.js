import React, { useRef, forwardRef,useImperativeHandle} from 'react';

const HYInput=forwardRef((props,ref)=>{
  const inputRef=useRef()

  useImperativeHandle(ref,()=>({
    focus:()=>{
      inputRef.current.focus()
    }, blur:()=>{
          inputRef.current.blur()
    }
  }),[inputRef])
  return <input type="text" ref={inputRef}/>
})
export default function ForwardRefDemo() {
  const inputRef=useRef()

  return (
      <div>
        <HYInput ref={inputRef}></HYInput>
        <button onClick={e=>inputRef.current.focus()}>聚焦</button>
        <button onClick={e=>inputRef.current.blur()}>取消聚焦</button>
      </div>
  )
}
