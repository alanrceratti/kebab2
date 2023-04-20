import React from "react";
import { getProjects } from "../../../../sanity/sanity-utils";
import { createClient, groq } from "next-sanity";

const clientConfig = {
	projectId: "c5ym9ela",
	dataset: "production",
	useCdn: false,
	apiVersion: "1",
};
function getProjects() {
	return createClient(clientConfig).fetch(
		groq`*[_type == "projects"]{
            _id,
            name,
            long_description,

    }`
	);
}

const client = createClient(clientConfig);

export async function page() {
	const projects = await getProjects;
	return (
		<div>
			<pre>{JSON.stringify(projects, null, 2)}</pre>
		</div>
	);
}

export default page;
