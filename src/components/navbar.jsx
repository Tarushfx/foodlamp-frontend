import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Collapse, Grid } from "@material-ui/core";
import NavLinkButton from "./button";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom:3
  },
  menuButton: {
    marginRight: theme.spacing(2),
  }
}));

export default function NavBar() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleNavBarClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={classes.root}>
        <AppBar position="static" className={classes.root}>
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleNavBarClick}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              Food Lamp
            </Typography>
          </Toolbar>
        </AppBar>
        <Collapse in={expanded}>
          <Grid container>
            <Grid item xs={2}>
              <NavLinkButton />
            </Grid>
            <Grid item xs={2}>
              <NavLinkButton />
            </Grid>
            <Grid item xs={2}>
              <NavLinkButton />
            </Grid>
          </Grid>
        </Collapse>
    </div>
  );
}
