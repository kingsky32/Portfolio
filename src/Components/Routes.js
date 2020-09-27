import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "../Routes/About";
import Contact from "../Routes/Contact";
import Home from "../Routes/Home";
import WorkDetail from "../Routes/WorkDetail";
import Works from "../Routes/Works";

const Routes = () =>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/works" component={Works} />
    <Route exact path="/works/:id" component={WorkDetail} />
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
  </Switch>;

export default Routes;
