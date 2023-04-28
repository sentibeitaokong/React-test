import React, {PureComponent} from 'react';
import {
    subAction
} from "../Store/counter/actionCreators.js";
//默认
// import {connect} from "../util/connect";

//react-redux
import {connect} from "react-redux";

class Home extends PureComponent {
    render() {
        return (
            <div style={{marginBottom:'20px'}}>
                <div>Home</div>
                <div>计数：{this.props.counter}</div>
                <button onClick={()=>this.props.decrement()}>-1</button>
                <button onClick={()=>this.props.subNumber(5)}>-5</button>
                <ul>
                    {
                        this.props.banners.map((item, index) => {
                            return <li key={item.acm}>{item.title}</li>
                        })
                    }
                </ul>
                <h1>Recommend</h1>
                <ul>
                    {
                        this.props.recommends.map((item, index) => {
                            return <li key={item.acm}>{item.title}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}


const mapStateToProps=state=>{
    return {
        counter:state.counterInfo.counter,
        banners: state.homeInfo.banners,
        recommends: state.homeInfo.recommends
    }
}

const mapDispatchToProps=dispatch=>{
    return {
        decrement:function () {
            dispatch(subAction(1))
        },
        subNumber:function (num) {
            dispatch(subAction(num))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)