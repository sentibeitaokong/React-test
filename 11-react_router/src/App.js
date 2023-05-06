import React, {Component} from 'react';
import {
    BrowserRouter,
    Link,
    Route,
    NavLink,
    Switch,
    withRouter
} from "react-router-dom";
import { renderRoutes } from 'react-router-config';
import routes from './router';
import Home from './pages/home';
import About from './pages/about';
import Profile from './pages/profile';
import User from './pages/user';
import NoMatch from './pages/noMatch';
import Login from './pages/login';
import Product from './pages/product';
import Detail from './pages/detail';
import Detail2 from './pages/detail2';
import Detail3 from './pages/detail3';
import './App.css'
class App extends Component {
  render() {
      const id = "123";
      const info = {name: "why", age: 18, height: 1.88};
      // console.log(renderRoutes(routes))
    return (
        <div>
           {/* Link使用*/}
           {/* <Link to='/'>主页</Link>
            <Link to='/about'>关于</Link>
            <Link to='/my'>我的</Link>*/}

             {/*NavLink使用  activeClassName  activeStyle 在react-router-dom 6.0版本以后不生效  */}
           {/* <NavLink to='/' className={this.getActiveClass}>主页</NavLink>
            <NavLink to='/about' className={this.getActiveClass}>关于</NavLink>
            <NavLink to='/my' className={this.getActiveClass}>我的</NavLink>
            <NavLink to='/user' className={this.getActiveClass}>用户</NavLink>
            <NavLink to={`/detail/${id}`}>详情</NavLink>
            <NavLink to={{
                pathname: "/detail3",
                search: "name=abc",
                state: info
            }}
            >
                详情3
            </NavLink>
            <button onClick={e => this.jumpToProduct()}>商品</button>*/}
          {/*   <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
          <Route exact path="/:id" component={User} />
          <Route path="/user" component={User} />
          <Route path="/login" component={Login} />
          <Route path="/product" component={Product} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/detail2" component={Detail2} />
          <Route path="/detail3" component={Detail3} />
          <Route component={NoMatch} />
        </Switch>*/}
            {renderRoutes(routes)}
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
