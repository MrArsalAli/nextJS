import { NextResponse } from "next/server";

const todos = [
  {
    id: 1,
    todo: "Task 1",
    isCompleted: false,
  },
  {
    id: 2,
    todo: "Task 2",
    isCompleted: false,
  },
  {
    id: 3,
    todo: "Task 3",
    isCompleted: false,
  },
  {
    id: 4,
    todo: "Task 4",
    isCompleted: false,
  },
  {
    id: 5,
    todo: "Task 5",
    isCompleted: false,
  },
  {
    id: 6,
    todo: "Task 6",
    isCompleted: false,
  },
];

export async function GET(request) {
  return NextResponse.json({
    data: todos,
    mag: "data fetched successfully",
  });
}

export async function POST(request) {
  const data = await request.json();
  const obj = {
    ...data,
    isCompleted: false,
    id: todos.length + 1,
  };
  todos.push(obj);
  console.log("data from backend==>", data);
  return NextResponse.json({
    data: todos,
    mag: "data Added successfully",
  });
}


export async function PUT(request) {
  const data = await request.json();
  const todoIndex =todos.findIndex((todo) => todo.id == data.id)
  todos[todoIndex] = data
  return NextResponse.json({
    data: todos,
    mag: "data Updated successfully",
  });
}


export async function DELETE(request) {
  const data = await request.json();
  const todoIndex =todos.findIndex((todo) => todo.id == data.id)
  todos.splice(todoIndex, 1)
  return NextResponse.json({
    data: todos,
    mag: "data Deleted successfully",
  });
}
