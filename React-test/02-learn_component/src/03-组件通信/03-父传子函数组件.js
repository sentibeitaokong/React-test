import React, {Component} from 'react';

export default function App() {
    return (
        <div>
            <div>我是App组件</div>
            <ChildCpn name='xiaoming' age='18' height='180'> </ChildCpn>
        </div>
    )
}
function ChildCpn(props) {
    return (
        <div>
            <div>我是ChildCpn组件</div>
            <div>{props.name}</div>
            <div>{props.age}</div>
            <div>{props.height}</div>
        </div>
    )
}
