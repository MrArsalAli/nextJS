"use client"
import { useRef } from "react";
import { addTodo } from "../actions/todos";

export default function TodoForm() {
    const formRef = useRef(null)
  return (
    <form
    ref={formRef} 
    action={async(formData)=>{
        await addTodo(formData)
        formRef.current?.reset()
    }} className="w-2/3 mx-auto flex gap-2">
        <input
        placeholder="Add Todo"
        type="text"
        name="todo"
        className="border-2 p-2 flex flex-grow"
        />
        <input
        type="submit"
        className="bg-emerald-100 rounded-none p-2 px-4"
        value={"Add Todo"}
         />
        </form>
  )
}
