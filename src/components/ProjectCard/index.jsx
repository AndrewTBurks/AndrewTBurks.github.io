import React, { useState, useRef, useEffect } from 'react';

import { useSpring, animated } from 'react-spring';

import { IconContext } from 'react-icons';
import { FaAward, FaCode, FaScroll, FaLink, FaUsers, FaFilePdf, FaInfo } from 'react-icons/fa';

import { useInView } from 'react-intersection-observer';

import "./project.scss";

function ProjectCard({
  award,
  name,
  shortname,
  team, // FaUsers
  Image,
  ...props }) {
  // let [ref, inView] = useInView({threshold: 1});

  const buttonMap = {
    abstract: {
      Icon: FaInfo
    },
    github: {
      Icon: FaCode
    },
    link: {
      Icon: FaLink
    },
    paper: {
      Icon: FaFilePdf
    }
  };

  let [open, setOpen] = useState(false);
  let [infoVisible, setInfoVisible] = useState(false);

  let overlay = useRef();
  let overlayStyle = useSpring({
    bottom: open ? "0%" : "75%"
  });

  useEffect(() => {
    overlay.current.scrollTop = 0;
  }, [open]);

  let contentStyle = useSpring({
    opacity: open ? 1 : 0
  });

  return <div
    // ref={ref}
    tabIndex={-1}
    className="project-card" 
    onFocus={() => setOpen(true)}
    onBlur={() => setOpen(false)}
  >
    {Image}
    <animated.div className={`overlay ${open ? "open" : ""}`}
      style={{...overlayStyle}}
      ref={overlay}>
      <div className="name" style={{marginLeft: award && "50px" || undefined, fontWeight: 700}}>
        {shortname}
      </div>
      {award && <div className="award-name" style={{ marginLeft: award && "50px" || undefined, fontWeight: 700 }}>
        {award}
      </div> || null}

      <animated.div className="content" style={{...contentStyle}}>
        <h4 className="team"><FaUsers color={"var(--sec-l)"}/> {team.split("A. Burks")[0]}<span
          style={{fontWeight: 700, color: "var(--sec-l)", textDecoration: "underline"}}>
            A. Burks
          </span>{team.split("A. Burks")[1]}
        </h4>
        <div className="buttons">
          <IconContext.Provider value={{className: "menuIcon"}}>
            {Object.keys(buttonMap).filter(a => props[a]).map(attr => {
              let { Icon, onClick } = buttonMap[attr];

              return <div className="info-button" key={attr}><Icon /></div>;
            })}
            {/* <div className="info-button"><FaScroll /></div>
            <div className="info-button"><FaScroll /></div> */}
          </IconContext.Provider>
        </div>
        {/* <p className="description" dangerouslySetInnerHTML={{__html: abstract}} /> */}
      </animated.div>
    </animated.div>
    {award && 
      <div className="award-symbol">
        <IconContext.Provider value={{style: {fontSize: "1.5em"}}}>
          <FaAward color="var(--sec-d)"/>
        </IconContext.Provider>
      </div>
    || null}
  </div>;
}

export default ProjectCard;