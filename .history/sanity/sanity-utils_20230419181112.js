import { createClient } from "next-sanity";

export async function getProjects() {
	const client = createClient({
		projectId: "c5ym9ela",
		dataset: "production",
		apiVersion: "2023/04/19",
	});

	return client.fetch(
		groq`*[_type == "project]{
_id,
_name,
_price,
_short_description,
_long_description,
_ingredients,
_nutritional,
"slug":slug.current,
"image":image.asset>->url
    }`
	);
}
