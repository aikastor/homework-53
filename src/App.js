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
    currentTask : {name:'', key: '',}
  };

  addTask = (e) => {
    e.preventDefault();
    const tasks = this.state.tasks;
    tasks.push()
  };
  render() {
    const tasks = this.state.tasks.map((task) => (
      <Task name={task.name}
            key={task.id}
          />
      ));


    return (
      <div className='App'>
        <AddTaskForm addTask={(e)=>this.addTask(e)}/>
        {tasks}
      </div>
    )

  }
}

export default App;
