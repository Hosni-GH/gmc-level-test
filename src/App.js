import React from 'react';
import Posts from './posts';
import Users from './users';
import Comments from './comments'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Users}/>
        <Route exact path="/posts/:id" component={Posts}/>
        <Route  path="/comments/:id" component={Comments}/>
      </Router>
    </div>
  );
}

export default App;
