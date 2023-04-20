import React from "react";
import { getProjects } from "../../../../sanity/sanity-utils";

export async function page() {
	const projects = await getProjects;
	return (
		<div>
			<pre>{JSON.stringify(projects, null, 2)}</pre>
		</div>
	);
}


export default page;
