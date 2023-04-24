import React, {Component} from 'react';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message:'Hello world'
        };
    }

    render() {
        return (
            <div>
                <div>我是App组件</div>
                <div>{this.state.message}</div>
                <button onClick={()=>{this.changeText()}}>改变文本</button>
            </div>
        )
    }
    //本质和Object.assign({},this.form,{message:'Hello React'})一样
    changeText(){
        this.setState({
            message:'Hello React'
        })
    }
}
