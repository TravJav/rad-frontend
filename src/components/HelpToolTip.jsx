import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import QuestionMarkIcon from '@mui/icons-material/HelpOutline';

const HelpIconButton = () => {
  return (
    <Tooltip title="Please contact your Admin">
      <IconButton>
        <QuestionMarkIcon />
      </IconButton>
    </Tooltip>
  );
};

export default HelpIconButton;
