import React, {Component} from 'react';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0
        };
    }

    render() {
        return (
            <div>
                <div>我是App组件</div>
                <div>{this.state.count}</div>
                <button onClick={()=>this.increment()}>+</button>
            </div>
        )
    }
    increment(){
        this.setState({
            count:this.state.count+1
        })
        this.setState({
            count:this.state.count+1
        })
        this.setState({
            count:this.state.count+1
        })
        this.setState({
            count:this.state.count+1
        })
       /*this.setState((prevState,props)=>{
           return {
               count:prevState.count+1
           }
       })
        this.setState((prevState,props)=>{
            return {
                count:prevState.count+1
            }
        })
        this.setState((prevState,props)=>{
            return {
                count:prevState.count+1
            }
        })
        this.setState((prevState,props)=>{
            return {
                count:prevState.count+1
            }
        })*/
    }
}
