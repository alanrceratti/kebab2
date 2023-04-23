import { createClient, groq } from "next-sanity";

const clientConfig = {
	projectId: "c5ym9ela",
	dataset: "production",
	useCdn: false,
	apiVersion: "1",
};

//information to get from sanity
export function getOffers() {
	return createClient(clientConfig).fetch(
		groq`*[_type == "offers"]{
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


    }`,
		{
			next: {
				revalidate: 30,
			},
		}
	);
}

export function getMenu() {
	return createClient(clientConfig).fetch(
		groq`*[_type == "menu"]{
            _id,
            name,
			price,       
			short_description,
		    }`
	);
}

export function getDocument(id) {
	return createClient(clientConfig).fetch(
		groq`*[_id == $id] {
            _id,
            name,
            price,
            long_description,
            short_description,
            ingredients,
            nutritional,
            "slug":slug.current,
            "image":image.asset->url
        }`,
		{ id }
	);
}

const client = createClient(clientConfig);

const menu = createClient(clientConfig);

const document = createClient(clientConfig);
