import React from 'react';
import Typography from './Typography';

import Loader from 'react-loader-spinner';

import {unstable_createResource} from 'react-cache';

export default function ProjectCard(props) {
  const { info } = props;

  const ImageResource = unstable_createResource(
    source => 
      new Promise(resolve => {
        const img = new Image();
        img.src = source;
        img.onload = resolve;
      })
  );

  const Img = ({src, alt, ...props }) => {
    ImageResource.read(src);

    return <img src={src} alt={alt} {...props} />;
  };

  return <div className="card">
      <div className="title">
        <Typography type="caption">{info.name}</Typography>
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


          <div style={{display: "flex", alignItems:"center", justifyContent: "center", width: "100%"}}>
            <Loader
              type="Triangle"
              color="var(--purple)"
              height="100"
              width="100"
            />
          </div>
          {/* <Img src={process.env.PUBLIC_URL + "/img/" + info.image} alt={info.name} style={{height: "100%"}}/> */}
        </React.Suspense>
      </div>
      <div className="links">
        <Typography type="link">
          <i className="fas fa-link" style={{marginRight: "5px"}} ></i>
          Link
        </Typography>
        <Typography type="link">
          <i className="fab fa-github" style={{marginRight: "5px"}} ></i>
          Repo
        </Typography>
        <Typography type="link">
          <i className="fas fa-scroll" style={{marginRight: "5px"}} ></i>
          Paper
        </Typography>
      </div>
    </div>;
}