import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import 'bootstrap/dist/css/bootstrap.css';
import HighlightIcon from "@material-ui/icons/Highlight";

function Nav()  {

    const navStyle = {
        color:'black'
    };

    return (
      <div className="container-fluid" >
      <nav className="navbar navbar-expand-lg navbar-dark bg-warning" id="header" >

        <h1 className="title">
          <HighlightIcon />
          Keeper
        </h1>

         <div className="collapse navbar-collapse container" id="navbarNav">
            <ul className="navbar-nav button" >
              <button className="nav-item"> <Link to="/" className="nav-item active">Add Note </Link> </button>
              <button className="nav-item">  <Link to='/notes' >View Notes </Link> </button>
            </ul>
          </div>
      </nav>
      </div>
    );
}

export default Nav;
