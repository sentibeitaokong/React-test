import React, {Component} from 'react';
import {TransitionGroup,CSSTransition} from "react-transition-group";
import './TransitionGroup.css'
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            names: ["coderwhy", "kobe", "lilei"]
        }
    }

    render() {
        return (
            <div>
                <TransitionGroup>
                    {
                        this.state.names.map((item,index)=>{
                            return (
                                <CSSTransition key={item}
                                               timeout={500}
                                               classNames="item">
                                    <div>
                                        {item}
                                        <button onClick={e => this.removeItem(index)}>-</button>
                                    </div>
                                </CSSTransition>
                            )
                        })
                    }
                </TransitionGroup>
                <button onClick={e => this.addName()}>+name</button>
            </div>
        )
    }
    addName() {
        this.setState({
            names: [...this.state.names, "coderwhy"]
        })
    }

    removeItem(index) {
        // index indey indez
        this.setState({
            names: this.state.names.filter((item, indey) => index !== indey)
        })
    }
}
