import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Scroller from "./scroller";
import AnimateDelete from "./animateDelete";

const Home = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link className="home-link" to="/">
              Home
            </Link>
          </li>
        </ul>
        <hr />
        <Route exact path="/" component={Links} />
        <Route exact path="/animateDelete" component={AnimateDelete} />
        <Route exact path="/scroller" component={Scroller} />
      </div>
    </Router>
  );
};

const Links = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/animateDelete">1 - Animate Delete</Link>
        </li>
        <li>
          <Link to="/scroller">2 - Scroller</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
