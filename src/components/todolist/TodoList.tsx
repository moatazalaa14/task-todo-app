import React from "react"
import { Todo ,CheckedHandling,DeleteHandling} from './../../interfaces/todo';
import { TodoListItem } from "../todoitem/TodoItem";
interface TodoListProps {
    todos: Array<Todo>;
    checkedHandling: CheckedHandling;
    deleteHandling:DeleteHandling;
   
  }

  export const TodoList:React.FunctionComponent<TodoListProps> =({todos , checkedHandling,deleteHandling})=>{
    return(
        <div className="flex justify-center mt-4 ">
        <ul className=" w-1/2 shadow-xl bg-gray-800">
            {
                todos.map((todo,index)=>{
                    return(
                    <TodoListItem todo={todo} checkedHandling={checkedHandling} key={index} deleteHandling={deleteHandling}/>
                    )
                })
            }
        </ul>
        </div>
    )
  }