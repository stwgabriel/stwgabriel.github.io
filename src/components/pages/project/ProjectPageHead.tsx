import { toPlainText } from '@portabletext/react'
import { SiteMeta } from 'src/components/global/SiteMeta'
import { ProjectPayload } from 'src/types'

export interface ProjectPageHeadProps {
  project: ProjectPayload | undefined
  title: string | undefined
}

export default function ProjectPageHead({
  project,
  title,
}: ProjectPageHeadProps) {
  return (
    <SiteMeta
      baseTitle={title}
      description={project?.overview ? toPlainText(project.overview) : ''}
      image={project?.coverImage}
      title={project?.title}
    />
  )
}
