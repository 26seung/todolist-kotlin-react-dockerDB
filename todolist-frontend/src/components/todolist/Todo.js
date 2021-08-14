import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Input from './page/input';
import List from './page/list';
import "./Todo.css";

const baseUrl = "http://localhost:9020";

const Todo = () => {

    const [todos,setTodos] = useState([]);
    const [input,setInput] = useState("");

    useEffect(() => {
        getTodos();
    },[])

    const getTodos = () => {
        axios({
            method: "GET",
            url: baseUrl + "/todo",
        }).then((res) => {
            console.log("res: ",res.data)
            setTodos(res.data)
        }).catch((err) => {
            console.log("err: ",err)
        })
    }

    const insertTodo = (setInput) =>{
        axios({
            method: "POST",
            url: baseUrl + "/todo",
            data: {
                todoName: input
            }            
        }).then((res) => {
            setInput("");
            console.log("insert res: ",res.data.todoName)
            window.location.reload();
        }).catch((err) => {
            console.log("insert err: ",err)
        })
    }

    const updateTodo = (id) => {
        console.log(id)
        axios({
            method: "PUT",
            url: baseUrl + "/todo/" + id
        }) 
        // window.location.reload();
        // 다시 SELECT 실행은 낭비가 심함 -> DB에는 처리 되어 있으니 클라이언트에서 처리하는 방식으로 해결
        setTodos(todos.map((res) => res.id === id ? {...res, completed : !res.completed} : res))
    }

    const deleteTodo =  (id) => {
        axios({
            method: "DELETE",
            url: baseUrl + "/todo/" + id
        })
        // 마찬가지로 추가 DB 조회 없이 클라이언트에서 해결
        setTodos(todos.filter((list) => list.id !== id))  
    }

    
    return (
        <div className="todo">
            <div>
                <h1>Todo List</h1>
                <Input setInput={setInput} insertTodo={insertTodo} />
            </div>
            <List todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        </div>
    );
};

export default Todo;