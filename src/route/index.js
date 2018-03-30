import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "@/components/Home";
import Schedule from "@/components/Schedule";

const RouterView = () => (
  <Switch className="test">
    <Route exact path="/" component={Home} />
    <Route path='/schedule' component={Schedule}/>
  </Switch>
);

export default RouterView;
