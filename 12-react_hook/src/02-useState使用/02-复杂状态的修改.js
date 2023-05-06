import React, {useState} from 'react';
export default function ComplexHookState() {
    const [friend,setFriend]=useState(['kobe','lilei'])
    const [students, setStudents] = useState([
        { id: 110, name: "why", age: 18 },
        { id: 111, name: "kobe", age: 30 },
        { id: 112, name: "lilei", age: 25 },
    ])
    function addFriend(){
        const newFriend=[...friend,'hmm']
        setFriend(newFriend)

    }
    function incrementAge(index) {
        const newStudent=[...students]
        newStudent[index].age+=1
        setStudents(newStudent)
    }
    return (
        <div>
            <h2>好友列表</h2>
            <ul>
                {
                    friend.map(item=>{
                        return <li key={item}>{item}</li>
                    })
                }
            </ul>
            <button onClick={e=>addFriend()}>添加朋友</button>
            <h2>学生列表</h2>
            <ul>
                {
                    students.map((item,index)=>{
                        return <li key={index}>
                            <span>名字:{item.name} 年龄:{item.age}</span>
                            <button onClick={e=>incrementAge(index)}>+1</button>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}
