import React from 'react'
import "./Todoitem.css"
import { Todo, CheckedHandling } from './../../interfaces/todo';
interface TodoListItemProps {
    todo:Todo ,
    checkedHandling:CheckedHandling
}
export  const TodoListItem:React.FunctionComponent<TodoListItemProps>=({todo,checkedHandling})=>{
    return(
        <li>
            <label className={todo.isComplete ? "item-container__finished": "item-container__notfinished" }>
                {todo.name}
                <input type="checkbox"  
                defaultChecked={todo.isComplete}
                onChange={()=> checkedHandling(todo)}/>
            </label>
        </li> 

    )
}