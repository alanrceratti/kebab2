import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
// import {visionTool} from '@sanity/vision'
// import {schemaTypes} from './schemas'

const config defineConfig({
	projectId: "c5ym9ela",
	dataset: "production",
	title: "GreekBites",
	apiVersion: "19/04/2023",
	basePath: "/admin",

	plugins: [deskTool()],

	schema: {
		types: schemaTypes,
	},
});
