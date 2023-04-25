import React, {Component} from 'react';
import styled from 'styled-components'


const HYButton=styled.button`
    padding:10px;
    color:red
`

const HYPrimaryButton=styled(HYButton)`
       color:#fff;
       background-color:red
`
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <HYButton>特殊的按钮</HYButton>
                <HYPrimaryButton>主要的按钮</HYPrimaryButton>
            </div>
        )
    }
}
