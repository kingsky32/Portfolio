import React, { useEffect } from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import About from "../Routes/About";
import Contact from "../Routes/Contact";
import Home from "../Routes/Home";
import WorkDetail from "../Routes/WorkDetail";
import Works from "../Routes/Works";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { gsap, TweenLite, Power1 } from "gsap";
import { ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollToPlugin);

const Routes = ({ onCloseMenu }) => {
  const history = useHistory();
  const location = useLocation();
  useEffect(
    () => {
      history.listen(() => {
        TweenLite.to(window, {
          duration: 0.3,
          scrollTo: {
            y: 0
          },
          ease: Power1
        });
        onCloseMenu();
      });
    },
    [history, onCloseMenu]
  );

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} timeout={300} classNames="fade">
        <Switch location={location}>
          <Route exact path="/" component={Home} />
          <Route exact path="/works" component={Works} />
          <Route exact path="/works/:id" component={WorkDetail} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Routes;
