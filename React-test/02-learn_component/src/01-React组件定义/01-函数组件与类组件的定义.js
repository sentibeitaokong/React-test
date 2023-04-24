import React, {Component} from 'react';

/*export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message:'Hello world'
        };
    }

    render() {
        return (
            <div>
                <div>我是类组件</div>
                <div>{this.state.message}</div>
            </div>
        )
    }
}*/
//函数式组件特点
//1.没有this
//2.没有内部状态 生命周期等
export default function App() {
    return (
        <div>
            <div>我是函数式组件</div>
        </div>
    )
}
