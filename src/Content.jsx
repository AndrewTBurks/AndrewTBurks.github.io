import React from 'react';
import { Router } from '@reach/router';


import Home from "./pages/Home";


const TestPage = (props) => {
  return (
    <div style={{color: props.color}}>
      TestPage
    </div>
  );
}

export default function Content(props) {
  return <div className="contentWrapper">
      <Router>
        <Home default path="/" />
        <TestPage path="/about" color="orange" />
        <TestPage path="/projects" color="limegreen" />
        <TestPage path="/publications" color="hotpink" />
      </Router>
    </div>;
}