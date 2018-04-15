import React from 'react';

// import { Grid } from 'material-ui';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Subheader from 'material-ui/List/ListSubheader';

import IconButton from 'material-ui/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const Projects = (props) => {
  let { projectData } = props;

  return (
    <GridList spacing={16}>
      <GridListTile key="Subheader" cols={2} style={{height: 'auto'}}>
        <Subheader component="div">Publications</Subheader>
      </GridListTile>
    </GridList>
  );
}
 
export default Projects;
