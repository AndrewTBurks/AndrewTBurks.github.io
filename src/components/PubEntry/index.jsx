import React from "react";

import "./pub.scss";

import { FaAward, FaUsers, FaMapPin } from "react-icons/fa";
import { IconContext } from "react-icons";

function PubEntry({ award, teamBefore, teamAfter, name, journal, ...props }) {
  return (
    <div className="pub-entry" style={{ color: "var(--text)" }}>
      {(award && (
        <div className="pub-award">
          <FaAward color="var(--accent)" /> {award}
        </div>
      )) ||
        null}
      <div className="pub-title">{name}</div>
      <div className="pub-authors">
        <FaUsers color="var(--link)" /> {teamBefore}{" "}
        <div className="me">A. Burks</div>
        {teamAfter}
      </div>
      <div className="pub-venue">
        <FaMapPin color="var(--link)" /> {journal}
      </div>
    </div>
  );
}

export default PubEntry;
