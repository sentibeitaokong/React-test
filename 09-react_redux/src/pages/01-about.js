import React, {PureComponent} from 'react';
import {
    addAction,
    getHomeMultidataAction,
    fetchHomeMultidataAction
} from "../Store/actionCreators.js";
//默认
// import {connect} from "../util/connect";

//react-redux
import {connect} from "react-redux";

class About extends PureComponent {
    componentDidMount() {
        this.props.getHomeMultidata()
    }

    render() {
        return (
            <div>
                <div>About</div>
                <div>计数：{this.props.counter}</div>
                <button onClick={()=>this.props.increment()}>+1</button>
                <button onClick={()=>this.props.addNumber(5)}>+5</button>
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return {
        counter:state.counter
    }
}

const mapDispatchToProps=dispatch=>{
    return {
        increment:function () {
            dispatch(addAction(1))
        },
        addNumber:function (num) {
            dispatch(addAction(num))
        },
        getHomeMultidata(){
            dispatch(fetchHomeMultidataAction)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(About)
