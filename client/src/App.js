import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
// import MenPage from './components/MenPage'
import UserPage from './components/UserPage.js'
import SneakerPage from './components/SneakerPage'
function App() {
  return (
    <Router>
    <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
            {/* <Route exact path='/type/:typeId' component={MenPage} /> */}
            <Route exact path='/user' component={UserPage} />
            <Route exact path='/user/:userId' component={SneakerPage} />
      </Switch>
    </Router>
  );
}

export default App;
