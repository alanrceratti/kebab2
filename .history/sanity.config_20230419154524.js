import {defineConfig} from 'sanity'
// import {deskTool} from 'sanity/desk'
// import {visionTool} from '@sanity/vision'
// import {schemaTypes} from './schemas'

export default defineConfig({
  projectId: 'c5ym9ela',

  title: 'GreekBites',

  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
