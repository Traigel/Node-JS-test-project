import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import axios from "axios";

type DateType = {
    _id: string
    name: string
}

function App() {

    const [data, setData] = useState<DateType[]>([])
    const [value, setValue] = useState<string>('')

    const [updateId, setUpdateId] = useState<string>('')
    const [update, setUpdate] = useState<string>('')

    const getUsers = () => {
        axios.get('http://localhost:5000/users')
            .then(res => {
                setData(res.data)
            })
    }

    const addUserHandler = (name: string) => {
        axios.post('http://localhost:5000/users', {name})
            .then(res => {
                getUsers()
            })
    }

    const updateUserHandler = (id: string, name: string) => {
        if (name) {
            axios.put('http://localhost:5000/users', {id, name})
                .then(res => {
                    getUsers()
                })
        }
    }

    const onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const onChangeUpdateHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setUpdate(e.currentTarget.value)
    }

    const onClickRemoveHandler = (id: string) => {
        axios.delete(`http://localhost:5000/users/${id}`)
            .then(res => {
                getUsers()
            })
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (

        <div className="App">

            {data.map(el => <div key={el._id} onClick={() => setUpdateId(el._id)} style={{border: updateId === el._id ? '1px solid red' : ''}}>
                {el.name}
                <button onClick={() => onClickRemoveHandler(el._id)}>X</button>
            </div>)}

            <input value={value} onChange={onChangeValueHandler}/>
            <button onClick={() => addUserHandler(value)}>add user</button>

            <div>
                update user
                <div>
                    <input value={update} onChange={onChangeUpdateHandler}/>
                    <button onClick={() => updateUserHandler(updateId, update)}>update user name</button>
                </div>

            </div>

        </div>
    );
}

export default App;
