import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const NewGameGroup = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/newgamegroup');
  };

  return (
    <Button variant="contained" onClick={handleClick}>
      Create New Game Group
    </Button>
  );
};

