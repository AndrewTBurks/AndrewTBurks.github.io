import React, { Component } from 'react';
import { Location } from '@reach/router';

import './App.css';

// components
import Navbar from "./components/Navbar";
import Footer from './components/Footer';

// pages
import Content from './Content';

const links = [
  {name: "Home", to: "/"},
  {name: "About", to: "/about"},
  {name: "Projects", to: "/projects"},
  {name: "Publications", to: "/publications"},
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Location>
          {({location}) => (
            <Navbar title="Andrew Burks" links={links} location={location}/>
          )}
        </Location>
        <Content />
        <Footer />
        </div>
    );
  }
}

export default App;
