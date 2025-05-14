import { NextResponse } from 'next/server'

type TeamPerformanceData = {
  label?: string
  performance: number
}

const teamPerformance: TeamPerformanceData[] = [
  { label: 'Sept', performance: 3000 },
  { label: 'Oct', performance: 3200 },
  { label: 'Nov', performance: 2800 },
  { label: 'Dec', performance: 3500 },
]

export async function GET() {
  return NextResponse.json(teamPerformance)
}