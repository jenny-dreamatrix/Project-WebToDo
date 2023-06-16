import { useContext, useEffect, useState } from 'react';
import { ToDoDataContext } from '../context/Context';
import './EditToDo.css'

const EditToDo = (props) => {
    const {toDoArray, setToDoArray} = useContext(ToDoDataContext)
    const [editing, setEditing] = useState(false)
    const [editInput, setEditInput] = useState(props.todo)

    useEffect(() => {
        if(editing === false){
            setToDoArray(prev => {
                let editedArray = [...prev]
                editedArray.splice(props.index, 1, editInput)
                return editedArray
            })
        } else if( editing === true){
            return
        }
    },[editing])

    return ( 
        <>
        <input className='edit-input' type="text" style={editing ? {display: "inline"} : {display: "none"}} onChange={(e) => setEditInput(e.target.value)}/>
        <button onClick={() => setEditing(prev => !prev)}>{editing ? "Speichern" : "Bearbeiten"}</button>
        </>
     );
}
 
export default EditToDo;