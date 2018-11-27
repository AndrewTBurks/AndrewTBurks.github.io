import React from 'react';

import Grid from '@material-ui/core/Grid';
// import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Subheader from '@material-ui/core/ListSubheader';

// import IconButton from '@material-ui/core/IconButton';
// import InfoIcon from '@material-ui/icons/Info';
import Typography from '@material-ui/core/Typography';

const About = (props) => {
  // let { projectData } = props;

  return (
    <Grid container spacing={16}
      alignItems="center">
      <Grid item xs={12}>
        <Subheader component="div">
        </Subheader>
      </Grid>
      <Grid item xs={12} style={{padding: "10px"}}>
        <Typography variant="title" gutterBottom color="primary">
          My Work
        </Typography>
        <Typography variant="body1" gutterBottom>
          Through my work, I have gained hands-on experience in two main areas:
          <strong> Data Visualization and Visual Analytics, and Human Computer Interaction</strong>. The majority of my work goes
          towards harnessing the latest in web-based technologies to create an accessible experience for any user.
        </Typography>
        <Typography variant="body1" gutterBottom>
          In the field of Data Visualization and Visual Analytics, I have experience working with diverse data sources as well as familiarity
          with cross-disciplinary collaboration. In past projects, I have tackled problems in the fields of:
          <ul>
            <li>
              <strong>Computational Fluid Dynamics</strong> (Viscous Fingers)
            </li>
            <li>
              <strong>Computational Biology</strong> (Protein-Protein Interactions & Stochastic Gene Regulatory Networks)
            </li>
            <li>
              <strong>Precison Medicine</strong>
            </li>
            <li>
              <strong>Urban Policy</strong>
            </li>
            <li>
              and <strong>Social Service Equity</strong>
            </li>
          </ul>
        </Typography>
        <Typography variant="body1" gutterBottom>
          Aside from Data Visualization, I was funded to work on the $5M NSF grant for
          <strong> SAGE2: Scalable Amplified Group Environment</strong>. Working on SAGE2, I developed a "Partition" system which allows
          users to have more options to organize their content. Additionally, I worked on maintaning and improving core
          functionality of the software. Through this work, I learned about the interplay between client(s) and server
          on cross-client applications for large-displays.
        </Typography>
        <Typography variant="title" gutterBottom color="primary">
          Honors and Awards
        </Typography>
      </Grid>
      <Grid item xs={1} style={{textAlign: "center"}}>
        <Typography variant="body2">
          2017
        </Typography>
      </Grid>
      <Grid item xs={11}>
        <Typography variant="body1">
          <strong>Honorable Mention - Clarity in Visual Communication</strong>, IEEE VIS 2017 VAST Challenge Mini-Challenge 2.
        </Typography>
        <Typography variant="caption">
          <i>Phoenix, AZ.</i>
        </Typography>
        <Typography variant="body1">
          <strong>Honorable Mention - Good Interactive Image Explorer</strong>, IEEE VIS 2017 VAST Challenge Mini-Challenge 3.
        </Typography>
        <Typography variant="caption">
          <i>Phoenix, AZ.</i>
        </Typography>
      </Grid>
      <Grid item xs={1} style={{textAlign: "center"}}>
        <Typography variant="body2">
          2016
        </Typography>
      </Grid>
      <Grid item xs={11}>
        <Typography variant="body1">
          <strong>Honorable Mention</strong>, IEEE VIS Conference: VGTC VPG Data Visualization Contest.
        </Typography>
        <Typography variant="caption">
          <i>Baltimore, MD.</i>
        </Typography>
      </Grid>
    </Grid>
  );
}
 
export default About;
