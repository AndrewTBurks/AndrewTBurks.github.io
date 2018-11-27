import React from 'react';

import Typography from '../components/Typography';
import ProjectCard from '../components/ProjectCard';

export default function Projects(props) {
  let { projects } = props;

  return (
    <>
      {projects.map(p => (
        <ProjectCard key={p.name} info={p} />
      ))}
    </>
  );
}