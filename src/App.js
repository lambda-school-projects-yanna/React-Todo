import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state= {
      toDos: todoData,
      newTodo: ''
    };
  }

  changeHandler = (ev) => {
    this.setState(
      {[ev.target.name]: ev.target.value});
      console.log('changeHandler is working');
  };

  addNew = ev => {
    ev.preventDefault();
    this.setState({
      toDos: [
        ...this.state.toDos, 
        {task: this.state.newTodo}
      ],
      newTodo: ''
    });
    console.log('add new is working');
    console.log(this.state.newTodo);
    console.log(this.state.toDos);
  };

  render() {
    return (
      <div className='App'>
        <TodoList 
          data={this.state.toDos}
        />
        <TodoForm 
          changeHandler={this.changeHandler}
          addNew={this.addNew}
          newTodo={this.newTodo}
        />

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



