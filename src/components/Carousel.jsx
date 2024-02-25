import React, { useState } from 'react';
import { Paper, Button, Box, Typography } from '@mui/material';

const CarouselItem = ({ item }) => (
  <Paper
    style={{
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <Box textAlign={'center'} justifyContent={'center'} mt={1}>
      <img src="your_image_url_here" alt="Item Image" style={{ maxWidth: '100%', maxHeight: '100%' }} />
    </Box>
    <Box ml={2}>
      <Typography variant="h6" mt={2}>{item.title}</Typography>
      <Typography variant="body1" mb={1}>{item.description}</Typography>
    </Box>
  </Paper>
);


const Carousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  return (
    <Box display="flex" flexDirection="column" mr={2}>
      <Box> 
        <CarouselItem item={items[activeIndex]} />
      </Box>

      <Box display="flex" justifyContent="center" alignItems="center" mt={1}>
        <Button onClick={handlePrev} variant="contained" color="primary" sx={{ mr: 2 }}>Prev</Button>
        <Button onClick={handleNext} variant="contained" color="primary" sx={{ mr: 2 }}>Next</Button>
      </Box>
    </Box>
  );
};

export default Carousel;
