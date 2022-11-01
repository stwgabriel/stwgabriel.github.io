// Components
import Link from 'next/link'
import { useEffect } from 'react'
import MetaTitle from '../components/MetaTitle'

// Styles
import { Page2Container } from '../styles/pages/page-2'

function Page2() {
  useEffect(() => {
    console.log('page 2 - mounting')
    return () => console.log('page 2 - unmounting')
  })

  return (
    <Page2Container>
      <MetaTitle page="Page2" />
      <h1>Page2</h1>
      <Link href="/" passHref>
        <a>
          <h2>Voltar</h2>
        </a>
      </Link>
    </Page2Container>
  )
}

export default Page2
