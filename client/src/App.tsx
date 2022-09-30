import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import axios from "axios";

type DateType = {
    id: number
    name: string
}

function App() {

    const [data, setData] = useState<DateType[]>([])
    const [value, setValue] = useState<string>('')

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

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (

        <div className="App">
            {data.map(el => <div>{el.name}</div>)}
            <input value={value} onChange={onChangeHandler}/>
            <button onClick={() => addUserHandler(value)}>add user</button>
        </div>
    );
}

export default App;
