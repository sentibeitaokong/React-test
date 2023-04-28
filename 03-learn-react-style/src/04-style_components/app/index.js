import React, {Component} from 'react';
import styled,{ThemeProvider} from 'styled-components'
import Home from "../Home";
import Profile from '../profile'
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
            <ThemeProvider theme={{themeColor:'blue',fontSize:'30px'}}>
                <Home></Home>
                <HYButton>特殊的按钮</HYButton>
                <HYPrimaryButton>主要的按钮</HYPrimaryButton>
                <Profile></Profile>
            </ThemeProvider>

        )
    }
}
