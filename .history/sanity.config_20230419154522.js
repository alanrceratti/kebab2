import {defineConfig} from 'sanity'
// import {deskTool} from 'sanity/desk'
// import {visionTool} from '@sanity/vision'
// import {schemaTypes} from './schemas'

export default defineConfig({

  title: 'GreekBites',

  projectId: 'c5ym9ela',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
