import React, {Component} from 'react';
import PropTypes from 'prop-types'
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div>我是App组件</div>
                <Cpn name='xioaming' age={18} names={['xiaotao','xiaoli']}></Cpn>
                <Cpn></Cpn>
            </div>
        )
    }
}

/*function Cpn(props){
    return (
        <div>
            <div>我是Cpn组件</div>
            <div>{props.name}</div>
            <div>{props.age}</div>
            <ul>
                {
                    props.names.map((item,index)=>{
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}
//函数组件属性效验及默认值
Cpn.propTypes={
    name:PropTypes.string.isRequired,
    age:PropTypes.number,
    names:PropTypes.array
}
Cpn.defaultProps={
    name:'hello world',
    age:'10',
    names:[1,2]
}*/

class Cpn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <div>我是Cpn组件</div>
                <div>{this.props.name}</div>
                <div>{this.props.age}</div>
                <ul>
                    {
                        this.props.names.map((item,index)=>{
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
    static propTypes={
        name:PropTypes.string.isRequired,
        age:PropTypes.number,
        names:PropTypes.array
    }
    static defaultProps={
        name:'hello world',
        age:10,
        names:[1,2]
    }
}


