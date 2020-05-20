export interface Todo{
    name:string;
    isComplete:boolean;
  }

export type CheckedHandling = (elChecked:Todo)=>void
export type AddTodo =(newTodo:string)=>void
export type TodoCounter =()=>number
export type DeleteTodo=()=>void