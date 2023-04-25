import React, {Component} from 'react';

/*export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0
        };
    }

    render() {
        return (
            <div>
                <div>{this.state.count}</div>
                <button onClick={()=>this.increment()}>+</button>
            </div>
        )
    }
    increment(){
        this.setState({
            count:this.state.count+1
        })
    }
}*/


export default function App() {
    const [count,setCount]=React.useState(0);
    return (
        <div>
            <div>{count}</div>
            <button onClick={()=>setCount(count+1)}>+</button>
        </div>
    )
}
