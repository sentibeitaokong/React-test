import React, {Component} from 'react';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin:true
        };
    }

    render() {
        return (
            <div>
                <CartPage isLogin={this.state.isLogin}></CartPage>
                <button onClick={()=>this.changeStatus()}>{this.state.isLogin?'退出':'登录'}</button>
            </div>
        )
    }
    changeStatus(){
        this.setState({
            isLogin:!this.state.isLogin
        })
    }
}

function withPage(WrappedComponent) {
    const NewCpn=props=>{
        const {isLogin}=props
        if(isLogin){
            return <WrappedComponent {...props}></WrappedComponent>
        }else{
            return <LoginPage></LoginPage>
        }
    }
    NewCpn.dispalyName='isLogin'
    return NewCpn
}
const CartPage=withPage(ExitPage)
function LoginPage() {
    return <div>LoginPage</div>
}
function ExitPage(){
    return  <div>exitPage</div>
}
