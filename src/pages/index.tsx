// Components
import Link from 'next/link'
import { useEffect } from 'react'
import MetaTitle from '../components/MetaTitle'

// Styles
import { HomeContainer } from '../styles/pages/home'

function Home() {

    useEffect(() => {
      console.log('home - mounting')
      return () => console.log('home - unmounting')
    })
  return (
    <HomeContainer>
      <MetaTitle page="Home" />
      <h1>Home</h1>
      <Link href="/page-2" passHref>
        <a>
          <h2>Page 2</h2>
        </a>
      </Link>
    </HomeContainer>
  )
}

export default Home
