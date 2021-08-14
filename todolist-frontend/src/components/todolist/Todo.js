import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./Todo.css"

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

    const insertTodo = () =>{
        axios({
            method: "POST",
            url: baseUrl + "/todo",
            data: {
                todoName: input
            }            
        }).then((res) => {
            setInput("");
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
                todo &nbsp;
                <input
                    type="text"
                    required={true}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && insertTodo(setInput)}
                />
                <button onClick={() => insertTodo(setInput)}>추가</button>
            </div>

            {todos ? todos.map((todolist) =>
                <div key={todolist.id}>
                    <h3>
                        <label
                            className={todolist.completed ? "completed" : null}
                            onClick={() => updateTodo(todolist.id)}>
                            {todolist.todoName}
                        </label>
                        <label onClick={() => deleteTodo(todolist.id)}>&nbsp;&nbsp; ❌</label>
                    </h3>
                </div>
            ) : (
                null
            )}
        </div>
    );
};

export default Todo;