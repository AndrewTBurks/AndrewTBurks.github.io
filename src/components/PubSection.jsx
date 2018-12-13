import React from 'react';
import Typography from './Typography'

export default function PubSection(props) {
  return <div>
    <Typography type="heading" style={{fontWeight: "normal", fontSize: "24px"}}>
      {props.title}
    </Typography>
    {
      props.pubs.map(p => (
        <div key={p.name}>
          <Typography type="publication">
            {p.teamBefore}<strong>A. Burks</strong>{p.teamAfter}. {p.name}. {p.journal}
          </Typography>
          <Typography type="award">
            {p.award}
          </Typography>
        </div>
      ))
    }
  </div>
}