import React from 'react';
import { Router } from '@reach/router';

// const Home = React.lazy(() => import("./pages/Home"));
// const Projects = React.lazy(() => import("./pages/Projects"));
// const Publications = React.lazy(() => import("./pages/Publications"));
// const About = React.lazy(() => import("./pages/About"));

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Publications from "./pages/Publications";
import About from './pages/About';


import Typography from './components/Typography';

import projectData from "./projects.json";
import pubData from "./pubs.json";
import { Loader } from 'react-loader-spinner';

export default function Content(props) {
  return <div className="contentWrapper">
      <React.Suspense fallback={
        <div style={{display: "flex", alignItems:"center", justifyContent: "center", width: "100%"}}>
          <Loader
            type="Triangle"
            color="var(--purple)"
            height="100"
            width="100"
          />
        </div>
      }>
        <Router>
          <Home default path="/" />
          <About path="/about" />
          <Projects path="/projects" projects={projectData} showModal={props.showModal}/>
          <Publications path="publications" pubs={pubData}/>
        </Router>
      </React.Suspense>
    </div>;
}