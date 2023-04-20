import React from "react";

import { createClient, groq } from "next-sanity";

const clientConfig = {
	projectId: "c5ym9ela",
	dataset: "production",
	useCdn: false,
	apiVersion: "1",
};

export function getProjects() {
	return createClient(clientConfig).fetch(
		groq`*[_type == "projects"]{
            _id,
            name,
            long_description,

    }`
	);
}

const client = createClient(clientConfig);

export default async function page() {
	const projects = await getProjects();
	return (
		<div>
			{/* <pre>{JSON.stringify(projects, null, 2)}</pre> */}
			{projects.map((project) => {
				<h1 className="text-2xl text-green">{project.name}</h1>;
			})}
		</div>
	);
}
