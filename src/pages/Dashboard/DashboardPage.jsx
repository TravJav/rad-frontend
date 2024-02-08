import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
import Drawer from '../../components/Drawer';
import ChatDialog from '../../components/ChatDialog';
import Loading from '../../components/Loading';

const BASE_URL = 'http://127.0.0.1:5000';

class DashboardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      userQuery: '',
      chatGptHistory: []
    };
  }

  sendQuestion = () => {
    this.setState({ isLoading: true });
    const url = BASE_URL + '/process-command';
    const payload = { "query": this.state.userQuery };
    this.setState({ userQuery: '' });
    axios.post(url, payload)
      .then((response) => {
        const { chatgpt_response, timestamp, query } = response.data;
        this.setState(prevState => ({
          chatGptHistory: [...prevState.chatGptHistory, { response: chatgpt_response, timestamp, query}]
        }));
      })
      .catch((error) => {
        this.props.callback({ type: 'success', message: 'Received an error from there server, please contact support' });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  handleInputChange = (event) => {
    this.setState({ userQuery: event.target.value });
  };

  render() {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <Drawer/>
        <ChatDialog chatHistory={this.state.chatGptHistory}></ChatDialog>
        {this.state.isLoading && <Loading style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 9999 }} />}

        <Box
          component="form"
          sx={{
            display: 'flex',
            alignItems: 'center',
            '& .MuiTextField-root': { m: 1, width: 'calc(100% - 48px)' },
          }}
          noValidate
          autoComplete="off"
          style={{
            background: 'rgba(255, 255, 255, 0.8)',
            padding: '10px',
            borderTop: '1px solid #ccc',
            textAlign: 'center'
          }}
        >
          <TextField
            id="standard-textarea"
            label="Structure your question here"
            placeholder="Type Here"
            multiline
            value={this.state.userQuery}
            onChange={this.handleInputChange}
            variant="standard"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={this.sendQuestion}
            sx={{ marginLeft: '8px' }}
          >
            <SendIcon/>
          </Button>
        </Box>
      </div>
    );
  }
}

export default DashboardScreen;
