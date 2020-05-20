import React ,{useState} from 'react'
import {AddTodo} from "../../interfaces/todo"
interface TodoFormProps{
    addTodo:AddTodo
}
export const TodoForm :React.FC<TodoFormProps> = ({addTodo})=>{
    const [newTodo , setNewTodo] = useState("")
    const handlingNewTodo =(e:any)=>{
        setNewTodo(e.currentTarget.value)
    }
    const clickHandling =(e:any)=>{
        e.preventDefault()
        addTodo(newTodo)
        setNewTodo("")
                }
return(
    <>
        <form>
            <input type="string" onChange={handlingNewTodo}/>
            <button onClick={clickHandling}>Add this todo</button>
        </form>

    </>
)
}

 