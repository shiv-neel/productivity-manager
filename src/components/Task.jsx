import React from 'react'
import '../stylesheets/Task.css'
const Task = (props) => {
    return (
        <div className='task'>
            <div className='emoji'>{props.emoji}</div>
            <div className='task-info'>
                <div className='task__title'>{props.title}</div>
                <div className='task__project'>{props.project}</div>
            </div>
            
        </div>
    )
}

export default Task
