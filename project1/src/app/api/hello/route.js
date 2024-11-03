import { NextResponse } from "next/server"

export async function GET(request) {
  return NextResponse.json([
    {
      title: "Black Full Swirl",
      description: "make a type specimen book. It has survived not only five centuries",
      price: 2000,
      slug: 1,
      id: 1,
    },
    {
      title: "lorem ipsum",
      description: "Letraset sheets containing Lorem Ipsum passages, and more recently",
      price: 3000,
      slug: 2,
      id: 2,
    },
    {
      title: "ooking at its layou",
      description: "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000",
      price: 4000,
      slug: 2,
      id: 2,
    },
  ])
}
