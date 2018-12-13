import React, { Component } from 'react';
import { Location } from '@reach/router';

import './App.css';

// components
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Modal from "./components/Modal";

// pages
import Content from './Content';

const links = [
  {name: "Home", to: "/"},
  {name: "Projects", to: "/projects"},
  {name: "Publications", to: "/publications"},
  {name: "About", to: "/about"},
];

class App extends Component {
  state = { modalOpen: false, modalChild: null };


  showModal = (info) => {
    this.setState({
      modalOpen: true,
      modalChild: info
    });
  };

  closeModal = () => {
    this.setState({
      modalOpen: false,
    });
  };

  render() {
    return (
      <div className="App">
        <Location>
          {({location}) => (
            <Navbar title="Andrew Burks" links={links} location={location}/>
          )}
        </Location>
        <Content showModal={this.showModal}/>
        <Footer />
        <Modal open={this.state.modalOpen} onClose={this.closeModal}>
          {this.state.modalChild}
        </Modal>
        </div>
    );
  };
}

export default App;
