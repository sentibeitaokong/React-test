import React, {Component} from 'react';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Home></Home>
            </div>
        )
    }
}

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    UNSAFE_componentWillMount() {
        this.beginTime=Date.now()
    }
    componentDidMount() {
        this.endTime=Date.now()
        console.log(this.endTime-this.beginTime)
    }


    render() {
        return (
            <div>
                <h2>Home</h2>
            </div>
        );
    }
}

