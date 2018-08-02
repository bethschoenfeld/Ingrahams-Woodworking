import React, {Component} from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Photos from './components/photos/Photos'
import Footer from "./components/footer/Footer";

export default class App extends Component {
  render() {
    return (
      <HashRouter>
      <div>
      <h1>Ingraham's Woodworking Shop</h1>
      <ul className="header">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">Info</NavLink>
        </li>
        <li>
          <NavLink to="/photos">Photos</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <div className="content">
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/photos' component={Photos}/>
      <Route path='/contact' component={Footer}/>
      </div>
    </div>
  </HashRouter>)
  }
}
