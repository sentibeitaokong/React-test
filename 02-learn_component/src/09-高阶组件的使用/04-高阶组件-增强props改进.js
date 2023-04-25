import React, {Component,createContext} from 'react';

function WithUser(WrappedComponent){
    return props=>{
        console.log(props)
        return (
            <UserContext.Consumer>
                {
                    user=>{
                        return <WrappedComponent {...props} {...user}></WrappedComponent>
                    }
                }
            </UserContext.Consumer>
        )
    }
}

const UserContext=createContext({
    nickname:'xiaoming',
    age:18,
    region:'China'
})
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <UserContext.Provider value={{nickname:'xiaohua',age:17,region:'the USA'}}>
                    <UserHome></UserHome>
                    <UserAbout></UserAbout>
                    <UserDetail name={this.props.name}></UserDetail>
                </UserContext.Provider>
            </div>
        )
    }
}
const UserHome=WithUser(Home)
const UserAbout=WithUser(About)
const UserDetail=WithUser(Detail)
function Home(props) {
    return <div>Home: 昵称{props.nickname},年龄{props.age},区域{props.region}</div>
}
function About(props) {
    return <div>About: 昵称{props.nickname},年龄{props.age},区域{props.region}</div>
}
function Detail(props) {
    console.log(props)
    return (
        <div>
            <div>{props.name}</div>
            <div>{props.nickname}</div>
            <div>{props.age}</div>
            <div>{props.region}</div>
        </div>
    )
}
