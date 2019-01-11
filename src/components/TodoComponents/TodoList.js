import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        props.data.map(item => {
            return (<Todo task={item.task}/>)})
    );
};

export default TodoList;
