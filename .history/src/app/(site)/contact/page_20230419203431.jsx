import React from "react";
import { getProjects } from "../../../../sanity/sanity-utils";

export default async function page() {
	const projects = await getProjects();
	return (
		<div>
			{/* <pre>{JSON.stringify(projects, null, 2)}</pre> */}
			{projects.map((project) => {
				return (
					<div key={project._id}>
						<h1 className="text-2xl text-green">{project.name}</h1>
					</div>
				);
			})}
		</div>
	);
}
