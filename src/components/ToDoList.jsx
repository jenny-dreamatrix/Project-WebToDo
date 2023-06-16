import './ToDoList.css'
import ToDoItem from './ToDoItem';
import { useContext } from 'react';
import { ToDoDataContext } from '../context/Context';
import AddToDo from './AddToDo';

const ToDoList = () => {
    const {toDoArray, setToDoArray} = useContext(ToDoDataContext)
    
    return ( 
        <section>
        {toDoArray?.map((todo, index) => {return <ToDoItem todo={todo} key={index} index={index} />})}
        <AddToDo />
        </section>
     );
}

export default ToDoList;