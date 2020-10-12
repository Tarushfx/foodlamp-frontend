import React, { Component } from "react";
import { Grid, Box } from "@material-ui/core";
import homeTop from "./../styles/homeTop";
import homeBottom from "./../styles/homeBottom";

class Home extends Component {
  state = {};
  render() {
    return (
      <Grid container xs={12} direction="column">
        <Grid item xs={12} style={homeTop}>
          <Box height="450px">
            <img src="https://picsum.photos/450" alt="x" />
          </Box>
        </Grid>
        <Grid item container xs={12} style={homeBottom}>
          <Grid item xs={6}>
            box 1
          </Grid>
          <Grid item xs={6}>
            box 2
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Home;
