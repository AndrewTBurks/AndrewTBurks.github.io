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
  let [ref, inView] = useInView({ threshold: 1 });

  let [open, setOpen] = useState(false);
  let [infoVisible, setInfoVisible] = useState(false);

  console.log(infoVisible);

  const buttonMap = {
    abstract: {
      Icon: FaInfo,
      onClick: (e) => {
        e.stopPropagation();
        setInfoVisible(v => !v);
      }
    },
    github: {
      Icon: () => <a href={props.github} target="_blank" style={{color: "inherit"}}><FaCode /></a>
    },
    link: {
      Icon: () => <a href={props.link} target="_blank" style={{color: "inherit"}}><FaLink /></a>
    },
    paper: {
      Icon: () => <a href={props.paper} target="_blank" style={{color: "inherit"}}><FaFilePdf/></a>
    }
  };

  let overlay = useRef();
  let overlayStyle = useSpring({
    bottom: open ? "0%" : "75%"
  });

  useEffect(() => {
    overlay.current.scrollTop = 0;
  }, [open]);

  useEffect(() => {
    if (!inView) {
      setOpen(false);
    }
  }, [inView]);

  let contentStyle = useSpring({
    opacity: open ? 1 : 0
  });

  let infoStyle = useSpring({
    overflowY: infoVisible ? "auto" : "hidden",
    opacity: infoVisible ? 1 : 0
  });

  return <div
    ref={ref}
    tabIndex={-1}
    className="project-card" 
    onClick={() => setOpen(o => !o)}
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

              return <div className="info-button" onClick={onClick} key={attr}><Icon /></div>;
            })}
            {/* <div className="info-button"><FaScroll /></div>
            <div className="info-button"><FaScroll /></div> */}
          </IconContext.Provider>
        </div>
        <div className="description-wrapper">
          <animated.div className="description" style={{...infoStyle}}>
            <p dangerouslySetInnerHTML={{__html: props.abstract}} />
          </animated.div>
        </div>
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