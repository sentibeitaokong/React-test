import request from './service/request'
import React, {Component} from 'react';
class App extends Component {
    render() {
        return (
            <div>

            </div>
        );
    }
    async componentDidMount(){
        request({
            url: "/get",
            params: {
                name: "why",
                age: 18
            }
        }).then(console.log)
    }
}

export default App;
