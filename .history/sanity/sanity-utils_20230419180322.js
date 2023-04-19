import { createClient } from "next-sanity";

export async function getProjects() {
	const client = createClient({
		projectId: "c5ym9ela",
		dataset: "production",
		apiVersion: "19/04/2023",
	});
}

client.fetch(
    groq`*[_type == "project]{
_id,
_name,

    }`
)