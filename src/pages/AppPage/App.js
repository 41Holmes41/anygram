import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from '../HomePage/HomePage'
import ForumPage from '../ForumPage/ForumPage'
import Navbar from '../../components/Navbar/Navbar'
import Type1ForumPage from '../ForumPage/type1/Type1ForumPage'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={()=><HomePage />}/>
          <Route exact path="/forum" render={()=><ForumPage />}/>
          <Route exact path="/type1forum" render={()=><Type1ForumPage />}/>
        </Switch>
      </div>
    );
  }
}

export default App;
