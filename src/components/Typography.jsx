import React from 'react';

import "../Typography.css";

const types = {
  default: {},
  heading: {},
  subheading: {},
  subsubheading:{},

  link: {},

  caption: {},
  subcaption: {},

  special: {}
};

export default function Typography({type = "", style = {}, ...props}) {
  return <div className={`Typography ${type}`} style={style}>
    {props.children}
  </div>;
}