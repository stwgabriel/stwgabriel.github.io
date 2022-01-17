import { useContext } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

import { NavigationContext } from './contexts/NavigationContext';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function Routes() {

  const location = useLocation();
  const { pageTransition } = useContext(NavigationContext);
  const transition = useTransition(location, {

    from: pageTransition.initial,
    enter: pageTransition.enter,
    leave: pageTransition.leave,
  });

  return transition((styles, routeLocation) => (

    <animated.div style={styles}>
      <Switch location={routeLocation}>
        <Route exact path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/skills" component={Skills} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </animated.div>
  ));
}

export default Routes;
