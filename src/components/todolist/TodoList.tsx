import React from "react"
import { Todo ,CheckedHandling } from './../../interfaces/todo';
import { TodoListItem } from "../todoitem/TodoItem";
interface TodoListProps {
    todos: Array<Todo>;
    checkedHandling: CheckedHandling;
  }

  export const TodoList:React.FunctionComponent<TodoListProps> =({todos , checkedHandling})=>{
    return(
        <ul>
            {
                todos.map((todo,index)=>{
                    return(
                    <TodoListItem todo={todo} checkedHandling={checkedHandling} key={index}/>
                    )
                })
            }
        </ul>
    )
  }