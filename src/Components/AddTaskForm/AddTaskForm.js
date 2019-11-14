import React from 'react';
import './AddTaskForm.css';

const AddTaskForm = (props) => {

    return(
          <form onSubmit={props.addTask}>
            <input type="text" name="name" onChange={props.onChange} value={props.task} placeholder='What should you do?' autoFocus={true}/>
            <input type="submit" value="Add task" disabled={!props.isValid}/>
          </form>
    )
};

export default AddTaskForm;