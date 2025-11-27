import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './01-React组件定义/01-函数组件与类组件的定义';
// import App from './02-组件的生命周期/组件的生命周期';
// import App from './03-组件通信/01-组件嵌套';
// import App from './03-组件通信/02-父传子类组件';
// import App from './03-组件通信/03-父传子函数组件';
// import App from './03-组件通信/04-父传子属性验证';
// import App from './03-组件通信/05-子传父函数传递';
// import App from './04-React实现slot/01-React实现slot';
// import App from './05-跨组件的通信/01-跨组件通信-props';
// import App from './05-跨组件的通信/02-跨组件通信-context';
// import App from './05-跨组件的通信/03-跨组件通信-context函数';
// import App from './05-跨组件的通信/04-跨组件通信-多个context';
// import App from './06-setState的使用/01-为什么使用setState';
// import App from './06-setState的使用/02-setState异步更新操作';
// import App from './06-setState的使用/03-setState同步更新操作';
// import App from './06-setState的使用/04-setState数据合并';
// import App from './06-setState的使用/05-setState本身的合并';
// import App from './06-setState的使用/06-setState不可变原则';
// import App from './07-React性能优化/01-列表key的作用';
// import App from './07-React性能优化/02-组件render的调用';
// import App from './07-React性能优化/03-shouldComponentUpdate';
// import App from './07-React性能优化/04-PureComponent的使用';
// import App from './07-React性能优化/05-memo的使用';
// import App from './07-React性能优化/06-events全局事件总线';
// import App from './08-受控组件和非受控组件/01-refs的使用';
// import App from './08-受控组件和非受控组件/02-受控组件的使用';
// import App from './08-受控组件和非受控组件/03_受控组件-select的使用';
// import App from './08-受控组件和非受控组件/04-受控组件多输入';
// import App from './08-受控组件和非受控组件/05-非受控组件的使用';
// import App from './09-高阶组件的使用/01-高阶组件的定义';
// import App from './09-高阶组件的使用/02-高阶组件-props应用';
// import App from './09-高阶组件的使用/03-高阶组件-增强props默认';
// import App from './09-高阶组件的使用/04-高阶组件-增强props改进';
import App from './09-高阶组件的使用/05-高阶组件-登录鉴权权限控制';
// import App from './09-高阶组件的使用/06-高阶组件-生命周期时间劫持';
// import App from './09-高阶组件的使用/07-高阶组件-生命周期劫持增强';
// import App from './10-组件内容补充/01-ref的补充';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App name='Yaoming'/>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
