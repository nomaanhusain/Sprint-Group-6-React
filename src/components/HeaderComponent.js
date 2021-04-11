import React,{Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import LoginService from '../services/LoginService'
import DiagTestComponent from './DiagTestComponent';
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
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleLogoutClick = () => {
    LoginService.logoutUser()
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    // this.props.history.push('/test');
     setAnchorEl(null);
  };

  const handleTest = () => {
    this.props.location.push('/test')
    // setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
        
      <AppBar position="static" color='primary'>
        <Toolbar>
        <div>
          <IconButton edge="start" className={classes.menuButton} onClick={handleMenu} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          
          <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
               
                <MenuItem onClick={handleClose}><Button href="http://localhost:3000/user">User</Button></MenuItem>
                <MenuItem onClick={handleClose}><Button href="http://localhost:3000/test">Diagnostic Test</Button></MenuItem>
                <MenuItem onClick={handleClose}><Button href="http://localhost:3000/testresult">Test Result</Button></MenuItem>
                <MenuItem onClick={handleClose}><Button href="http://localhost:3000/centers">Test Center</Button></MenuItem>

                <MenuItem onClick={handleClose}><Button href="http://localhost:3000/addAppointment">Add Appointment</Button></MenuItem>
                <MenuItem onClick={handleClose}><Button href="http://localhost:3000/getAppointmentForm">View Appointment list</Button></MenuItem>
                <MenuItem onClick={handleClose}><Button href="http://localhost:3000/viewPatientForm">View Patient Appointment</Button></MenuItem>
                <MenuItem onClick={handleClose}><Button href="http://localhost:3000/viewAppointmentFormById">View Appointment By Id</Button></MenuItem>
              </Menu>
              </div>
          <Typography variant="h6" className={classes.title}>
            Health Care Appointment
          </Typography>
          <Button color="inherit" onClick={handleLogoutClick} href="http://localhost:3000/login">Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}