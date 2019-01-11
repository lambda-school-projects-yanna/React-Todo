import React from 'react';

// add todo using user input and submit button or enter
// clear completed button

function TodoForm(props) {
    return (
        <form onSubmit={props.addNew} >
            <input 
                placeholder='todo item' 
                value={props.newTodo}
                name='newTodo'

                onChange={
                    props.changeHandler}
            />
            <button type='submit'>Add Todo</button>
            <button>Clear Completed</button>
        </form>

    );
};

export default TodoForm; 