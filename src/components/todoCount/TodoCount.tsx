import React from "react"
import {TodoCounter} from "../../interfaces/todo"
interface AllTodosCountProps{
    todoscount:TodoCounter
}
export const TodoCount:React.FC<AllTodosCountProps> =({todoscount})=>{
return(
    <>
        <p>{todoscount()}</p>

    </>
)
}