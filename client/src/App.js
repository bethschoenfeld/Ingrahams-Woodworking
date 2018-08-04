import React, {Component} from 'react';
import {Route, NavLink, HashRouter} from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Photos from './components/photos/Photos'
import Footer from "./components/footer/Footer";
// import styled from 'styled-components';

export default class App extends Component {
  render() {
    return (<HashRouter>

      <div>

        <h1>Ingraham's Woodworking Shop</h1>
        <label htmlFor="show-menu" className="show-menu">Show Menu</label>
        <input type="checkbox" id="show-menu" role="button"/>
        <ul className="navbar" id="menu">
          <li>
            <NavLink className='link' to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className='link' to="/about">Info</NavLink>
          </li>
          <li>
            <NavLink className='link' to="/photos">Photos</NavLink>
          </li>
          <li>
            <NavLink className='link' to="/contact">Contact</NavLink>
          </li>
        </ul>

        <div className="content">
          <Route exact={true} path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/photos' component={Photos}/>
          <Route path='/contact' component={Footer}/>
        </div>

      </div>
    </HashRouter>)
  }
}
