import React from "react";
import { getProjects } from "../../../../sanity/sanity-utils";

async function page() {
	const projects = await getProjects();
	return (
        <div>
			{projects.map((project) => (
                <div key={project._id}>
					<h1>{project.name}</h1>
				</div>
                    console.log("HSUADASUHAUS");
			))}
		</div>
	);
}

export default page;
