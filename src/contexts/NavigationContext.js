import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const NavigationContext = createContext();

function NavigationProvider({ children }) {

  const [pageTransition, setPageTransition] = useState({
    initial: {
      width: '100%',
      height: '100%',
      flex: 1,
      opacity: 0,
    },
    enter: {
      width: '100%',
      height: '100%',
      flex: 1,
      position: 'absolute',
      left: '0',
      zIndex: '100',
      opacity: 1,
    },
    leave: {},
  });
  const fromLeftAnimation = {

    from: {

      flex: 1,

      width: '100%',
      height: '100%',

      position: 'absolute',
      left: '-100vw',

      zIndex: '200',
    },

    enter: {

      flex: 1,

      width: '100%',
      height: '100%',

      position: 'absolute',
      left: '0',

      zIndex: '100',
    },

    leave: {

      delay: 150,

      width: '100%',
      height: '100%',

      flex: 1,

      position: 'absolute',
      left: '100vw',

      zIndex: '50',
    },
  };
  const fromRightAnimation = {

    from: {

      flex: 1,

      width: '100%',
      height: '100%',

      position: 'absolute',
      left: '100vw',

      zIndex: '200',
    },

    enter: {

      flex: 1,

      width: '100%',
      height: '100%',

      position: 'absolute',
      left: '0',

      zIndex: '100',
    },

    leave: {

      delay: 150,

      width: '100%',
      height: '100%',

      flex: 1,

      position: 'absolute',
      left: '-100vw',

      zIndex: '50',
    },
  };

  function setFromLeftAnim() {

    setPageTransition({

      initial: fromLeftAnimation.from,
      enter: fromLeftAnimation.enter,
      leave: fromLeftAnimation.leave,
    });
  }

  function setFromRightAnim() {

    setPageTransition({

      initial: fromRightAnimation.from,
      enter: fromRightAnimation.enter,
      leave: fromRightAnimation.leave,
    });
  }

  function setDefaultAnim() {

    setPageTransition({

      initial: {
        width: '100%',
        height: '100%',
        flex: 1,
        opacity: 0,
      },
      enter: {
        width: '100%',
        height: '100%',
        flex: 1,
        position: 'absolute',
        left: '0',
        zIndex: '100',
        opacity: 1,
      },
      leave: {},
    });
  }

  function handleNavigation(el) {

    const target = el.target.classList;

    if (target.contains('nav-menu-option')) {

      setDefaultAnim();
    }

    if (target.contains('page-border')) {

      setDefaultAnim();

      if (target.contains('from-left')) { setFromLeftAnim(); }
      if (target.contains('from-right')) { setFromRightAnim(); }
    }
  }

  return (
    <NavigationContext.Provider value={{ handleNavigation, pageTransition }}>
      {children}
    </NavigationContext.Provider>
  );
}

NavigationProvider.propTypes = {

  children: PropTypes.node.isRequired,
};

export default NavigationProvider;
export { NavigationContext };
