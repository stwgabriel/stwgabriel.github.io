/* eslint-disable import/no-cycle */
/**
 * This config is used to set up Sanity Studio that's mounted
 * on the `/pages/studio/[[...index]].tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'

import {
  apiVersion, dataset, previewSecretId, projectId,
} from './src/lib/sanity.api'
import { previewDocumentNode } from './src/plugins/previewPane'
import { productionUrl } from './src/plugins/productionUrl'
import { pageStructure, singletonPlugin } from './src/plugins/settings'
import page from './src/schemas/documents/page'
import project from './src/schemas/documents/project'
import duration from './src/schemas/objects/duration'
import milestone from './src/schemas/objects/milestone'
import timeline from './src/schemas/objects/timeline'
import home from './src/schemas/singletons/home'
import settings from './src/schemas/singletons/settings'

const title = process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || "stwGabriel's website"

export const PREVIEWABLE_DOCUMENT_TYPES: string[] = [
  home.name,
  page.name,
  project.name,
]

export default defineConfig({
  basePath: '/studio',
  projectId: projectId || '',
  dataset: dataset || '',
  title,
  schema: {
    // If you want more content types, you can add them to this array
    types: [
      // Singletons
      home,
      settings,
      // Documents
      duration,
      page,
      project,
      // Objects
      milestone,
      timeline,
    ],
  },
  plugins: [
    deskTool({
      structure: pageStructure([home, settings]),
      // | `defaultDocumentNode` is responsible for adding
      // | a “Preview” tab to the document pane
      defaultDocumentNode: previewDocumentNode({ apiVersion, previewSecretId }),
    }),
    // | Configures the global "new document" button, and document actions,
    // | to suit the Settings document singleton
    singletonPlugin([home.name, settings.name]),
    // Add the "Open preview" action
    productionUrl({
      apiVersion,
      previewSecretId,
      types: PREVIEWABLE_DOCUMENT_TYPES,
    }),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
