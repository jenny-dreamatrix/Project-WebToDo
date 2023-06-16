import { useContext } from 'react';
import { ToDoDataContext } from '../context/Context';

const DeleteToDo = (props) => {
    const {toDoArray, setToDoArray} = useContext(ToDoDataContext)

    const entfernen = () => {
        setToDoArray((prev) => {
            const newArray = [...prev]
            newArray.splice(props.index, 1)
            return newArray
          });
    }

    return ( 
        <button onClick={entfernen}>Löschen</button>
     );
}

export default DeleteToDo;