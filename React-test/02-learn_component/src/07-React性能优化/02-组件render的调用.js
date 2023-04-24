import React, {Component} from 'react';

//App组件更新 会更新子组件
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
                <Header></Header>
                <Main></Main>
                <Footer></Footer>
                <button onClick={()=>this.increment()}>+</button>
            </div>
        )
    }
    increment(){
        this.setState({
            count:this.state.count+1
        })
    }
}

function Header() {
    console.log('Header被调用')
    return (
        <div>Header组件</div>
    )
}
function Main(){
    console.log('Main被调用')
    return  (
        <div>
            <div>Main组件</div>
            <Profile></Profile>
        </div>

    )
}
function Profile() {
    console.log('Profile被调用')
    return (
        <div>Profile组件</div>
    )
}

function Footer() {
    console.log('Footer被调用')
    return (
        <div>Footer组件</div>
    )
}
