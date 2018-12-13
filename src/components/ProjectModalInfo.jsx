import React from 'react';

import Typography from './Typography'
import Img from './Img';

import Loader from "react-loader-spinner";

export default function ProjectModalInfo(props) {
  let { info } = props;

  // split the team string to insert my name as bold later
  let teamSplit = info.team.split("A. Burks");

  return <div className="project-modal-wrapper">
    <Typography type="heading" style={{fontWeight: "normal"}}>
      {info.name}
    </Typography>
    <Typography type="award-large">
      {info.award}
    </Typography>
    <Typography type="subsubheading">
      {teamSplit[0]}
      <strong>
        A. Burks
      </strong>
      {teamSplit[1]}
    </Typography>
  
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
      <Img src={process.env.PUBLIC_URL + "/img/" + info.image}
        alt={info.name}
        style={{ 
          width: "100%",
          margin: "5px 0",
          border: "1px solid var(--gray)",
        }}/>
    </React.Suspense>
    {info.abstract.split("<br>").map(d => (
      <Typography key={d} type="default" style={{textAlign: "justify", textIndent: "50px"}}>
      {d}
      </Typography>
    ))}
  </div>;
}