import React, {Component} from 'react';

//函数式组件context
//创建context对象  并设置初始值
const UserContext=React.createContext({
    name:'Nick',
    age:18
})


/*export default class App extends Component {
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
}*/
export default  function App() {
    const [count,setCount]=React.useState({
        message:'hello React',
        age:18
    })
    return (
        <UserContext.Provider value={count}>
            <Profile></Profile>
        </UserContext.Provider>
    )
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
                        <div>
                            <div>我是ProfileHeader组件</div>
                            <div>{value.message}</div>
                            <div>{value.age}</div>
                        </div>
                    )
                }
            }
        </UserContext.Consumer>
    )
}
