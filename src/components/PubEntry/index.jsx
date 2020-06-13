import React from "react";

import "./pub.scss";

import { FaAward, FaUsers, FaMapPin } from "react-icons/fa";
import { IconContext } from "react-icons";

function PubEntry({ award, teamBefore, teamAfter, name, journal, ...props }) {
  return (
    <div className="pub-entry" style={{ color: "var(--text-sec)" }}>
      {(award && (
        <div className="pub-award">
          <FaAward color="var(--sec)" /> {award}
        </div>
      )) ||
        null}
      <div className="pub-title">{name}</div>
      <div className="pub-authors">
        <FaUsers color="var(--sec)" /> {teamBefore}{" "}
        <div className="me">A. Burks</div>
        {teamAfter}
      </div>
      <div className="pub-venue">
        <FaMapPin color="var(--sec)" /> {journal}
      </div>
    </div>
  );
}

export default PubEntry;
