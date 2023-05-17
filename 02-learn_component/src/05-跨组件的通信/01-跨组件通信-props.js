import React, {Component} from 'react';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message:'hello React'
        };
    }

    render() {
        return (
            <div>
                <div>我是App组件</div>
                <Profile {...this.state}></Profile>
            </div>
        )
    }
}
function Profile(props) {
    return (
        <div>
            <div>我是Profile组件</div>
            <ProfileHead {...props}></ProfileHead>
        </div>
    )
}
function ProfileHead(props) {
    return (
        <div>
            <div>{props.message}</div>
        </div>
    )
}
