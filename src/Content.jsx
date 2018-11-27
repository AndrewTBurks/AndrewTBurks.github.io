import React from 'react';
import { Router } from '@reach/router';


import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Publications from "./pages/Publications";

import About from './pages/About';



import Typography from './components/Typography';

import projectData from "./projects.json";
import pubData from "./pubs.json";

const TestPage = (props) => {
  return (
    <div style={{color: props.color}}>
      TestPage
    </div>
  );
};

const FontTest = () => {
  return <>
      {/* <div className="panel"> */}
        <Typography type="heading">Heading</Typography>
        <Typography type="subheading">Subheading</Typography>
        <Typography type="subsubheading">Subsubheading</Typography>
        <Typography type="link">link</Typography>
        <Typography type="default">default</Typography>
        <Typography type="caption">caption</Typography>
        <Typography type="subcaption">subcaption</Typography>
      {/* </div> */}
    </>;
}

export default function Content(props) {
  return <div className="contentWrapper">
      <Router>
        <Home default path="/" />
        <About path="/about" />
        <Projects path="/projects" projects={projectData} />
        <Publications path="publications" />
        {/* <About path="/about" />
        <About path="/about" /> */}
      </Router>
    </div>;
}