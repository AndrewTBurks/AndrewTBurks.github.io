import React, { Component, Fragment } from 'react';

import './App.css';
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Tabs, { Tab } from '@material-ui/core/Tabs';

import { Projects } from "./pages/projects"
import { default as Publications } from "./pages/pubs"
import { default as Home } from "./pages/home"
import { default as About } from "./pages/about"

import projectData from "./projects.json";
import pubData from "./pubs.json";

let modalStyle = {
  position: 'absolute',
  width: "75%",
  backgroundColor: "#ffffff",
  boxShadow: "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12)",
  padding: "20px",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)"
};

let paperModalStyle = {
  position: 'absolute',
  padding: "20px",
  width: "75%",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)"

}

let createProjectLinks = (proj) => {
  let { link, github, paper } = proj;

  let buttonStyle = { margin: "0 5px" };
  let iconStyle = { marginLeft: "10px"};

  console.log(link, github, paper);

  return (
    <Fragment>
      <Button
        variant="raised"
        color="primary"
        style={buttonStyle}
        href={link}
        disabled={link === ""}
        target="about:blank">
        Link
        <i className="fa fa-2x fa-link" style={iconStyle}></i>
      </Button>
      <Button
        variant="raised"
        color="primary"
        style={buttonStyle}
        href={github}
        disabled={github === ""}
        target="about:blank">
        GitHub
        <i className="fa fa-2x fa-github" style={iconStyle}></i>
      </Button>
      <Button
        variant="raised"
        color="primary"
        style={buttonStyle}
        href={process.env.PUBLIC_URL + "/content/" + paper}
        disabled={paper === ""}
        target="about:blank">
        Paper
        <i className="fa fa-2x fa-file-pdf-o" style={iconStyle}></i>
      </Button>
    </Fragment>
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      rightPage: 0,
      leftPage: 0,
      selectedProject: projectData[0],
      projectModalOpen: false
    };

    this.onRightNav = this.onRightNav.bind(this);
    this.onLeftNav = this.onLeftNav.bind(this);
    this.onShowProjectInfo = this.onShowProjectInfo.bind(this);
    this.onHideProjectInfo = this.onHideProjectInfo.bind(this);
  }

  onRightNav(event, value) {
    this.setState({ rightPage: value });
  }

  onLeftNav(event, value) {
    this.setState({ leftPage: value });
  }

  onShowProjectInfo(project) {
    this.setState({ selectedProject: project, projectModalOpen: true });
  }

  onHideProjectInfo() {
    this.setState({ projectModalOpen: false });
  }

  render() {
    let project = this.state.selectedProject;

    return <Fragment>
        <CssBaseline/>
        <Paper style={{padding: "10px 25px"}}>
          <Typography variant="display1" color="primary">
            Andrew Burks
          </Typography>
          <Typography variant="subheading" style={{marginLeft: "5px"}}>
            Ph.D. Student - University of Illinois at Chicago
          </Typography>
          <Typography variant="subheading" gutterBottom style={{marginLeft: "5px"}}>
            Research Assistant - Electronic Visualization Laboratory
          </Typography>
        </Paper>
        <Grid container spacing={16} justify="center">
          <Grid item xs={12} sm={6}>
          <AppBar position="static" color="default" style={{marginTop: "5px"}}>
              <Tabs
                value={this.state.leftPage}
                onChange={this.onLeftNav}
                indicatorColor="primary"
                textColor="primary"
                centered
              >
                <Tab label="Home" />
                <Tab label="About Me" />
              </Tabs>
            </AppBar>
            <Paper style={{padding: "10px", marginTop: "5px"}}>
              {
                this.state.leftPage === 0 ? 
                <Home/> : 
                <About/>
              }
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <AppBar position="static" color="default" style={{marginTop: "5px"}}>
              <Tabs
                value={this.state.rightPage}
                onChange={this.onRightNav}
                indicatorColor="primary"
                textColor="primary"
                centered
              >
                <Tab label="Projects" />
                <Tab label="Publications" />
              </Tabs>
            </AppBar>
            <Paper style={{padding: "10px", marginTop: "5px", backgroundColor: "#f5f5f5"}}>
              {
                this.state.rightPage === 0 ? 
                <Projects projectData={projectData} showProjectInfo={this.onShowProjectInfo}/> :
                <Publications pubData={pubData}/>
              }
            </Paper>
          </Grid>
        </Grid>

        <Modal open={this.state.projectModalOpen} onClose={this.onHideProjectInfo}>
          <Paper style={paperModalStyle}>
              <Button color="secondary" onClick={this.onHideProjectInfo} style={{position: "absolute", right: "8px", top: "8  px"}}>
                <i className="fa fa-2x fa-times"></i>
              </Button>
              <Typography variant="title" id="modal-title">
                {project.name}
              </Typography>
              <Typography variant="subheading" id="simple-modal-description">
                {project.team}
              </Typography>
            <Grid container
              spacing={24}
              justify="center"
              alignItems="center"
              style={{marginTop: "10px"}}>
              <Grid item xs={12} sm={6}>
                <img 
                  src={process.env.PUBLIC_URL + "/img/" + project.image}
                  alt={project.name}
                  style={{width: "100%", boxShadow: modalStyle.boxShadow}}/>
              </Grid>
              <Grid item xs={12} sm={6}>
                {
                  project.award === "" ? "" :
                    <Typography variant="body1" color="secondary">
                      {project.award}
                    </Typography>
                }
                <Typography variant="title">
                  Abstract:
                </Typography>
                <Typography variant="body1">
                  {project.abstract}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                {/* Links: */}
                {createProjectLinks(project)}
              </Grid>
            </Grid>
          </Paper>
        </Modal>
      </Fragment>;
  }
}

export default App;