import React from "react";
import { getProjects } from "../../../../sanity/sanity-utils";

export async function page({ _id, name, long_description }) {
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
export async function getServerSideProps() {
    const {}
	return {
		props: {}, // will be passed to the page component as props
	};
}

export default page;
