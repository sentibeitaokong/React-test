import React, {Component} from 'react';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies:['大话西游','三国演义','西游记']
        };
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.movies.map((item,index)=>{
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
                <button onClick={()=>this.addMovies()}>添加电影</button>
            </div>
        )
    }
    addMovies(){
        this.setState({
            movies:[...this.state.movies,'水浒传']
        })
    }
}
