import React from 'react';

import { Grid } from 'material-ui';
import IconButton from 'material-ui/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Badge from 'material-ui/Badge';

import Publication from '../components/pub';

const Publications = (props) => {
  let { pubData } = props;

  return (
    <div style={{maxHeight: "775px", overflowY: "scroll"}}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Badge color="primary" badgeContent={pubData.journal.length} className="badgeCentered">
            <Typography variant="title">Journal Publications</Typography>
          </Badge>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container>
          {
            pubData.journal.map(pub => (
              <Publication key={pub.name} pub={pub} />
            ))
          }
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Badge color="primary" badgeContent={pubData.conference.length} className="badgeCentered">
            <Typography variant="title">Peer-reviewed Conference Papers</Typography>
          </Badge>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container>
          {
            pubData.conference.map(pub => (
              <Publication key={pub.name} pub={pub} />
            ))
          }
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Badge color="primary" badgeContent={pubData.poster.length} className="badgeCentered">
            <Typography variant="title">Poster/Abstract Presentations</Typography>
          </Badge>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container>
          {
            pubData.poster.map(pub => (
              <Publication key={pub.name} pub={pub} />
            ))
          }
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
 
export default Publications;
