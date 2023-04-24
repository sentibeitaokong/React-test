import React, {Component} from 'react';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div>我是App组件</div>
                <Cpn title='hello'></Cpn>
            </div>
        )
    }
}

function Cpn(props) {
    return (
        <div>我是Cpn组件 {props.title}</div>
    )
}

