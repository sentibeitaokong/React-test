import React, {Component} from 'react';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message:'hello React'
        };
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <Home message={this.state.message}></Home>
                <button onClick={()=>this.changeText()}>改变文本</button>
            </div>
        )
    }
    changeText(){
        //setState是异步更新，如果需要拿到更新的数据则需要从回调函数中获取
        //setState(更新的属性,回调函数)
        this.setState({
            message:'Hello World'
        },()=>{
            console.log('回调函数',this.state.message)
        })
        //同步写法只能拿到更新之前的值
        console.log(this.state.message)
    }
}

function Home(props) {
    return (
        <div>{props.message}</div>
    )
}
