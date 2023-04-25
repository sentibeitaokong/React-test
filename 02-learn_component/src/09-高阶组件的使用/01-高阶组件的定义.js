import React, {Component, PureComponent} from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>{this.props.name}</div>
        )
    }
}

/*function enhanceComponent(WrappedComponent){
    function NewComponent(props){
        return <WrappedComponent {...props}></WrappedComponent>
    }
    NewComponent.displayName='kobe'
    return NewComponent
}*/

function enhanceComponent(WrappedComponent){
    class NewComponent extends PureComponent{
        render() {
            return <WrappedComponent {...this.props}></WrappedComponent>
        }
    }
    NewComponent.displayName='kobe'
    return NewComponent
}
const EnhanceComponent=enhanceComponent(App)
export default EnhanceComponent
