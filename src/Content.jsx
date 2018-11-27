import React from 'react';
import { Router } from '@reach/router';


import Home from "./pages/Home";
import Typography from './components/Typography';

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
        <TestPage path="/about" color="orange" />
        <TestPage path="/projects" color="limegreen" />
        <FontTest path="publications"/>

      </Router>
    </div>;
}