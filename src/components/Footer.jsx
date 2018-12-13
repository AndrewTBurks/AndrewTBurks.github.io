import React from 'react';

import Typography from './Typography';

export default function Footer() {

  return <div className="footer">
      <Typography type="caption">
        Designed by Andrew Burks
      </Typography>
      <a className="link"
        href="https://twitter.com/AndrewTBurks/"
        target="_blank"
        rel="noopener noreferrer">
          <Typography type="link">
            <i className="fab fa-twitter" style={{marginRight: "5px"}} />
            Twitter
          </Typography>
      </a>
      <a className="link" 
        href="https://github.com/AndrewTBurks/" 
        target="_blank" 
        rel="noopener noreferrer">
          <Typography type="link">
            <i className="fab fa-github" style={{marginRight: "5px"}} />
            GitHub
          </Typography>
      </a>
      <a className="link" 
        href={process.env.PUBLIC_URL + "/content/CV_Andrew_Burks_Dec13.pdf"}
        target="_blank" 
        rel="noopener noreferrer">
          <Typography type="link">
            <i className="far fa-file-pdf" style={{marginRight: "5px"}} />
            Curriculum Vitae
          </Typography>
      </a>
    </div>;
};