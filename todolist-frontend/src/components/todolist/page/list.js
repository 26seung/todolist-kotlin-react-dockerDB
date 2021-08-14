import React from 'react';

const List = (props) => {
    
    return (
        <div>
            {props.todos ? props.todos.map((todolist) =>
                <div key={todolist.id}>
                    <h3>
                        <label
                            className={todolist.completed ? "completed" : null}
                            onClick={() => props.updateTodo(todolist.id)}>
                            {todolist.todoName}
                        </label>
                        <label onClick={() => props.deleteTodo(todolist.id)}>&nbsp;&nbsp; ❌</label>
                    </h3>
                </div>
            ) : (
                null
            )}
        </div>
    );
};

export default List;