import { createClient, groq } from "next-sanity";

export async function getProjects() {
	const client = createClient({
		projectId: "c5ym9ela",
		dataset: "production",
		apiVersion: "1",
	});

	return client.fetch(
		groq`*[_type == "project"]{
_id,
_name,

    }`
	);
}
