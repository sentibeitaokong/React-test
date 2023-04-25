import React, {Component} from 'react';
import homeStyle from './style.module.css'
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div className={homeStyle.title}>我是标题</div>
                <div className={homeStyle.content}>我是内容</div>
            </div>
        )
    }
}
