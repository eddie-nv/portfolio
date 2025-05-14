import { NextResponse } from 'next/server'

type ProjectsResponse = {
  totalProjects: number
  completedProjects: number
  completionRate: number
  runningProjects: number
  runningRate: number
  runningRateSentence: string
}

export async function GET() {
  const projectsResponse: ProjectsResponse = {
    totalProjects: 10724,
    completedProjects: 9801,
    completionRate: 12,
    runningProjects: 923,
    runningRate: 8,
    runningRateSentence: "Running projects increases"
  }

  return NextResponse.json(projectsResponse)
}