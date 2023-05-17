import React, {Component} from 'react';
import './CSStransitionDemo.css'
import {CSSTransition} from "react-transition-group";
import { Card } from 'antd';
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
                <button onClick={()=>this.setState({isShow:!isShow})}>显示隐藏</button>
                <CSSTransition in={isShow}
                               classNames='card'
                               timeout={500}
                               unmountOnExit={true}
                               appear
                               onEnter={el=>console.log('进入过渡')}
                               onEntering={el=>console.log('正在过渡')}
                               onEntered={el=>console.log('过渡完成')}
                               onExit={el=>console.log('准备退出过渡')}
                               onExiting={el=>console.log('退出过渡')}
                               onExited={el=>console.log('退出过渡完成')}
                >
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </CSSTransition>
            </div>
        )
    }
}
