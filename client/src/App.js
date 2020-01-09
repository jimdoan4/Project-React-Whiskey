import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
    <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
