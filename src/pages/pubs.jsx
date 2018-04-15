import React from 'react';

// import { Grid } from 'material-ui';
import IconButton from 'material-ui/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Publications = (props) => {
  let { pubData } = props;

  return (
    <div style={{maxHeight: "800px"}}>
      {pubData.map(pub => (
          <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Expansion Panel 1</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </div>
  );
}
 
export default Publications;
