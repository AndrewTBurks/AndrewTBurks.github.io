import React from 'react';

import { useSpring, animated } from 'react-spring';

import { IconContext } from 'react-icons';
import { FaAward, FaLaptopCode, FaScroll } from 'react-icons/fa';

import "./project.scss"

function ProjectCard({
  abstract,
  award,
  github,
  link,
  name,
  paper,
  team,
  Image,
  ...props }) {

  return <div className="project-card">
    {Image}
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