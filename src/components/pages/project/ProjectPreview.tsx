import { usePreview } from 'src/lib/sanity.preview'
import { projectBySlugQuery } from 'src/lib/sanity.queries'
import type { ProjectPayload } from 'src/types'

import { ProjectPage, ProjectPageProps } from './ProjectPage'

export default function ProjectPreview({
  token,
  settings,
  project,
  homePageTitle,
}: {
  token: null | string
} & ProjectPageProps) {
  const projectPreview: ProjectPayload = usePreview(token, projectBySlugQuery, {
    slug: project?.slug,
  })

  return (
    <ProjectPage
      project={projectPreview}
      settings={settings}
      homePageTitle={homePageTitle}
      preview
    />
  )
}
