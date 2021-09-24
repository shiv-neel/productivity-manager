import React from 'react'
import Task from './Task'


const Tasks = (props) => {
    return (
        <div>
            {props.items.map(
                    (task) => (<Task 
                            title={task.title} 
                            project={task.project} 
                            emoji={task.emoji}
                            />))}
            </div>
    )
}

export default Tasks
