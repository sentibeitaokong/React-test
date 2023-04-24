import React, {Component} from 'react';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:''
        };
    }

    render() {
        return (
            <div>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <label htmlFor="username">
                        用户名：
                        <input type="text"  name='username' id='username' onChange={e => this.changeValue(e)} value={this.state.username}/>
                    </label>
                    <br/>
                    <label htmlFor="password">
                        密码：
                        <input type="text" name='password' id='password' onChange={e => this.changeValue(e)} value={this.state.password}/>
                    </label>
                    <br/>
                    <input type="submit" value="提交"/>
                </form>
            </div>
        )
    }
    changeValue(event){
        console.log([event.target.name])
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    handleSubmit(event){
        event.preventDefault()
        const {username,password}=this.state
        console.log(username,password)
    }
}
