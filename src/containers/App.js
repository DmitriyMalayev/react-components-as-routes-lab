import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';


const App = (props) => {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={Home} />{" "}
        <Route path="/actors" component={Actors} />
        <Route path="/directors" component={Directors} />
        <Route path="/movies" component={Movies} />
        {/* path is a string, component we need to utilize JS.  */} 
      </div>
    </Router>
  );
};

export default App
