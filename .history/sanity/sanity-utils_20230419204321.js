import { createClient, groq } from "next-sanity";

import React from "react";

const clientConfig = {
	projectId: "c5ym9ela",
	dataset: "production",
	useCdn: false,
	apiVersion: "1",
};
//
export function getProjects() {
	return createClient(clientConfig).fetch(
		groq`*[_type == "projects"]{
            _id,
            name,
			price,
            long_description,
			short_description,
			long_description,
			ingredients,
			nutritional,
			"slug":slug.current,
			"image":image.asset->url


    }`
	);
}

const client = createClient(clientConfig);
