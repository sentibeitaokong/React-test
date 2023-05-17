import React, { useEffect } from 'react';

const Home = (props) => {
  useLoggingLife("Home");
  return <h2>Home</h2>
}

const Profile = (props) => {
  useLoggingLife("Profile");
  return <h2>Profile</h2>
}

export default function CustomLifeHookDemo01() {
  useLoggingLife("CustomLifeHookDemo01");
  return (
    <div>
      <h2>CustomLifeHookDemo01</h2>
      <Home/>
      <Profile/>
    </div>
  )
}

function useLoggingLife(name) {
  useEffect(()=>{
    console.log(`${name}被渲染`)
    return ()=>{
    console.log(`${name}被销毁`)
    }
  },[])
}
