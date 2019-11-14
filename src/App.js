import React, {Component} from 'react';
import nanoid from 'nanoid';

import AddTaskForm from "./Components/AddTaskForm/AddTaskForm";
import Task from "./Components/Task/Task";
import './App.css';

class App extends Component {
  state = {
    tasks : [
      {name: 'Clean my room', completed: false, id: nanoid()},
      {name: 'Do the dishes', completed: false, id: nanoid()},
      {name: 'Sing a song', completed: true, id: nanoid()},
    ],
    currentTask : '',
  };

  addTask = (e) => {
    e.preventDefault();

    if(this.validateForm()) {
      const tasks = [...this.state.tasks, {name: this.state.currentTask, completed: false, id: nanoid()}];
      this.setState({tasks});

      let currentTask = this.state.currentTask;
      currentTask = '';
      this.setState({currentTask: currentTask});
    }
  };

  validateForm =()=> (this.state.currentTask.trim());

  handleInput = e => {
    this.setState({currentTask: e.target.value});
  };

  removeTask = id => {
    const taskIndex = this.state.tasks.findIndex(p => p.id === id);
    const tasks = [...this.state.tasks];
    tasks.splice(taskIndex, 1);
    this.setState({tasks});
  };

  handleCompleteTasks = id => {
    const taskIndex = this.state.tasks.findIndex(p => p.id === id);
    const tasks = [...this.state.tasks];
    this.setState({isChecked: !this.state.isChecked});
    tasks[taskIndex].completed = !tasks[taskIndex].completed;
    this.setState({tasks});
  };

  render() {
    const tasks = this.state.tasks.map((task) => (
      <Task name={task.name}
            completed={task.completed}
            key={task.id}
            onClick={()=>this.removeTask(task.id)}
            onChange = {()=>this.handleCompleteTasks(task.id)}
          />
      ));

    const isValid = this.validateForm();

    return (
      <div className='App'>
        <AddTaskForm
          addTask={(e)=>this.addTask(e)}
          onChange={(e)=>this.handleInput(e)}
          isValid = {isValid}
          task = {this.state.currentTask}/>
        {tasks}
      </div>
    )
  }
}

export default App;
