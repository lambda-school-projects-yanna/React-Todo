import React from 'react';

// add todo using user input and submit button or enter
// clear completed button

function TodoForm(props) {
    return (
        <form onSubmit={props.addNew} >
            <input 
                name='newTodo'
                value={props.newTodo}
                placeholder='todo item' 
                onChange={props.changeHandler}
            />
            <button type='submit'>Add Todo</button>
            <button onClick={props.clearComplete}>Clear Completed</button>
        </form>
    );
};

export default TodoForm; 