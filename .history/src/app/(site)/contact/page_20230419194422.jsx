import React from "react";
import { getProjects } from "../../../../sanity/sanity-utils";

async function page() {
	const projects = await getProjects();
	return (
		<div>
			<h1>ASDDSAASDASDS</h1>
		</div>
	);
}

export default page;
