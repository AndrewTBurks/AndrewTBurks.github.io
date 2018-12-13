import React from "react";

import Typography from "../components/Typography";
import PubSection from '../components/PubSection';

export default function Publications(props) {
  let {
    conference,
    journal,
    poster
  } = props.pubs;

  return <>
      <div className="panel">
        <div className="panel-section text">
          <PubSection title="Conference Papers" pubs={conference} />
          <PubSection title="Journal Articles" pubs={journal} />
          <PubSection title="Short Papers, Posters & Abstracts" pubs={poster} />
        </div>
      </div>
    </>;
}
