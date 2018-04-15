import React from 'react';

// import { Grid } from 'material-ui';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Subheader from 'material-ui/List/ListSubheader';

import IconButton from 'material-ui/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const Projects = (props) => {
  let { projectData } = props;

  return (
    <GridList spacing={16} style={{maxHeight: "800px"}}>
      <GridListTile key="Subheader" cols={2} style={{height: 'auto'}}>
        <Subheader component="div"></Subheader>
      </GridListTile>

      {projectData.map(project => (
          <GridListTile key={project.image} style={{height: "250px"}}>
            <img src={process.env.PUBLIC_URL + "/img/" + project.image} alt={project.name} />
            <GridListTileBar
              style={{background: "rgba(0,0,0,0.5)"}}
              title={<span style={{fontWeight: "bold"}}>{project.name}</span>}
              subtitle={<span>by: {project.team}</span>}
              actionIcon={
                <IconButton style={{color: 'rgba(255, 255, 255, 0.54)'}} onClick={() => props.showProjectInfo(project)}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
      ))}
    </GridList>
  );
}
 
export default Projects;
