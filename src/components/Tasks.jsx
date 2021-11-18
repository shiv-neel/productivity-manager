import React from 'react'
import Task from './Task'


const Tasks = (props) => {
    
    return (
        <div>
            {props.items.map(
                    (task) => (<Task 
                            id={task.id}
                            title={task.title} 
                            project={task.project} 
                            emoji={task.emoji}
                            deleteTask={props.deleteTask}
                            />))}
            </div>
    )
}

export default Tasks
