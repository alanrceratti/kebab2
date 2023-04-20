import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

// import {visionTool} from '@sanity/vision'
import schemas from "./sanity/schemas";

const config = defineConfig({
	projectId: "c5ym9ela",
	dataset: "production",
	title: "GreekBites",
	apiVersion: "1",
	basePath: "/admin",

	plugins: [deskTool(), vision()],

	schema: {
		types: schemas,
	},
});

export default config;
