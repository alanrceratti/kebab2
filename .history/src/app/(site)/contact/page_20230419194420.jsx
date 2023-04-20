import React from "react";
import { getProjects } from "../../../../sanity/sanity-utils";

async function page() {
	const projects = await getProjects();
	return (
		<div>
		
		</div>
	);
}

export default page;
