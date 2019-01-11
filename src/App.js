import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state= {
      toDos: todoData
    };
  }

  render() {
    return (
      <div className='App'>
        <TodoList data={this.state.toDos}/>
        <TodoForm/>
      </div>
    )
  }
};

export default App;

let todoData = [
  {
    task: 'Organize Garage',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: Date.now(),
    completed: false
  },
];



