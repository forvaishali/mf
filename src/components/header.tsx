import React from "react";
import rishi from '../Images/saffronlogo.jpg';
import Agnihotra from "../components/agnihotra" ;
import Farming from "../../src/components/farming";
import Heritagesites from "../components/heritagesites" ;
import Heroes from "../../src/components/heroes";
import Home from "../../src/components/home";
import Solar from "../components/solar" ;
import Saptarishi from "../../src/components/saptarishi";
import ZeroWaste from "../../src/components/zerowaste";
import { Link,
         BrowserRouter as Router,
         Switch,
         Route } from 'react-router-dom';
const Header = () => {
  return (
    <Router>
    <div className="navbar">
    <Link to="zeroWaste">Zero Waste</Link>
    <Link to="/solar">Solar</Link>
    <Link to="/heroes">Our Heroes</Link>
    <Link to="/agnihotra">Agnihotra</Link>
    <Link to="/saptarishi">Saptarishi</Link>
    <Link to="/heritagesites">Bharat Heritage sites</Link>
    <Link to="/farming">Farming</Link>
    <img src={rishi} alt="Moksha Farm" className="logo" />
     <Link to="/home">About</Link>
  
  <Switch>
          <Route exact path="/">
          </Route>
          <Route path="/heritagesites">
            <Heritagesites />
          </Route>
          <Route path="/zeroWaste">
            <ZeroWaste />
          </Route>
          <Route path="/solar">
            <Solar/>
          </Route>
          <Route path="/heroes">
            <Heroes />
          </Route>
          <Route path="/agnihotra">
            <Agnihotra />
          </Route>
          <Route path="/saptarishi">
            <Saptarishi/>
          </Route>
          <Route path="/heritagesites">
            <Heritagesites />
          </Route>
          <Route path="/farming">
            <Farming />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          
        </Switch>
  </div>
  </Router>
  );
};
export default Header;