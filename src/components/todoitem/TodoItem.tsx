import React from 'react'
import "./Todoitem.css"
import { Todo, CheckedHandling } from './../../interfaces/todo';
interface TodoListItemProps {
    todo:Todo ,
    checkedHandling:CheckedHandling
}
export  const TodoListItem:React.FunctionComponent<TodoListItemProps>=({todo,checkedHandling})=>{
   
      return(
          <>
         <li className={ todo.isComplete ? "item-container__finished" :"item-container__notfinished"}>
            <label >
                {todo.name}
                <input
                type="checkbox"
                defaultChecked={todo.isComplete}
                onClick={()=> checkedHandling(todo)}/>
            </label>
        </li>

          </>
      )

    
}