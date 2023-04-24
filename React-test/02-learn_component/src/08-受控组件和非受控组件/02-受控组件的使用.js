import React, {Component} from 'react';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:''
        };
    }

    render() {
        return (
            <div>
                <label htmlFor="username">
                    <input type="text" id='username' onChange={e => this.changeValue(e)} value={this.state.username}/>
                </label>
                {this.state.username}
            </div>
        )
    }
    changeValue(event){
        this.setState({
            username:event.target.value
        })
    }
}
