import React, {Component} from 'react';
import {CSSTransition} from "react-transition-group";
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
const { Meta } = Card;
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow:true
        };
    }

    render() {
        const {isShow}=this.state
        return (
            <div>
                <button>显示因此</button>
            </div>
        )
    }
}
