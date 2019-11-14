import React from 'react';


import './Task.css';

const Task = props => {
  return(
    <div className='Task' >
      <div className='Task-txt'>
        <label className="container"> <p style={{textDecoration: props.completed ? "line-through" : "" }}>{props.name}</p>
          <input type="checkbox"  onChange={props.onChange} checked={ props.completed ? 'checked': ''} name='chkbx'/>
            <span className="checkmark"></span>
        </label>

      </div>
      <div className='Task-control'>
        <button className='btn' onClick={props.onClick}><i className="fa fa-trash"></i></button>
      </div>
    </div>
  )
};

export default Task;