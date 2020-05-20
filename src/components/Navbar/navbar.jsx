import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';

import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: '#fff',
    fontWeight: '1000',
    textDecoration: 'none'
  }
}));

function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          
          <Button color="inherit" className="user-btn">
          <Link to="/users" className={classes.link}>Users
          </Link>
          </Button>
          
          <Button color="inherit">
          <Link to="/"  className={classes.link}>
          Posts
          </Link>
          </Button>

          <Button color="inherit">
          <Link to="/user/albums" className={classes.link}>
          Albums
          </Link>
          </Button>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}



export default Navbar