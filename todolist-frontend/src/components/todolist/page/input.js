import React from 'react';

const Input = (props) => {

    return (
        <div>
            todo &nbsp;
            <input
                type="text"
                required={true}
                value={props.input}
                onChange={(e) => props.setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && props.insertTodo(props.setInput)}
            />
            <button onClick={() => props.insertTodo(props.setInput)}>추가</button>
        </div>
    );
};

export default Input;