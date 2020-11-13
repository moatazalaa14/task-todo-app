import React ,{useState, FormEvent} from 'react'
import {AddTodo} from "../../interfaces/todo"
import "./todoform.css"
interface TodoFormProps{
    addTodo:AddTodo
}
export const TodoForm :React.FC<TodoFormProps> = ({addTodo})=>{
    const [newTodo , setNewTodo] = useState("")
    const handlingNewTodo =(e:FormEvent<HTMLInputElement>):void=>{
        setNewTodo(e.currentTarget.value)
    }
    const clickHandling =(e:FormEvent<HTMLButtonElement>):void=>{
        e.preventDefault()
        addTodo(newTodo)
        setNewTodo("")
        console.log(newTodo)
                }
return(
    <>
        <form>
            <input type="string" onChange={handlingNewTodo} value={newTodo} placeholder="Add Todo item..." className="todoapp__input"/>
            <button onClick={clickHandling} className="todoapp__btn">Add this todo</button>
        </form>

    </>
)
}

 