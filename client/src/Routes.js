import React from "react";
import About from "./pages/about/about"
import AllPosts from "./pages/allPosts/allPosts"
import Contact from"./pages/contact/contact"
import Home from "./pages/home/home"
import Login from "./pages/login/login"
import Single from "./pages/single/single"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function Routes() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">    
            <Home />
          </Route>
          <Route path="/allposts">
            <AllPosts />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/post/:puid">
            <Single />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}