import React from 'react';

import "../Typography.css";

// eslint-disable-next-line
const types = {
  default: {},
  heading: {},
  subheading: {},
  subsubheading:{},

  link: {},

  caption: {},
  subcaption: {},

  special: {},
  award: {},
};

export default function Typography({type = "", style = {}, ...props}) {
  return <div className={`Typography ${type} ${props.className ? props.className : ""}`} style={style}>
    {props.children}
  </div>;
}