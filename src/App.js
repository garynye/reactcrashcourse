import React, { Component } from 'react'
import Todos from './components/Todos'
import './App.css';

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'take out trash',
        completed: false
      },
      {
        id: 2,
        title: 'eat dinner',
        completed: false
      },
      {
        id: 3,
        title: 'get groceries',
        completed: false
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
