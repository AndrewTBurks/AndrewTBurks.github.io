import React, { Component } from 'react';
// import { Location } from '@reach/router';

import './App.css';

// components
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Modal from "./components/Modal";

// pages
import Content from './Content';

const links = [
  {name: "Home", to: "home"},
  {name: "Projects", to: "projects"},
  {name: "Publications", to: "publications"},
  {name: "About", to: "about"},
];

class App extends Component {
  state = { 
    modalOpen: false,
    modalChild: null,
    page: "home"
  };

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

  changePage = (page) => {
    this.setState({
      page
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar title="Andrew Burks" links={links} location={this.state.page} navigate={this.changePage}/>
        <Content showModal={this.showModal} location={this.state.page}/>
        <Footer />
        <Modal open={this.state.modalOpen} onClose={this.closeModal}>
          {this.state.modalChild}
        </Modal>
        </div>
    );
  };
}

export default App;
