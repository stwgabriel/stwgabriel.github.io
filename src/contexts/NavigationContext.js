import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const NavigationContext = createContext();

function NavigationProvider({ children }) {

  const [pageTransition, setPageTransition] = useState({
    initial: {

      position: 'absolute',
      top: '5rem',
      left: '0',

      opacity: 0,
    },
    enter: {

      position: 'absolute',
      top: '0',
      left: '0',

      opacity: 1,
    },
    leave: {
      position: 'absolute',
      top: '5rem',
      left: '0',

      opacity: 0,
    },
  });
  const fromLeftAnimation = {

    from: {

      position: 'absolute',
      left: '-100vw',

      zIndex: '200',
    },

    enter: {

      position: 'absolute',
      left: '0',

      zIndex: '100',
    },

    leave: {

      delay: 150,

      position: 'absolute',
      left: '100vw',

      zIndex: '50',
    },
  };
  const fromRightAnimation = {

    from: {

      position: 'absolute',
      left: '100vw',

      zIndex: '200',
    },

    enter: {

      position: 'absolute',
      left: '0',

      zIndex: '100',
    },

    leave: {

      delay: 150,

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

        position: 'absolute',
        top: '5rem',
        left: '0',

        opacity: 0,
      },
      enter: {

        position: 'absolute',
        top: '0',
        left: '0',

        opacity: 1,
      },
      leave: {
        position: 'absolute',
        top: '5rem',
        left: '0',

        opacity: 0,
      },
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
