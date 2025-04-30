import React from 'react'

type Props = {
    params: {
        project: string
    }
}

const page = ({ params }: Props) => {
  return (
    <div>
        <h1>{params.project}</h1>
    </div>
  )
}

export default page