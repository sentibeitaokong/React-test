import React, {Component,createContext} from 'react';

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
                    <Home></Home>
                    <About></About>
                </UserContext.Provider>
            </div>
        )
    }
}
function Home() {
    return (
        <UserContext.Consumer>
            {
                value=>{
                    return <div>Home: 昵称{value.nickname},年龄{value.age},区域{value.region}</div>
                }
            }
        </UserContext.Consumer>
    )
}
function About() {
    return (
        <UserContext.Consumer>
            {
                value=>{
                    return <div>About: 昵称{value.nickname},年龄{value.age},区域{value.region}</div>
                }
            }
        </UserContext.Consumer>
    )
}
