import React, {Component} from 'react';
import './App.css'

//缺点：可能存在重复的css样式
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div className='title'>我是title</div>
            </div>
        )
    }
}
