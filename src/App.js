import {React, useState} from 'react'

import './App.css'
import TitleBlock from './components/TitleBlock'
import NewTask from './components/NewTask'
import Tasks from './components/Tasks'

const SAMPLE_TASKS = [
  {
    title: 'Laundry',
    project: 'Chores',
    emoji: '🧺'
  },
  {
    title: 'Homework',
    project: 'School',
    emoji: '📝'
  },
  {
    title: 'Leg Day',
    project: 'Health',
    emoji: '❤️'
  },
  {
    title: 'Making Dinner',
    project: 'Chores',
    emoji: '🧺'
  }
]

function App() {
  const [tasks, setTasks] = useState(SAMPLE_TASKS)
  
  const addTaskHandler = (task) => {
    setTasks(prevTasks => {
      return [task, ...prevTasks]
    })
    console.log(task)
  }

  return (
    <div className="App">
      <TitleBlock/>
      <NewTask onAddTask={addTaskHandler}/>
      <Tasks items={tasks}/>
    </div>
    
  );
}

export default App
