"use client";

import { useState } from "react";
import { deleteTodo, updateTodo } from "../actions/todos";

export default function ListItem({ todo }) {
  const [isedit, setIsEdit] = useState(false);
  const [task, setTask] = useState("")

  const onComplete = async () => {
    let obj = { ...todo };
    obj.isCompleted = !obj.isCompleted;
    await updateTodo(obj);
  };
  const onEdit = async () => {
    if (isedit) {
      let obj = todo;
      obj.todo = task
      await updateTodo(obj)
      setIsEdit(false)
      setTask("")
    } else {
      setIsEdit(true)
      setTask(todo.todo)
    }
  };
  const onDelete = async () => {
    await deleteTodo({id : todo.id})
  };
  return (
    <div
      key={todo.id}
      className={`flex mx-auto my-1 w-2/3 border p-2 text-center ${
        todo.isCompleted ? "bg-emerald-100" : "bg-white"
      }`}
    >
      {
        isedit ?
        <input
        className="flex flex-grow text-xl p-1 rounded-none"
        value={task} onChange={(e) => setTask(e.target.value)}/> 
        : 
        <h1 className="flex flex-grow text-2xl cursor-pointer">{todo.todo}</h1>
      }
      <button
        onClick={onComplete}
        className="border bg-green-300 rounded-none text-sm font-bold px-2 mx-1"
      >
        {!todo.isCompleted ? "Done" : "Not Done"}
      </button>
      <button onClick={onEdit} className="border bg-blue-200 rounded-none text-sm font-bold px-2 mx-1">
        Edit
      </button>
      <button onClick={onDelete} className="border bg-red-300 rounded-none text-sm font-bold px-2 mx-1">
        Delete
      </button>
    </div>
  );
}
