import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link to="/" className="navbar-brand" href="#">AnyGram</Link>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/forum" className="nav-link" href="#">Forum</Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
    </form>
</nav>
      )
    }
    
export default Navbar;