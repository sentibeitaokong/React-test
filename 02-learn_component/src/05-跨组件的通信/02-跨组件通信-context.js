import React, {Component} from 'react';

//这种方式只能使用一个context   只适用于类组件
//创建context对象  并设置初始值
const UserContext=React.createContext({
    name:'Nick',
    age:18
})

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message:'hello React',
            age:18
        };
    }

    render() {
        return (
            <UserContext.Provider value={this.state}>
                <Profile></Profile>
            </UserContext.Provider>
        )
    }
}

function Profile(props){
    return (
        <div>
            <div>我是profile组件</div>
            <ProfileHeader></ProfileHeader>
        </div>
    )
}

class ProfileHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    static  contextType=UserContext
    render() {
        return (
            <div>
                <div>我是ProfileHeader组件</div>
                <div>{this.context.message}</div>
            </div>
        );
    }
}


