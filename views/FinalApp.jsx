import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Addnote from "./Addnote";
import ViewNotes from "./ViewNotes";
import Nav from "./Nav";

function finalApp() {
  return (
    <Router>
      <Nav />
      <Switch >
          <Route path="/" exact component={Addnote} />
          <Route path="/notes" component={ViewNotes} />
      </Switch>

    </Router>
  );
}

export {finalApp};
