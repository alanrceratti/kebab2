import { createClient, groq } from "next-sanity";

import React from "react";

const clientConfig = {
	projectId: "c5ym9ela",
	dataset: "production",
	useCdn: false,
	apiVersion: "1",
};

export function getProjects() {
	return createClient(clientConfig).fetch(
		groq`*[_type == "projects"]{
            _id,
            name,
			_price,
            long_description,
_short_description,
_long_description,
_ingredients,
_nutritional,
"slug":slug.current,
"image":image.asset->url


    }`
	);
}

const client = createClient(clientConfig);
