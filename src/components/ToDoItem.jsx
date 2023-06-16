import './ToDoItem.css'
import { useState } from 'react';
import DeleteToDo from './DeleteToDo'
import EditToDo from './EditToDo';

const ToDoItem = (props) => {
    const [done, setDone] = useState()

    return ( 
        <div className='todoitem-wrapper'>
            <div>
            <input onClick={() => setDone(prev => !prev)} type="checkbox"  id={props.index}/>
            <label style={done ? {textDecoration: "line-through"} : {}} htmlFor={props.index}>{props.todo}</label>
            </div>
            <div>
            <EditToDo todo={props.todo} index={props.index} />
            <DeleteToDo index={props.index} />
            </div>
        </div>
     );
}

export default ToDoItem;