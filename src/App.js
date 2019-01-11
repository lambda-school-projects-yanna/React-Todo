import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';


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
  };

  addNew = ev => {
    ev.preventDefault();
    this.setState({
      toDos: [
        ...this.state.toDos, 
        {task: this.state.newTodo,
          id: Date.now(),
          completed: false
        }
      ],
      newTodo: '',
    })
    ev.target.reset();
  };

  toggleComplete = id => {
    this.setState({
      toDos: this.state.toDos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo, completed: todo.completed === false ? true: false};}
        else {return todo;}
      })})
  };

  clearComplete = done => {
    this.setState({
      toDos: this.state.toDos.filter(todo => {
        if (todo.completed === false) {return todo};
      })
    });
  }


  render() {
    return (
      <div className='App'>
        <h2>Organize Your Priorities!</h2>
        <TodoList 
          data={this.state.toDos}
          toggleComplete={this.toggleComplete}
        />
        <TodoForm 
          changeHandler={this.changeHandler}
          addNew={this.addNew}
          newTodo={this.newTodo}
          clearComplete={this.clearComplete}
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
];



