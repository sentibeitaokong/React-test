import React, {Component} from 'react';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message:'Hello world',
            count:0
        };
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <div>{this.state.count}</div>
                <button onClick={()=>this.increment()}>+</button>
                <button onClick={()=>this.changeText()}>改变文本</button>
            </div>
        )
    }
    increment(){
        this.setState({
            count:this.state.count+1
        })
    }
    changeText(){
        this.setState({
            message:'Hello React'
        })
    }
    //根据返回值判断是否更新组件   true则更新  false则不更新
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(nextState.count!==this.state.count){
            return true
        }
        return false
    }
}
