import React from 'react';
import Todo from './Todo';

function TodoList(props) {
    return (
        props.data.map(item => {
            return (<Todo item={item} toggleComplete={props.toggleComplete}/>)})
    );
};

export default TodoList;
