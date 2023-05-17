import React, { PureComponent,createRef } from 'react'

export default class App extends PureComponent {
    constructor(props) {
        super(props);
        this.userRef=createRef()
        this.state = {
            username: "",
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <label htmlFor="username">
                        用户:
                        <input type="text"
                               id="username"
                               name="username"
                               ref={this.userRef}/>
                    </label>
                    <br/>
                    <input type="submit" value="提交"/>
                </form>
            </div>
        )
    }

    handleSubmit(event) {
        event.preventDefault();
       console.log(this.userRef.current)
    }
}
