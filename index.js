import React from "react";
import ReactDOM from "react-dom";
import {App} from "./views/App";
import "./public/styles.css";


ReactDOM.render((
  <Switch>
        <Route exact path="/" component={App} />
      </Switch>),
      document.getElementById('root')
  );
