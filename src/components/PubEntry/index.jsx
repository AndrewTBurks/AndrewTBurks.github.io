import React from 'react';

import "./pub.scss";

import { FaAward, FaUsers, FaMapPin } from 'react-icons/fa';
import { IconContext } from 'react-icons';

function PubEntry({
  award,
  teamBefore,
  teamAfter,
  name,
  journal,
  ...props
}) {
  return <div className="pub-entry">
    <IconContext.Provider value={{color: "var(--sec)"}}>
      {award && <div className="pub-award">
        <FaAward /> {award}
      </div> || null}
      <div className="pub-title">
        {name}
      </div>
      <div className="pub-authors">
        <FaUsers /> {teamBefore} <div className="me">A. Burks</div>{teamAfter}
      </div>
      <div className="pub-venue">
        <FaMapPin /> {journal}
      </div>
    </IconContext.Provider>
    
  </div>;
}

export default PubEntry;