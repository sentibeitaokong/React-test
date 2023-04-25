import React, {Component,PureComponent} from 'react';

//App组件更新 会更新子组件
export default class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            arr:[1,2,3,4]
        };
    }

    render() {
        return (
            <div>
                <Header></Header>
                <Main></Main>
                <Footer></Footer>
                <button onClick={()=>this.increment()}>+</button>
            </div>
        )
    }
    //复杂类型 数组引用地址不变PureComponent 会浅层比较如果引用地址一样则不会更新组件
    increment(){
        const {arr}=this.state
        arr.push(5)
        this.setState({
            arr:arr
        })
        /*const {arr}=this.state
        this.setState({
            arr:[...arr,5]
        })*/
    }
}

function Header() {
    console.log('Header被调用')
    return (
        <div>Header组件</div>
    )
}
function Main(){
    console.log('Main被调用')
    return  (
        <div>
            <div>Main组件</div>
            <Profile></Profile>
        </div>

    )
}
function Profile() {
    console.log('Profile被调用')
    return (
        <div>Profile组件</div>
    )
}

function Footer() {
    console.log('Footer被调用')
    return (
        <div>Footer组件</div>
    )
}
