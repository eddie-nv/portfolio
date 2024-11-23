import { NextResponse, NextRequest } from 'next/server'

type RevenueData = {
  label?: string
  revenue: number
}

const revenueByMonth: RevenueData[] = [
  { label: 'jan', revenue: 100000 },
  { label: 'feb', revenue: 95000 },
  { label: 'mar', revenue: 110000 },
  { label: 'apr', revenue: 105000 },
  { label: 'may', revenue: 120000 },
  { label: 'jun', revenue: 115000 },
  { label: 'jul', revenue: 130000 },
  { label: 'aug', revenue: 125000 },
  { label: 'sep', revenue: 140000 },
  { label: 'oct', revenue: 135000 },
  { label: 'nov', revenue: 150000 },
  { label: 'dec', revenue: 145000 },
]

const revenueByDay: RevenueData[] = [
  { label: 'Sunday', revenue: 3000 },
  { label: 'Monday', revenue: 3200 },
  { label: 'Tuesday', revenue: 2800 },
  { label: 'Wednesday', revenue: 3500 },
  { label: 'Thursday', revenue: 4000 },
  { label: 'Friday', revenue: 3700 },
  { label: 'Saturday', revenue: 4500 },
]

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const chartType = searchParams.get('type')

  let responseData;

  if (chartType === 'day') {
    responseData = { revenueByDay }
  } else {
    responseData = { revenueByMonth }
  }

  return NextResponse.json(responseData)
}