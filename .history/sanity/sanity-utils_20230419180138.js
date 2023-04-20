import { createClient } from "next-sanity";

export async function getProjects() {
	const client = createClient({
		projectId: "c5ym9ela",
		dataset: "production",
		title: "GreekBites",
		apiVersion: "19/04/2023",
	});
}
