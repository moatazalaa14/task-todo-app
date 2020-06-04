import React, { useState } from 'react'
import { Todo ,CheckedHandling, AddTodo } from './interfaces/todo';
import {TodoList} from "./components/todolist/TodoList"
import {TodoForm} from "./components/todoform/TodoForm"
import shortid from 'shortid';
import "./App.css"
export const App :React.FunctionComponent =()=>{
  const todos:Array<Todo> =[
     {id:shortid(),name:"learn typescript" , isComplete:true} 
     ,{id:shortid(),name:"learn Javascript" , isComplete:false},
     {id:shortid(),name:"learn jquery" , isComplete:false}
     ]
    const [singleTodo ,setSingleTodo]:any = useState(todos)
    const checkedHandling:CheckedHandling=(elChecked)=>{
      let newTodos= singleTodo.map((todo:Todo) =>{
        if(elChecked.id === todo.id){
          return {
            ...todo,
            isComplete:!todo.isComplete
          }
        }
        return todo
        
      });
      setSingleTodo(newTodos)
    }
    const addTodo:AddTodo=(todoVal)=>{
      let newTodo:Todo = {id:shortid(),name:todoVal,isComplete:false}
     setSingleTodo([...singleTodo , newTodo])
    }
    
   return (
      <div className ="todoapp"> 
        <h1>My todos</h1>
       <TodoList todos={singleTodo} checkedHandling ={checkedHandling}/>
       <TodoForm addTodo={addTodo}/>
      </div>
    )
  }

