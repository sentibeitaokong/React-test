import React, {Component} from 'react';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0
        };
    }
    //父组件直接把父组件的函数作为props参数传给子组件,子组件拿到这个参数直接调用就相当于直接调用了父组件中的函数
    render() {
        return (
            <div>
                <div>我是App组件</div>
                <div>{this.state.count}</div>
                <button onClick={()=>this.increament()}>+1</button>
                <Cpn onclick={e=>{this.increament()}}></Cpn>
            </div>
        )
    }
    increament(){
        this.setState({
            count:this.state.count+1
        })
    }
}
function Cpn(props) {
    const {onclick}=props
    return (
        <div>
            <button onClick={onclick}>+1</button>
        </div>
    )
}
