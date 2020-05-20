import React from "react"
import { Todo ,CheckedHandling ,DeleteTodo } from './../../interfaces/todo';
import { TodoListItem } from "../todoitem/TodoItem";
interface TodoListProps {
    todos: Array<Todo>;
    checkedHandling: CheckedHandling;
    deleteTodo:DeleteTodo;
  }

  export const TodoList:React.FunctionComponent<TodoListProps> =({todos , checkedHandling , deleteTodo})=>{
    return(
        <ul>
            {
                todos.map((todo,index)=>{
                    return(
                    <TodoListItem todo={todo} checkedHandling={checkedHandling} key={index} deleteTodo={deleteTodo}/>
                    )
                })
            }
        </ul>
    )
  }