import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-white bg-white">
        <Link to="/" className="nav-item nav-link">
          Todo
        </Link>
        <Link to="/form" className="nav-item nav-link">
          Form
        </Link>
        <Link to="/list" className="nav-item nav-link">
          List
        </Link>
      </nav>
    );
  }
}

export default Header;
