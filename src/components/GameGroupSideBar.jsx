import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List, Typography, ListItem } from '@mui/material';

export const GameGroupSidebar = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        
        //const response = await axios.get('https://gameapp-server.documents.azure.com:443/;AccountKey=8i7g5dfSZYAesTiPDkdWjsxG8LpdzN5hzoYt95dSvEMvxT9nqQgpMYIdUwUUclzZPm4PX4H5MhsXACDbjpXpSw/groups');
        //setGroups(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="sidebar">
      <Typography color='white'>Joined Groups</Typography>
      <List>
        {groups.map((group) => (
          <ListItem key={group.id}>{group.name}</ListItem>
        ))}
      </List>
    </div>
  );
};

