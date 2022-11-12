import { createContext, useState } from 'react'

const NavigationContext = createContext(null)

function NavigationProvider({ children }) {
  // Static
  const fromLeftAnimation = {
    from: {
      position: 'absolute',
      x: -800,
      zIndex: 200,
    },
    enter: {
      position: 'absolute',
      x: 0,
      zIndex: 100,
    },
    leave: {
      delay: 150,
      position: 'absolute',
      x: 800,
      zIndex: 50,
    },
  }
  const fromRightAnimation = {
    from: {
      position: 'absolute',
      x: 800,
      zIndex: 200,
    },
    enter: {
      position: 'absolute',
      x: 0,
      zIndex: 100,
    },
    leave: {
      delay: 150,
      position: 'absolute',
      x: -800,
      zIndex: 50,
    },
  }
  const defaultAnimation = {
    from: {
      position: 'absolute',
      x: 0,
      y: 50,
      opacity: 0,
    },
    enter: {
      position: 'absolute',
      x: 0,
      y: 0,
      opacity: 1,
    },
    leave: {
      position: 'absolute',
      top: 0,
      x: 0,
      y: 50,
      opacity: 0,
    },
  }

  // States
  const [pageTransition, setPageTransition] = useState({
    ...defaultAnimation,
  } as {})

  // Setters
  function setFromLeftAnim() {
    setPageTransition(fromLeftAnimation)
  }
  function setFromRightAnim() {
    setPageTransition(fromRightAnimation)
  }
  function setDefaultAnim() {
    setPageTransition(defaultAnimation)
  }

  // Handlers
  function handleNavigation(clickedElement) {
    const target = clickedElement.target.classList
    clickedElement.target.blur()

    if (target.contains('nav-menu-option')) {
      setDefaultAnim()
    }

    if (target.contains('page-border') || target.contains('mobile-control')) {
      setDefaultAnim()

      if (target.contains('from-x')) {
        setFromLeftAnim()
      }
      if (target.contains('from-right')) {
        setFromRightAnim()
      }
    }
  }

  return (
    <NavigationContext.Provider value={{ handleNavigation, pageTransition }}>
      {children}
    </NavigationContext.Provider>
  )
}

export default NavigationProvider
export { NavigationContext }
