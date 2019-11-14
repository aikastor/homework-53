import React, {Component} from 'react';
import nanoid from 'nanoid';

import AddTaskForm from "./Components/AddTaskForm/AddTaskForm";
import Task from "./Components/Task/Task";
import './App.css';

class App extends Component {
  state = {
    tasks : [
      {name: 'Clean my room', id: nanoid()},
      {name: 'Do the dishes', id: nanoid()},
      {name: 'Sing a song', id: nanoid()},
    ],
    currentTask : '',
  };

  addTask = (e) => {
    e.preventDefault();

    if(this.validateForm()) {
      const tasks = [...this.state.tasks];
      tasks.push({name: this.state.currentTask, id: nanoid()});
      this.setState({tasks});
    }

  };
  validateForm () {
    return this.state.currentTask.trim();
  }
  handleInput = e => {
    this.setState({currentTask: e.target.value});
    
  };
  render() {
    const tasks = this.state.tasks.map((task) => (
      <Task name={task.name}
            key={task.id}
          />
      ));

    const isValid = this.validateForm();

    return (
      <div className='App'>
        <AddTaskForm
          addTask={(e)=>this.addTask(e)}
          onChange={(e)=>this.handleInput(e)}
          isValid = {isValid}
        />
        {tasks}
      </div>
    )

  }
}

export default App;
