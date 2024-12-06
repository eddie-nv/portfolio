import { NextResponse, NextRequest } from 'next/server'

type RevenueData = {
  label?: string
  revenue: number
}

const revenueByMonth: RevenueData[] = [
  { label: 'Jan', revenue: 100000 },
  { label: 'Feb', revenue: 95000 },
  { label: 'Mar', revenue: 110000 },
  { label: 'Apr', revenue: 105000 },
  { label: 'May', revenue: 120000 },
  { label: 'Jun', revenue: 115000 },
  { label: 'Jul', revenue: 130000 },
  { label: 'Aug', revenue: 125000 },
  { label: 'Sep', revenue: 140000 },
  { label: 'Oct', revenue: 135000 },
  { label: 'Nov', revenue: 150000 },
  { label: 'Dec', revenue: 145000 },
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