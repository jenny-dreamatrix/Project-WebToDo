import { useContext, useState } from 'react';
import { ToDoDataContext } from '../context/Context';
import './AddToDo.css'

const AddToDo = () => {
    const {toDoArray, setToDoArray} = useContext(ToDoDataContext)
    const [input, setInput] = useState("")

    const addToDo = () => {
        event.preventDefault()
        setToDoArray(prev => [...prev, input])
    }

    return ( 
        <form onSubmit={addToDo}>
        <input className='add-input' type="text" id='inputFeld' onChange={(e) => setInput(e.target.value)}/>
        <input type="submit" value="Hinzufügen"/>
        </form>
     );
}

export default AddToDo;