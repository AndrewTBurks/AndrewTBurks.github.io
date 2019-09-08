import React, { useState } from 'react';

import { useSpring, animated } from 'react-spring';

import { IconContext } from 'react-icons';
import { FaAward, FaLaptopCode, FaScroll } from 'react-icons/fa';

import { useInView } from 'react-intersection-observer';

import "./project.scss"

function ProjectCard({
  abstract,
  award,
  github,
  link,
  name,
  shortname,
  paper,
  team,
  Image,
  ...props }) {
  let [ref, inView] = useInView({threshold: 1});

  let [hovering, setHovering] = useState(false);

  let overlayStyle = useSpring({
    bottom: hovering ? "0%" : "75%"
  });

  return <div ref={ref}
    className="project-card" 
    onMouseOver={() => setHovering(true)}
    onMouseLeave={() => setHovering(false)}
  >
    {Image}
    <animated.div className="overlay" style={{...overlayStyle}}>
      <h3 style={{marginLeft: award && "50px" || undefined, fontWeight: 700}}>
        {shortname}
      </h3>
    </animated.div>
    {award && 
      <div className="award">
        <IconContext.Provider value={{style: {fontSize: "1.5em"}}}>
          <FaAward color="var(--sec-d)"/>
        </IconContext.Provider>
      </div>
    || null}
  </div>;
}

export default ProjectCard;