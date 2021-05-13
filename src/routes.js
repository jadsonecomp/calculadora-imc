import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Principal from "./pages/Principal/principal";


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Principal} />
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    </BrowserRouter>
  );
}
