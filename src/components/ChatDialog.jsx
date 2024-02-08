import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MedicalIcon from '@mui/icons-material/MedicalServices';
import backgroundImage from '../assets/body_map.jpg';

const ChatDialog = (props) => {
  const { chatHistory } = props;

  return (
    <Grid container component={Paper} style={{
      width: '100%',
      height: '80vh',
      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center top',
      padding: '10px',
      overflowY: 'auto',
    }}>
      <Grid item xs={12}>
        <List style={{ overflow: 'hidden' }}>
          {chatHistory.map((message, index) => (
            <React.Fragment key={index}>
              <ListItem style={{
                textAlign: 'right',
                backgroundColor: '#007AFF',
                color: '#fff',
                borderRadius: '15px',
                padding: '10px',
                marginBottom: '8px',
                maxWidth: '70%',
                wordWrap: 'break-word',
                position: 'relative',
              }}>
                <ListItemText
                  primary={message.query}
                  secondary={new Date(message.timestamp).toLocaleDateString()}
                />
              </ListItem>
              <ListItem style={{
                textAlign: 'left',
                backgroundColor: '#E4E4EB',
                color: '#000',
                borderRadius: '15px',
                padding: '10px',
                marginBottom: '8px',
                maxWidth: '70%',
                wordWrap: 'break-word',
              }}>
                <ListItemIcon style={{ position: 'absolute', top: '-5px', left: '-5px', padding: '5px' }}>
                  <MedicalIcon style={{ fontSize: '20px' }} />
                </ListItemIcon>
                <ListItemText
                  primary={message.response}
                  secondary={new Date(message.timestamp).toLocaleDateString()}
                />
              </ListItem>
            </React.Fragment>
          ))}
        </List>
        <Divider />
      </Grid>
    </Grid>
  );
};

export default ChatDialog;
