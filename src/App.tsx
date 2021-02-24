import React, { useState } from 'react'
import { Todo ,CheckedHandling, AddTodo,DeleteHandling } from './interfaces/todo';
import {TodoList} from "./components/todolist/TodoList"
import {TodoForm} from "./components/todoform/TodoForm"
import shortid from 'shortid';
import bg from "./assets/bg-desktop-dark.jpg"
export const App :React.FunctionComponent =()=>{
  const todos:Array<Todo> =[
     {id:shortid(),name:"learn typescript" , isComplete:true} 
     ,{id:shortid(),name:"learn Javascript" , isComplete:false},
     {id:shortid(),name:"learn jquery" , isComplete:false}
     ]
    const [singleTodo ,setSingleTodo]:any = useState(todos)
    const deleteHandling:DeleteHandling=(deleteElem)=>{
      let newTodos=singleTodo.filter((todo:Todo)=>{return todo.id!==deleteElem.id})
      setSingleTodo(newTodos)
    }
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
      if(newTodo.name!==""){
        setSingleTodo([...singleTodo , newTodo])
      }else{
        alert("Not item Founded")
      }
    }
    
   return (
      <div className="bg-gray-800 w-screen h-screen"> 
      <div style={{backgroundImage:`url(${bg})`, backgroundRepeat:"no-repeat"}}>
       
          <h1 className="text-white font-bold text-2xl pt-16 pb-8 text-center">My todos</h1>
        
          <TodoForm addTodo={addTodo}/>
          <TodoList todos={singleTodo} checkedHandling={checkedHandling} deleteHandling={deleteHandling} />
       </div>
      </div>
    )
  }

