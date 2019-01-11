import React from 'react';

// add todo using user input and submit button or enter
// clear completed button

const TodoForm = props => {
    return (
        <form >
            <input placeholder='todo item' onChange={props.updateStateMessage}/>
            <button>Add Todo</button>
            <button>Clear Completed</button>
        </form>

    );
};

export default TodoForm; 