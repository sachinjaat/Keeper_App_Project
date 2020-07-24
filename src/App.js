import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Nav from "./components/Nav";

import {Addnote} from "./components/Addnote";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Nav from "./components/Nav";
// import {Note} from "./components/Note";
import {ViewNotes} from "./components/ViewNotes";

function App() {
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

export default App;
