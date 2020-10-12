import React, { Component } from "react";
import CardHeader from "@material-ui/core/CardHeader";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import { Card, CardActions, CardContent, Typography } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { CardMedia } from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteIcon from "@material-ui/icons/Favorite";

const FeedCard = (props) => {
  return (
    <Card>
      <CardHeader
        Avatar={<Avatar aria-label="recipe">T</Avatar>}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={`Hello ${props.proptext}`}
        subheader="September 14, 2016"
      />
      <CardMedia
        image="https://picsum.photos/50"
        title="Paella dish"
        // className={classes.img}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like. {props.text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default FeedCard;
