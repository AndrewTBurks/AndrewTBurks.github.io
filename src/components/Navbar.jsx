import React from 'react';

import Typography from './Typography';

export default function Navbar({title = "Navbar", links = [], location="home", ...props}) {
  let {navigate} = props;

  return (
    <div className="navbar">
      <div className="title">
        {title}
      </div>
      {links.map(l => (
        <NavLink key={l.name} {...l}/>
      ))}
    </div>
  )

  function NavLink({name, to, ...props}) {
    return (
      <div className= {'link' + (to === location ? ' selected' : '')}
        onClick={() => navigate(to)}>
        <Typography>
          {name}
        </Typography>
      </div>
    )
  }
};
