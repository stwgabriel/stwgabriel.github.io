import { createClient } from 'next-sanity'
import {
  apiVersion, dataset, projectId, useCdn,
} from 'src/lib/sanity.api'
import {
  homePageQuery,
  homePageTitleQuery,
  pagePaths,
  pagesBySlugQuery,
  projectBySlugQuery,
  projectPaths,
  settingsQuery,
} from 'src/lib/sanity.queries'
import type {
  HomePagePayload,
  PagePayload,
  ProjectPayload,
  SettingsPayload,
} from 'src/types'

/**
 * Checks if it's safe to create a client instance, as `@sanity/client`
 * will throw an error if `projectId` is false
 */
const sanityClient = (token?: string) => (projectId
  ? createClient({
    projectId, dataset, apiVersion, useCdn, token,
  })
  : null)

export async function getHomePage({
  token,
}: {
  token?: string
}): Promise<HomePagePayload | undefined> {
  return sanityClient(token)?.fetch(homePageQuery)
}

export async function getHomePageTitle({
  token,
}: {
  token?: string
}): Promise<string | undefined> {
  return sanityClient(token)?.fetch(homePageTitleQuery)
}

export async function getPageBySlug({
  slug,
  token,
}: {
  slug: string
  token?: string
}): Promise<PagePayload | undefined> {
  return sanityClient(token)?.fetch(pagesBySlugQuery, { slug })
}

export async function getProjectBySlug({
  slug,
  token,
}: {
  slug: string
  token?: string
}): Promise<ProjectPayload | undefined> {
  return sanityClient(token)?.fetch(projectBySlugQuery, { slug })
}

export async function getSettings({
  token,
}: {
  token?: string
}): Promise<SettingsPayload | undefined> {
  return sanityClient(token)?.fetch(settingsQuery)
}

export async function getProjectPaths(): Promise<string[]> {
  return sanityClient()?.fetch(projectPaths)
}

export async function getPagePaths(): Promise<string[]> {
  return sanityClient()?.fetch(pagePaths)
}
