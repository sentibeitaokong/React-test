import React, {Component,PureComponent,memo} from 'react';

//React.memo 仅检查 props 变更。如果函数组件被 React.memo 包裹，且其实现中拥有 useState，useReducer 或 useContext 的 Hook，当 state 或 context 发生变化时，它仍会重新渲染。
// 默认情况下其只会对复杂对象做浅层对比，如果你想要控制对比过程，那么请将自定义的比较函数通过第二个参数传入来实现。
/*function MyComponent(props) {
    /!* 使用 props 渲染 *!/
}
function areEqual(prevProps, nextProps) {
    /!*
    如果把 nextProps 传入 render 方法的返回结果与
    将 prevProps 传入 render 方法的返回结果一致则返回 true，
    否则返回 false
    true就缓存，false则不缓存
    *!/
}
export default React.memo(MyComponent, areEqual);*/

export default class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            count:0
        };
    }

    render() {
        return (
            <div>
                <MemoHeader></MemoHeader>
                <MemoMain></MemoMain>
                <MemoFooter></MemoFooter>
                <button onClick={()=>this.increment()}>+</button>
            </div>
        )
    }
    //复杂类型 数组引用地址不变PureComponent 会浅层比较如果引用地址一样则不会更新组件
    increment(){
       this.setState({
           count:this.state.count+1
       })
    }
}

const MemoHeader=memo(function Header() {
    console.log('Header被调用')
    return (
        <div>Header组件</div>
    )
},function () {
    return false
})
const MemoMain=memo(function Main(){
    console.log('Main被调用')
    return  (
        <div>
            <div>Main组件</div>
            <Profile></Profile>
        </div>

    )
})

function Profile() {
    console.log('Profile被调用')
    return (
        <div>Profile组件</div>
    )
}

const MemoFooter=memo(function Footer() {
    console.log('Footer被调用')
    return (
        <div>Footer组件</div>
    )
})
