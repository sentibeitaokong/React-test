import React, {Component} from 'react';
import styled from 'styled-components'

const HYInput=styled.input.attrs({
    placeholder:'请输入',
    bColor:'red',
})`
    border-color:${props=>props.bColor};
    color:${props=>props.color};
`
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color:'purple'
        };
    }

    render() {
        return (
            <div>
                <HYInput color={this.state.color}></HYInput>
            </div>
        )
    }
}
