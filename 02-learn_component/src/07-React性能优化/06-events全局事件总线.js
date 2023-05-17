import React, {Component} from 'react';
import  {EventEmitter} from 'events'
const eventBus=new EventEmitter()
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <div>我是App组件</div>
                <Home></Home>
                <Profile></Profile>
            </div>
        );
    }

}

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        eventBus.addListener('sayHello',this.HandleHelloListener);
    }
    componentWillUnmount() {
        eventBus.removeListener('sayHello',this.HandleHelloListener)
    }
    HandleHelloListener(name,age){
        console.log(name,age)
    }
    render() {
        return (
            <div>
                Home
            </div>
        );
    }
}

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <button onClick={()=>this.eventBusClick()}>点击Profile按钮</button>
            </div>
        )
    }
    eventBusClick(){
        eventBus.emit('sayHello','小明',18)
    }
}

