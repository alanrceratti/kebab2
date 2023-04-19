import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import project from "./sanity/schemas/project-schema";
// import {visionTool} from '@sanity/vision'
// import {schemaTypes} from './schemas'

const config = defineConfig({
	projectId: "c5ym9ela",
	dataset: "production",
	title: "GreekBites",
	apiVersion: "19/04/2023",
	basePath: "/admin",

	plugins: [deskTool()],

	schema: {
		{types: [project]},
	},
});

export default config;
