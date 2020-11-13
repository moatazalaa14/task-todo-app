import React from "react"
import { Todo ,CheckedHandling,DeleteHandling} from './../../interfaces/todo';
import { TodoListItem } from "../todoitem/TodoItem";
import "./TodoList.css"
interface TodoListProps {
    todos: Array<Todo>;
    checkedHandling: CheckedHandling;
    deleteHandling:DeleteHandling;
   
  }

  export const TodoList:React.FunctionComponent<TodoListProps> =({todos , checkedHandling,deleteHandling})=>{
    return(
        <ul className="list_items">
            {
                todos.map((todo,index)=>{
                    return(
                    <TodoListItem todo={todo} checkedHandling={checkedHandling} key={index} deleteHandling={deleteHandling}/>
                    )
                })
            }
        </ul>
    )
  }