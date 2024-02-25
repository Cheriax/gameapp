import React from "react";
import Typography from "@mui/material/Typography";
import Carousel from "../components/Carousel";
import { GameGroupSidebar } from "../components/GameGroupSideBar";
import { Box, Grid, useTheme } from "@mui/material";
import { NewGameGroup } from "../components/NewGroupButton";

const HomePage = () => {
  const theme = useTheme();

  const carouselItems = [
    { title: "Item 1", description: "Description for item 1" },
    { title: "Item 2", description: "Description for item 2" },
  ];

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <Box mt={2} ml={2}>
            <Typography variant="h4" color={theme.palette.text.primary}>
              New Releases
            </Typography>
            <Carousel items={carouselItems} />
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box mt={2}>
            <NewGameGroup />
            <Box mt={2}>
              <GameGroupSidebar />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
