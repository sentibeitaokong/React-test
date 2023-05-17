import React,{Component} from "react";
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color:'blue'
        }
    }

    render() {
        const pStyle={
            color:this.state.color,
            textDecoration:'underline'
        }
        return (
            <div>
                <h2 style={{fontSize:'30px',color:'red'}}>我是标题</h2>
                <p style={pStyle}>我是内容</p>
            </div>
        );
    }
}

