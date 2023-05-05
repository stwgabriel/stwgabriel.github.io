import { usePreview } from 'src/lib/sanity.preview'
import { pagesBySlugQuery } from 'src/lib/sanity.queries'
import type { PagePayload } from 'src/types'

import { Page, PageProps } from './Page'

export default function PagePreview({
  token,
  page,
  settings,
  homePageTitle,
}: {
  token: null | string
} & PageProps) {
  const pagePreview: PagePayload = usePreview(token, pagesBySlugQuery, {
    slug: page.slug,
  })

  return (
    <Page
      page={pagePreview}
      settings={settings}
      homePageTitle={homePageTitle}
      preview
    />
  )
}
