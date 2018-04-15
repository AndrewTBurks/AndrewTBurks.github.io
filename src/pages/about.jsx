import React from 'react';

import { Grid } from 'material-ui';
// import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Subheader from 'material-ui/List/ListSubheader';

import IconButton from 'material-ui/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Typography from 'material-ui/Typography';

const About = (props) => {
  let { projectData } = props;

  return (
    <Grid container spacing={16}>
      <Grid item xs={12}>
        <Subheader component="div">
          About Me
        </Subheader>
      </Grid>
      <Grid item xs={12} sm={6}>
        <img src={process.env.PUBLIC_URL + "/img/Profile.jpg"} alt="Andrew Burks" style={{width: "100%"}}/>
      </Grid>
      <Grid item xs={12} sm={6}>
      <Typography variant="title" gutterBottom>
        My name is Andrew Burks.
      </Typography>
      <Typography variant="subheading" gutterBottom>
        I am a Ph.D. Computer Science student at the University of Illinois at Chicago. I am currently a Research Assistant at the
        Electronic Visualization Laboratory at UIC. I have experience working on research projects related to data
        visualization and the development of collaborative software for large/tiled displays.
      </Typography>
      <Typography variant="subheading" gutterBottom>
        My current research interests are Collaborative Visualization and Data Exploration.
      </Typography>
      </Grid>
    </Grid>
  );
}
 
export default About;
