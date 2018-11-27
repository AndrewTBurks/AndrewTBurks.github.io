import React from 'react';

import Grid from '@material-ui/core/Grid';
// import IconButton from '@material-ui/core/IconButton';
// import InfoIcon from '@material-ui/icons/Info';

import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from '@material-ui/core/ExpansionPanel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Badge from '@material-ui/core/Badge';

import Publication from '../components/pub';

const Publications = (props) => {
  let { pubData } = props;

  return (
    <div style={{maxHeight: "775px", overflowY: "scroll"}}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Badge color="primary" badgeContent={pubData.journal.length} className="badgeCentered">
            <Typography variant="title">Journal Articles</Typography>
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
            <Typography variant="title">Conference Papers</Typography>
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
            <Typography variant="title">Short Papers, Posters & Abstracts</Typography>
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
