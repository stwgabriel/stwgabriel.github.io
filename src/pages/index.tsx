// eslint-disable-next-line import/no-extraneous-dependencies
import { PreviewSuspense } from '@sanity/preview-kit'
import { GetStaticProps } from 'next'
import { lazy } from 'react'
import { HomePage } from 'src/components/pages/home/HomePage'
import { PreviewWrapper } from 'src/components/preview/PreviewWrapper'
import { getHomePage, getSettings } from 'src/lib/sanity.client'
import { HomePagePayload, SettingsPayload } from 'src/types'

const HomePagePreview = lazy(
  () => import('src/components/pages/home/HomePagePreview'),
)

interface PageProps {
  page: HomePagePayload
  settings: SettingsPayload
  preview: boolean
  token: string | null
}

interface Query {
  [key: string]: string
}

interface PreviewData {
  token?: string
}

export default function IndexPage(props: PageProps) {
  const {
    page, settings, preview, token,
  } = props

  if (preview) {
    return (
      <PreviewSuspense
        fallback={(
          <PreviewWrapper>
            <HomePage page={page} settings={settings} preview={preview} />
          </PreviewWrapper>
        )}
      >
        <HomePagePreview token={token} />
      </PreviewSuspense>
    )
  }

  return <HomePage page={page} settings={settings} />
}

const fallbackPage: HomePagePayload = {
  title: '',
  overview: [],
  showcaseProjects: [],
}

export const getStaticProps: GetStaticProps<
PageProps,
Query,
PreviewData
> = async (ctx) => {
  const { preview = false, previewData = {} } = ctx

  const { token } = previewData
  const [settings, page = fallbackPage] = await Promise.all([
    getSettings({ token }),
    getHomePage({ token }),
  ])

  return {
    props: {
      page,
      settings,
      preview,
      token: previewData.token ?? null,
    },
  }
}
