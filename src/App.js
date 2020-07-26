import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Nav from "./components/Nav";
import {Addnote} from "./components/Addnote";
import {ViewNotes} from "./components/ViewNotes";
import Register from './authentication/Register';
import Login from './authentication/Login';

function App() {
  return (
    <Router>

      <Switch >
          <Route path="/" exact component={Register} />
          <Route path="/login" component={Login} />
          <Nav />
          <Route path="/loggedin" component={Addnote} />
          <Route path="/loggedin/notes" component={ViewNotes} />
      </Switch>

    </Router>
  );
}

export default App;
