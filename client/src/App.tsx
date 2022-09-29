import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";

type DateType = {
    id: number
    name: string
}

function App() {

    const [data, setData] = useState<DateType[]>([])

    const getUsers = () => {
        axios.get('http://localhost:5000/users')
            .then(res => {
                setData(res.data)
            })
    }

    const addUserHandler = () => {
        axios.post('http://localhost:5000/users')
            .then(res => {
                getUsers()
            })
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (

        <div className="App">
            {data.map(el => <div>{el.name}</div>)}
            <button onClick={addUserHandler}>add user</button>
        </div>
    );
}

export default App;
