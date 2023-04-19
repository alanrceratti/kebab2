import React from "react";
import { getProjects } from "../../../../sanity/sanity-utils";

export async function page({ _id, name, long_description }) {
    const projects = await getProjects
	return (
		<div>
		<pre>{JSON.stringify</pre>
		</div>
	);
}
export async function getServerSideProps() {
	const { _id, name, long_description } = await loadDate(0);
	return {
		props: {}, // will be passed to the page component as props
	};
}

export default page;
