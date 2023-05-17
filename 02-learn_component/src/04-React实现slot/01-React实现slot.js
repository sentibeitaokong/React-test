import React, {Component} from 'react';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const leftSlot=<h2>我是左插槽</h2>
        return (
            <div>
                <div>我是App组件</div>
                <NavBar leftSlot={leftSlot} centerSlot={<h1>我是中间插槽</h1>} rightSlot={<h2>我是右插槽</h2>}></NavBar>
            </div>
        )
    }
}

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        //this.props.children包含props属性中的所有子元素
        return (
            <div>
                <div>{this.props.leftSlot}</div>
                <div>{this.props.centerSlot}</div>
                <div>{this.props.rightSlot}</div>
            </div>
        );
    }
}
