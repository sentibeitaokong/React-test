import React, {Component, PureComponent, createRef, forwardRef} from 'react';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.titleRef=createRef()
        this.countRef=createRef()
        this.titleEl=null
    }

    render() {
        return (
            <div>
                <h2 ref={this.titleRef}> Hello React</h2>
                <h2 ref={arg=>this.titleEl=arg}>Hello World</h2>
                <Count ref={this.countRef}></Count>
                <button onClick={()=>this.changeText()}>改变文本</button>
                <button onClick={e=>this.btnClick()}>加法</button>
            </div>
        )
    }
    btnClick(){
        console.log(this.countRef.current)
        // this.countRef.increment()
    }
    changeText(){
        this.titleRef.current.innerHTML='Hello World'
        console.log(this.countRef.current)
        this.titleEl.innerHTML='Hello 李银河'
    }
}

/*
class Count extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0
        }
    }

    render() {
        return (
            <div>
                <div>{this.state.count}</div>
                <button onClick={()=>this.increment()}>+</button>
            </div>
        );
    }
    increment(){
        this.setState({
            count:this.state.count+1
        })
    }
}
*/

const Count=forwardRef((props,ref)=>{
    const [count,setCount]=React.useState(0)
    return (
        <div>
            <div>{count}</div>
            <button onClick={()=>increment()}   ref={ref}>+</button>
        </div>
    )
     const increment=()=>{
        setCount(count+1)
    }
})
