import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react'

function App() {
  const [tasks,setState] = useState([
    {
        id:1,
        text: 'Meeting',
        day:'Tomorrow',
        reminder:true,
    },    
    {
        id:2,
        text: 'Pool',
        day:'Today',
        reminder:false,
    },
    {
        id:3,
        text: 'Sports',
        day:'Tonight',
        reminder:true,
    }
])
//Delete Task
  const deleteTask = (id) => {
    setState(tasks.filter((task)=> task.id !== id))
  }
  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : 'No Tasks'}
    </div>
  );
}

export default App;
