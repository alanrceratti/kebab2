import React from 'react'
import { getProjects } from "../../../../sanity/sanity-utils";


const page = () => {
    const projects = await getProjects();
  return (
    <div>
      	{projects.map((project) => (
            <div></div>
    </div>
  )
}

export default page
