import React from 'react';
import logo from './logo.svg';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.css';
import Login from './Login.js'
import Welcome from './Welcome.js'

const App = () => {

    const[state,setState] = React.useState({
        login: false,
        username: '',
    })

    const startUp = state.login ? <Welcome name={state.username}/> : <Login />;


  return (
    <div className="App">
    <Router>
        <Header/>
        {startUp}


    <Switch>


    </Switch>

    </Router>
    </div>
  );
}

export default App;
