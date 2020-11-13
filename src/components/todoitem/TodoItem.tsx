import React from 'react'
import "./Todoitem.css"
import { Todo, CheckedHandling,DeleteHandling } from './../../interfaces/todo';
interface TodoListItemProps {
    todo:Todo ;
    checkedHandling:CheckedHandling;
    deleteHandling:DeleteHandling;
}
export  const TodoListItem:React.FunctionComponent<TodoListItemProps>=({todo,checkedHandling,deleteHandling})=>{
   
      return(
          <>
         <li className={ todo.isComplete ? "item-container__finished" :"item-container__notfinished"}>
            <label >
                {todo.name}
                <input
                type="checkbox"
                defaultChecked={todo.isComplete}
                onClick={()=> checkedHandling(todo)}/>
                <button onClick={()=> deleteHandling(todo)}>X</button>
                
            </label>
        </li>

          </>
      )

    
}