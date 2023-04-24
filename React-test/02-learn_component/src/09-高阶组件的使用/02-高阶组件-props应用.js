import React, {Component, PureComponent} from 'react';

//高阶函数 复用props
class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div>我是App组件</div>
                <EnhanceHome nickname='home' age={19}></EnhanceHome>
                <EnhanceAbout nickname='about' age={22}></EnhanceAbout>
            </div>
        )
    }
}

function enhanceRegionProps(WrappedComponent){
    return props => {
        return <WrappedComponent {...props} region='中国'></WrappedComponent>
    }
}

function Home(props) {
    return(
        <div>Home: 昵称{props.nickname},年龄{props.age},区域{props.region}</div>
    )
}
function About(props) {
    return(
        <div>About: 昵称{props.nickname},年龄{props.age},区域{props.region}</div>
    )
}
const EnhanceHome=enhanceRegionProps(Home)
const EnhanceAbout=enhanceRegionProps(About)

export default App
