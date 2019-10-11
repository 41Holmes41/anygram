import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

const HomePage = (props) => {
  return (
    <div className="wrapper">
      <Link to='/forum'><div className="bg-success forum text-light">Forum</div></Link>
      <div className="bg-danger types text-light">The Types</div>
      <div className="bg-info text-light readingList">Reading List</div>
      <div className="bg-warning empty1 text-light disabled"></div>
      <div className="bg-primary empty2 text-light disabled"></div>
      <div className="bg-secondary empty3 text-light disabled"></div>
    </div>
    
  )
}

export default HomePage;