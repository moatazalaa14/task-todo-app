export interface Todo{
  id:string,  
  name:string;
    isComplete:boolean;
  }

export type CheckedHandling = (elChecked:Todo)=>void
export type AddTodo =(newTodo:string)=>void
