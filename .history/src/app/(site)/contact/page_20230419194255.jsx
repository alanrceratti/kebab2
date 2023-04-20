import React from 'react'

const page = () => {
    const projects = await getProjects();
  return (
    <div>
      	{projects.map((project) => (
    </div>
  )
}

export default page
