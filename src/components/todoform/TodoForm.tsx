import React ,{useState, FormEvent} from 'react'
import {AddTodo} from "../../interfaces/todo"

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
        <form className="grid grid-cols-1 justify-items-center">
            <input className="w-1/2 bg-gray-800 h-12 pl-2 text-white focus:outline-none rounded" type="string" onChange={handlingNewTodo} value={newTodo} placeholder="Add Todo item..."/>
            <button onClick={clickHandling} className="bg-purple-500 text-white mt-2 font-bold w-1/2 rounded focus:outline-none">Add This Todo</button>
        </form>

    </>
)
}

 