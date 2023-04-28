import React, {Component} from 'react';
import {NavLink,Link,withRouter} from "react-router-dom";

import './App.css'
class App extends Component {
  render() {
      const id = "123";
      const info = {name: "why", age: 18, height: 1.88};
    return (
        <div>
           {/* Link使用*/}
           {/* <Link to='/'>主页</Link>
            <Link to='/about'>关于</Link>
            <Link to='/my'>我的</Link>*/}

            {/* NavLink使用  activeClassName  activeStyle 在react-router-dom 6.0版本以后不生效  */}
            {/*<NavLink to='/' className={this.getActiveClass}>主页</NavLink>
            <NavLink to='/about' className={this.getActiveClass}>关于</NavLink>
            <NavLink to='/my' className={this.getActiveClass}>我的</NavLink>
            <NavLink to='/user' className={this.getActiveClass}>用户</NavLink>*/}
            <NavLink to={`/detail/${id}`}>详情</NavLink>
            <NavLink to={{
                pathname: "/detail3",
                search: "name=abc",
                state: info
            }}
            >
                详情3
            </NavLink>
            <button onClick={e => this.jumpToProduct()}>商品</button>
        </div>
    );
  }
  /*  getActiveClass=({isActive})=>{
        return isActive?'active link-active':'active'
    }*/
    jumpToProduct() {
        console.log(this.props.history)
        this.props.history.push("/product");
    }

}

export default withRouter(App);
