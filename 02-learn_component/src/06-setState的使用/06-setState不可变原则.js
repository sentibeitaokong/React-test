import React, {Component} from 'react';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friend:[{
                name:'小李',
                age:18
            },{
                name:'小花',
                age:17
            }]
        };
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.friend.map((item,index)=>{
                            return  (
                                <li key={index}>
                                    <span>{item.name}</span>
                                    <span>{item.age}</span>
                                    <button onClick={e=>this.increment(index)}>+</button>
                                </li>
                            )
                        })
                    }
                </ul>
                <button onClick={()=>this.addData()}>添加数据</button>
            </div>
        )
    }
    addData(){
        const friend=[...this.state.friend]
        friend.push({name:'小明',age:20})
        this.setState({
            friend
        })
    }
    increment(index){
        const friend=[...this.state.friend]
        friend[index].age+=1
        this.setState({
            friend
        })
    }

}
