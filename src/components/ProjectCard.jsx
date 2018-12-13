import React from 'react';
import Typography from './Typography';

import Loader from 'react-loader-spinner';

import ProjectModalInfo from './ProjectModalInfo'
import Img from './Img';

// ???
// import { scheduleCallback as defer } from 'scheduler';

export default function ProjectCard(props) {
  const { info } = props;

  

  return <div className="card" 
    onClick={() => props.showModal(
      <ProjectModalInfo {...props}/>
    )}>
      <div className="title">
        <Typography type="caption">{info.name}</Typography>
        {info.award && <Typography type="award">{info.award}</Typography>}
      </div>
      <div className="image">
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
          <Img src={process.env.PUBLIC_URL + "/img/" + info.image} alt={info.name} style={{height: "100%"}}/>
        </React.Suspense>
      </div>
      <Typography className="links">
        {info.link && 
          <a href={info.link} target="_blank" rel="noopener noreferrer" onClick={(e) => {e.stopPropagation()}}>
            <Typography type="link">
              <i className="fas fa-link" style={{marginRight: "5px"}} ></i>
              Link
            </Typography>
          </a>}
        
        {info.github && 
          <a href={info.github} target="_blank" rel="noopener noreferrer" onClick={(e) => {e.stopPropagation()}}>
            <Typography type="link">
              <i className="fab fa-github" style={{marginRight: "5px"}} ></i>
              Repo
            </Typography>
          </a>}
        
        {info.paper && 
          <a href={process.env.PUBLIC_URL + "/content/" + info.paper} target="_blank" rel="noopener noreferrer" onClick={(e) => {e.stopPropagation()}}>
            <Typography type="link">
              <i className="fas fa-scroll" style={{marginRight: "5px"}} ></i>
              Paper
            </Typography>
          </a>}
      </Typography>
    </div>;
}