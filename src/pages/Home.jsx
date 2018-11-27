import React from 'react';

import Typography from '../components/Typography';

export default function Home() {
  
  
  return <>
      <div className="panel">
        <div className="panel-section" style={{}}>
          <img src={process.env.PUBLIC_URL + "/img/Profile.jpg"} alt="Me" style={{maxWidth: "100%", maxHeight: "500px"}}/>
        </div>
        <div className="panel-section text">
          <Typography type="heading special">I'm Andrew Burks.</Typography>

          <Typography type="default">
            I am a Ph.D. Computer Science student at the University of
            Illinois at Chicago. I am currently a Research Assistant at the
            Electronic Visualization Laboratory at UIC. I have experience
            working on research projects related to data visualization and the
            development of collaborative software for large/tiled displays.
          </Typography>
          <Typography type="default">
            My current research interests are Collaborative Visualization and
            Data Exploration.
          </Typography>
        </div>
      </div>
    </>;
}