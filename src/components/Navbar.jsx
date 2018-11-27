import React from 'react';
import { Link } from '@reach/router';

import Typography from './Typography';

export default function Navbar({title = "Navbar", links = [], location, ...props}) {

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
      <Link className= {'link' + (to === location.pathname ? ' selected' : '')} to={to}>
        <Typography>
          {name}
        </Typography>
      </Link>
    )
  }
};
