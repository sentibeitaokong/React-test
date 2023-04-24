import React, {Component} from 'react';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'hello',
            age:18,
            height:'180'
        };
    }

    render() {
        const {name,age,height}=this.state
        return (
            <div>
                <div>
                    我是App组件
                </div>
                <ChildCpn name={name} age={age} height={height}></ChildCpn>
            </div>
        )
    }
}

class ChildCpn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <div>我是ChildCpn组件</div>
                <div>{this.props.name}</div>
                <div>{this.props.age}</div>
                <div>{this.props.height}</div>
            </div>
        );
    }
}

