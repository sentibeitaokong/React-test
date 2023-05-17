import React, {Component} from 'react';

//函数式组件context
//创建context对象  并设置初始值
const UserContext=React.createContext({
    name:'Nick',
    age:18
})
//当不提供Provider的时候默认值就是context中的值
const ThemeContext=React.createContext({
    color:'red'
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
                <ThemeContext.Provider value={{color:'blue'}}>
                    <Profile></Profile>
                </ThemeContext.Provider>
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


function ProfileHeader() {
    return (
        <UserContext.Consumer>
            {
                value=>{
                    return (
                        <ThemeContext.Consumer>
                            {
                                theme=>{
                                    return (
                                        <div>
                                            <div>
                                                我是ProfileHeader组件
                                            </div>
                                            <div>{value.message}</div>
                                            <div>{value.age}</div>
                                            <div>{theme.color}</div>
                                        </div>
                                    )
                                }
                            }
                        </ThemeContext.Consumer>
                    )
                }
            }
        </UserContext.Consumer>
    )
}
