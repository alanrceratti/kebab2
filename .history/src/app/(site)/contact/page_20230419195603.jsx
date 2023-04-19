import React from "react";
import { getProjects } from "../../../../sanity/sanity-utils";

async function page() {
	const projects = await getProjects();
    console.log(projects);
	return (
		<div>
			{projects.map((project) => (
				<div key={project._id}>
					<h1>{project.name}</h1>
				</div>
			))}
		</div>
	);
}
export async function getServerSideProps(context) {
    return {
      props: {}, // will be passed to the page component as props
    }
  }

export default page;
