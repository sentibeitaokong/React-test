import React, {Component,PureComponent} from 'react';
import ReactDOM from "react-dom";

class App extends Component {
    render()
    {
        return (
            <div>
                <Home></Home>
            </div>
        );
    }
}

class Profile extends PureComponent{
    render() {
        return ReactDOM.createPortal(
            this.props.children,
            document.getElementById("root")
        )
    }

}
function Home(){
    return (
        <div id='profile'>
            <div>Home</div>
            <Profile>
                <h2>Profile</h2>
            </Profile>
        </div>
    )
}
export default App;