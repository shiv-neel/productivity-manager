import '../stylesheets/NewTaskForm.css'
import {React, useState} from 'react';

const NewTaskForm = (props) => {

    //    [property, function that updates state] = useState('')
    const [enteredTask, setEnteredTask] = useState('')
    const [enteredProject, setEnteredProject] = useState('')
    const [emoji, setEmoji] = useState('')
    const taskChangeHandler = (e) => {
        setEnteredTask(e.target.value)
    }

    const projectChangeHandler = (e) => {
        setEnteredProject(e.target.value)
        
    }

    const whichEmoji = (proj) => {
        var emo = ''
        switch (proj) {
            case 'General': 
                emo = '📁'
                break
            case 'Chores':
                emo = '🧺'
                break
            case 'Schoolwork':
                emo = '📝'
                break
            case 'Health':
                emo = '❤️'
                break
            case 'Development':
                emo = '⬆️'
        }
        return emo
    }
    const submitHandler = (e) => {
        e.preventDefault()
        const newTask = {
            id: props.tasks.length + 1,
            title: enteredTask,
            project: enteredProject,
            emoji: whichEmoji(enteredProject)
        }
        props.setTasks(props.tasks.concat(newTask))
    }
    return (
        <div>        
            <form onSubmit={submitHandler}>
                <div>                      
                    <input type='text' value={enteredTask} onChange={taskChangeHandler}></input>
                </div>

                <div>
                    <select value={enteredProject} onChange={projectChangeHandler}>
                        <option value='' selected disabled>Choose a Category...</option>
                        <option value='General' selected>General</option>
                        <option value='Chores'>Chores</option>
                        <option value='Schoolwork'>Schoolwork</option>
                        <option value='Health'>Health</option>
                        <option value='Development'>Development</option>
                    </select>                            
                </div>  

            <div className='duration'> 
                       
                <button type='submit'><i className='fas fa-plus'></i></button>
            
            </div>       
            </form>
                
        </div>
        
    )
}

export default NewTaskForm
