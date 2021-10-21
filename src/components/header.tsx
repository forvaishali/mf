import React from "react";
import rishi from '../Images/saffronlogo.jpg';
import Heritagesites from "../components/heritagesites" ;
import Saptarishi from "../../src/components/saptarishi";
import { Link,
         BrowserRouter as Router,
         Switch,
         Route } from 'react-router-dom';
const Header = () => {
  return (
    <Router>
    <div>
    <div className="navbar">
    <a href="/">Zero Waste</a>
    <a href="#Solar">Solar</a>
     <a href="#Heroes">Our Heroes</a>
      <a href="#Agnihotra">Agnihotra</a>
      <Link to="/heritagesites">Bharath Heritage sites</Link>
    <a href="#Farming">Farming</a>
  <img src={rishi} alt="Moksha Farm" className="logo" />
     <a href="#home">About Moksha Farm</a>
  </div>
  <Switch>
          <Route exact path="/">
          </Route>
          <Route path="/heritagesites">
            <Heritagesites />
          </Route>
          <Route path="/dashboard">
            <Saptarishi />
          </Route>
        </Switch>
  </div>
  </Router>
  );
};
export default Header;