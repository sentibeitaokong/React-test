import React, {Component} from 'react';


class Cpn extends Component {
    componentWillUnmount() {
        console.log('我是Cpn组件我被卸载了')
    }

    render() {
        return (
            <div>
                我是cpn组件
            </div>
        );
    }
}
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0,
            show:true,
        };
    }

    render() {
        const {count,show}=this.state
        return (
            <div>
                <div>{count}</div>
                <button onClick={()=>this.increament()}>+1</button>
                <button onClick={()=>this.btnClick()}>切换</button>
                {show&&<Cpn></Cpn>}
            </div>
        )
    }
    btnClick(){
        this.setState({
            show:!this.state.show
        })
    }
    increament(){
        this.setState({
            count:this.state.count+1
        })
    }
    //用于从最新的props
    static getDerivedStateFromProps(nextProps, prevState){
        console.log(nextProps,prevState)
        return null
    }
    //拿到更新之前的props和state 常用场景 获取更新前的滚动位置
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(prevState)
        return prevState
    }
    // 组件是否允许更新   true:更新   false:不更新
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(nextState.count!==this.state.count){
            return true
        }
        return false
    }
    // 组件挂载
    componentDidMount() {
        console.log('我是APP组件我挂载了')
    }
    //组件更新
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(prevProps,prevState,snapshot)
        console.log('我是App组件我更新了')
    }
}
