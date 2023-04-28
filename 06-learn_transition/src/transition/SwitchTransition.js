import React, {Component} from 'react';
import {SwitchTransition,CSSTransition} from "react-transition-group";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOn:true
        };
    }

    render() {
        const {isOn}=this.state
        return (
            <div>
                <SwitchTransition >
                    <CSSTransition key={isOn?'on':'off'} classNames='btn' timeout={1000}>
                        <button onClick={e => this.setState({isOn: !isOn})}>
                            {isOn ? "on": "off"}
                        </button>
                    </CSSTransition>
                </SwitchTransition>
            </div>
        )
    }
}
