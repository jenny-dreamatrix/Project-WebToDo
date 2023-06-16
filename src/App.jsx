import './App.css'
import Home from './pages/Home'
import { ToDoDataContext } from './context/Context'
import { useState } from 'react'

function App() {
  const [toDoArray, setToDoArray] = useState(["Web ToDo Liste erstellen."])

  return (
    <>
    <ToDoDataContext.Provider value={{toDoArray, setToDoArray}}>
    <Home/>
    </ToDoDataContext.Provider>
    </>
  )
}

export default App
