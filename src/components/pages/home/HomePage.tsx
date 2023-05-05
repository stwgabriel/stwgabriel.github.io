import { resolveHref } from 'src/lib/sanity.links'
import Link from 'next/link'
import { ProjectListItem } from 'src/components/pages/home/ProjectListItem'
import { Header } from 'src/components/shared/Header'
import Layout from 'src/components/shared/Layout'
import ScrollUp from 'src/components/shared/ScrollUp'
import type { HomePagePayload } from 'src/types'
import { SettingsPayload } from 'src/types'

import HomePageHead from './HomePageHead'

export interface HomePageProps {
  settings?: SettingsPayload
  page?: HomePagePayload
  preview?: boolean
}

export function HomePage({ page, settings, preview }: HomePageProps) {
  const { overview, showcaseProjects, title = 'Personal website' } = page ?? {}

  return (
    <>
      <HomePageHead page={page} settings={settings} />

      <Layout settings={settings} preview={preview}>
        <div className="space-y-20">
          {/* Header */}
          {title && <Header centered title={title} description={overview} />}
          {/* Showcase projects */}
          {showcaseProjects && showcaseProjects.length > 0 && (
            <div className="mx-auto max-w-[100rem] rounded-md border">
              {showcaseProjects.map((project, key) => {
                const href = resolveHref(project._type, project.slug)
                if (!href) {
                  return null
                }
                return (
                  <Link key={key} href={href}>
                    <ProjectListItem project={project} odd={key % 2} />
                  </Link>
                )
              })}
            </div>
          )}

          {/* Workaround: scroll to top on route change */}
          <ScrollUp />
        </div>
      </Layout>
    </>
  )
}
