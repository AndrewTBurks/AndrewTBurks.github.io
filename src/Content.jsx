import React from 'react';

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
  let { location } = props;

  const pages = {
    home: <Home />,
    about: <About />,
    projects: <Projects projects={projectData} showModal={props.showModal}/>,
    publications:<Publications pubs={pubData}/>
  };

  return <div className="contentWrapper">
      {pages[location]}
    </div>;
}