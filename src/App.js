import React from 'react';
import './App.css';
import {Login} from './components/Login'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee,faUser,faLock } from '@fortawesome/free-solid-svg-icons'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import { Dashboard } from './components/Dashboard';

library.add(fab, faCheckSquare, faCoffee,faUser,faLock);


function App() {

  return (
    <Router>
      <div>
        

        <Switch>
       
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Dashboard />
        </Route>
    </Switch>
    
    </div>
    </Router>

    
   
   
  );
}

export default App;
