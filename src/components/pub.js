import React from 'react';

import { Grid } from 'material-ui';

import Typography from 'material-ui/Typography';

const Publication = (props) => {
  let { pub } = props;

  return (
    <Grid key={pub.name} item xs={12} style={{ padding:"5px 0" }}>
      <Typography variant="body1">
        {pub.teamBefore} <strong>A. Burks</strong> {pub.teamAfter}, <strong>{pub.name}</strong>, {pub.journal}
      </Typography>

      {
        pub.award === "" ? "" :
        <Typography variant="caption" color="secondary">
          {pub.award}
        </Typography>
      }
    </Grid>
  );
}
 
export default Publication;