import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

import CssBaseline from 'material-ui/CssBaseline';

import { Grid } from 'material-ui';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Subheader from 'material-ui/List/ListSubheader';
import Typography from 'material-ui/Typography';
import Modal from 'material-ui/Modal';
import Button from 'material-ui/Button';

import Projects from "./pages/projects"

import projectData from "./projects.json";

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

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      page: "home",
      selectedProject: projectData[0],
      projectModalOpen: false
    };

    this.onNavSelect = this.onNavSelect.bind(this);
    this.onShowProjectInfo = this.onShowProjectInfo.bind(this);
    this.onHideProjectInfo = this.onHideProjectInfo.bind(this);
  }

  onNavSelect(selectedKey) {
    this.setState({ page: selectedKey });
  }

  onShowProjectInfo(project) {
    console.log(project);
    this.setState({ selectedProject: project, projectModalOpen: true });
  }

  onHideProjectInfo() {
    this.setState({ projectModalOpen: false });
  }

  render() {
    let project = this.state.selectedProject;
    return (
      <Fragment>
        <CssBaseline/>
        <div>
          <Typography variant="display2" id="modal-title">
            Andrew Burks
          </Typography>
        </div>
        <Grid container spacing={16} justify="center">
          <Grid item xs={12} sm={6}>
            <Projects projectData={projectData} showProjectInfo={this.onShowProjectInfo}/>
          </Grid>
        </Grid>
        <Modal open={this.state.projectModalOpen} onClose={this.onHideProjectInfo}>
          <div style={modalStyle}>
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
                <Typography variant="title">
                  Abstract:
                </Typography>
                <Typography variant="body1">
                  {project.abstract}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                Links:
              </Grid>
            </Grid>
          </div>
        </Modal>
      </Fragment>
    );
  }
}

export default App;
