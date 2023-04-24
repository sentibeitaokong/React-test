import React, {Component,Fragment} from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            movies:['大话西游','三国演绎','水浒传']
        }
    }
    render()
    {
        return (
            <div>
                <Fragment>
                    {
                        this.state.movies.map((item,index)=>{
                            return <div key={item}>{item}</div>
                        })
                    }
                </Fragment>
            </div>
        );
    }
}

export default App;