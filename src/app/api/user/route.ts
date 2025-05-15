import { NextResponse } from 'next/server'

type User = {
  name: string
  imageUrl: string
  position: string
  team: string
}

export async function GET() {
  const user: User = {
    name: "John Doe",
    imageUrl: "/image/IMG_1806.jpg",
    position: "Software Engineer",
    team: "Frontend Development"
  }

  return NextResponse.json(user)
}
