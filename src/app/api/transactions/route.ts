import { NextResponse } from 'next/server'

type Transactions = {
  name: string
  imageUrl: string
  position: string
  team: string
}

export async function GET() {
  const transactions: Transactions = {
    name: "John Doe",
    imageUrl: "",
    position: "Software Engineer",
    team: "Frontend Development"
  }

  return NextResponse.json(transactions)
}