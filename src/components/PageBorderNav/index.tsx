import Link from 'next/link'
import { useContext } from 'react'

// Contexts
import { NavigationContext } from 'src/contexts/NavigationContext'

// Styles
import { Container } from './styles'

function PageBorderNav({ title, borderSide, from, to }) {
  const { handleNavigation } = useContext(NavigationContext)

  return (
    <Container borderSide={borderSide}>
      <Link href={`/${to}`} onClick={handleNavigation} passHref>
        <a
          className={`page-border ${from} to-${
            to === '' ? 'home' : to
          } no-select`}
        >
          -&lt;
          <span className="no-select no-events">{title}</span>
        </a>
      </Link>

      <div className="hoverLayer no-select no-events">
        -&gt;
        <span>{title}</span>
      </div>
    </Container>
  )
}

export default PageBorderNav
