import React, {Component} from 'react';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0
        };
    }
    componentDidMount() {
        console.log('挂载了')
        document.title=this.state.count
    }
    componentWillUnmount() {
        console.log('消失了')
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        document.title=this.state.count
    }

    render() {
        return (
            <div>
                <h2>当前计数{this.state.count}</h2>
                <button onClick={e=>this.setState({count:this.state.count+1})}>+1</button>
            </div>
        )
    }
}
