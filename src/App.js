import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

import { PageHeader, Nav, NavItem, Well } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { page: "home" };

    this.onNavSelect = this.onNavSelect.bind(this);
  }

  onNavSelect(selectedKey) {
    this.setState({ page: selectedKey });
  }

  render() {
    return (
      <Fragment>
        <PageHeader style={{ padding: "0 50px"}}>
          Andrew Burks <small>Ph.D Computer Science Student</small>
        </PageHeader>
        <div className="pageContent" style={{width: "80%", margin: "auto"}}>
          <Nav bsStyle="pills" activeKey={this.state.page} onSelect={this.onNavSelect}>
            <NavItem eventKey={"home"}>
              Home
            </NavItem>
            <NavItem eventKey={"about"}>
              About
            </NavItem>
            <NavItem eventKey={"proj"}>
              Projects
            </NavItem>
            <NavItem eventKey={"pub"}>
              Publications
            </NavItem>
            <NavItem eventKey={"contact"}>
              Contact
            </NavItem>
          </Nav>
          <Well style={{ margin: "10px 0" }}>
          </Well>
        </div>
      </Fragment>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
