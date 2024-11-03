import Link from "next/link";
import TodoForm from "../components/TodoForm";
import ListItem from "../components/ListItem";

export default async function Todos() {
  let data = await fetch("http://localhost:3000/api/todos", {cache : "no-cache"},);
  data = await data.json();

  return (
    <>
      <div className="min-h-screen p-10">
        <h1 className="text-4xl text-center p-10 font-bold">Todos</h1>
        <TodoForm />        
        {data.data?.map((todo) => (
            <ListItem todo={todo} />
        ))}
      </div>
    </>
  );
}
