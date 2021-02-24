import React from 'react'
import { Todo, CheckedHandling,DeleteHandling } from './../../interfaces/todo';
interface TodoListItemProps {
    todo:Todo ;
    checkedHandling:CheckedHandling;
    deleteHandling:DeleteHandling;
}
export  const TodoListItem:React.FunctionComponent<TodoListItemProps>=({todo,checkedHandling,deleteHandling})=>{
   
      return(
          <>
         <li className={`text-white pl-4 pr-4 ${ todo.isComplete ? "line-through" :"none"}`}>
            <label className="text-white font-bold flex justify-between	items-center cursor-pointer">
                {todo.name}
                <div>
                <input
                type="checkbox"
                defaultChecked={todo.isComplete}
                onClick={()=> checkedHandling(todo)}
                className="mr-2"
                aria-label={todo.name}
                />
                
                    <button className="focus:outline-none" onClick={()=> deleteHandling(todo)}><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="16px" height="16px"><linearGradient id="fbsFAcPTNuInJg1GESjdha" x1="32" x2="32" y1="7.001" y2="56.998" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path fill="url(#fbsFAcPTNuInJg1GESjdha)" d="M49.757,56.999c-0.768,0-1.536-0.292-2.121-0.877L32,40.485L16.364,56.121 c-1.17,1.169-3.073,1.169-4.243,0l-4.243-4.243c-1.17-1.17-1.17-3.073,0-4.243L23.515,32L7.879,16.364 c-1.17-1.17-1.17-3.073,0-4.243l4.243-4.243c1.169-1.17,3.072-1.171,4.243,0L32,23.515L47.636,7.879c1.17-1.171,3.073-1.17,4.243,0 l4.243,4.243c1.17,1.17,1.17,3.073,0,4.243L40.485,32l15.636,15.636c1.17,1.17,1.17,3.073,0,4.243l-4.243,4.243 C51.293,56.706,50.525,56.999,49.757,56.999z M32,37.657l17.05,17.05c0.39,0.39,1.025,0.389,1.415,0l4.243-4.243 c0.39-0.39,0.39-1.024,0-1.415L37.657,32l17.05-17.05c0.39-0.39,0.39-1.024,0-1.415l-4.243-4.243c-0.39-0.39-1.025-0.391-1.415,0 L32,26.343L14.95,9.293c-0.39-0.39-1.025-0.389-1.415,0l-4.243,4.243c-0.39,0.39-0.39,1.024,0,1.415L26.343,32L9.293,49.05 c-0.39,0.39-0.39,1.024,0,1.415l4.243,4.243c0.389,0.389,1.024,0.39,1.415,0L32,37.657z"/><linearGradient id="fbsFAcPTNuInJg1GESjdhb" x1="32" x2="32" y1="11.94" y2="52.06" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"/><stop offset="1" stop-color="#e6abff"/></linearGradient><path fill="url(#fbsFAcPTNuInJg1GESjdhb)" d="M52.061 14.061L49.939 11.939 32 29.879 14.061 11.939 11.939 14.061 29.879 32 11.939 49.939 14.061 52.061 32 34.121 49.939 52.061 52.061 49.939 34.121 32z"/></svg></button>
                </div>
            </label>
        </li>

          </>
      )

    
}