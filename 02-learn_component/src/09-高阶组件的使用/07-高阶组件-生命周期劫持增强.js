import React, {Component, PureComponent} from 'react';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <WithHome></WithHome>
            </div>
        )
    }
}

function withRenderTime(WrappedComponent) {
    return class NewComponent extends PureComponent{
        UNSAFE_componentWillMount() {
            this.beginTime=Date.now()
        }
        componentDidMount() {
            this.endTime=Date.now()
            console.log('生命周期时间',this.endTime-this.beginTime)
        }
        render() {
            return <WrappedComponent></WrappedComponent>
        }
    }
}
function Home() {
    return <h2>Home</h2>
}

const WithHome=withRenderTime(Home)
