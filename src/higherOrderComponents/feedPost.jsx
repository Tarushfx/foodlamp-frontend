import React from 'react';
import { Grid } from "@material-ui/core";
import FeedCard from "./../components/feedCard";

const FeedPost = (props) => {
    return ( 
    <Grid container xs={12}>
        <Grid xs={3}/>
        <Grid item xs={6}>
          <FeedCard proptext={props.proptext} />
        </Grid>
        <Grid xs={3}/>
      </Grid> 
      );
}
 
export default FeedPost;