import React from 'react';

function Todo(props) {
    return (
        <div 
        className={`${props.item.completed}`}
        onClick={() => props.toggleComplete(props.item.id)}>
        {props.item.task}</div>
    );
};


export default Todo;

