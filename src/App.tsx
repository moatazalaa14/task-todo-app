import React, { useState } from 'react'
import { Todo ,CheckedHandling, AddTodo ,TodoCounter,DeleteTodo} from './interfaces/todo';
import {TodoList} from "./components/todolist/TodoList"
import { TodoForm } from './components/todoform/TodoForm';
import { TodoCount } from './components/todoCount/TodoCount';
const todos:Array<Todo> =[
   {name:"learn typescript" , isComplete:true} 
   ,{name:"learn Javascript" , isComplete:false}
   ]
export const App :React.FunctionComponent =()=>{
    const [singleTodo ,setSingleTodo]:any = useState(todos)
    const checkedHandling:CheckedHandling=(elChecked)=>{
      const newTodos= singleTodo.map((todo:Todo) =>{
        if(todo === elChecked){
          return{
            ...todo,
            isComplete:!todo.isComplete
          } 
        }
        return todo
      });
      setSingleTodo(newTodos)
      console.log(singleTodo)
    }
    const addTodo:AddTodo =(newTodo)=>{
      const newtodo = singleTodo.push({
        name:newTodo,
        isComplete:false
      }) 
      setSingleTodo(newtodo)
      console.log(singleTodo)
    }
    const deleteTodo:DeleteTodo =()=>{
      // const newTodosAfterDelete = singleTodo.find((el,index)=>{
      // })
      // setSingleTodo(newTodosAfterDelete)
    }
    const todocount:TodoCounter=()=>{
      return singleTodo.length
    }
   return (
      <div> 
        <TodoForm addTodo={addTodo} />
       <TodoList todos={todos} checkedHandling ={checkedHandling} deleteTodo={deleteTodo}/>
       <TodoCount todoscount={todocount} />
      </div>
    )
  }

