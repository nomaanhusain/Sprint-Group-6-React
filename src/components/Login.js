import React, { Component } from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link, InputAdornment, IconButton } from '@material-ui/core'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import red from '@material-ui/core/colors/red'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LoginService from '../services/LoginService';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

//RegEx to validate if password is in correct format
const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#\$%\^\&*\)\(+=._-]{8,}$/;
class Login extends Component {
    constructor(props) {
        super(props)
        //All states for this component
        this.state = {
             username:'',
             password:'',
             error:'',
             errorText:'',
             errorState:false,
             //Error for Password field
             errorStatePass:false,
             //For toggle password hide/show
             hidden:true
        }
        this.handleUserChange=this.handleUserChange.bind(this);
        this.handlePassChange=this.handlePassChange.bind(this);
        this.handleLogClick=this.handleLogClick.bind(this);
        this.handleToggle=this.handleToggle.bind(this);
    }

    //For password hide/show toggle
    handleToggle=()=>{
        this.setState({hidden:!(this.state.hidden)})
    }
    handleUserChange=(event)=>{
        this.setState({username:event.target.value})
    }
    handlePassChange=(event)=>{
        //Testing against regex expression
        if(passwordValidator.test(event.target.value)){
            this.setState({errorText:'',
                            password: event.target.value,
                            errorStatePass:false})
        }else{
            this.setState({errorText:'Password should be 8 characters with an Uppercase and Lowercase character and a Number',
                            errorStatePass:true})
        }
    }
    handleLogClick = (u)=>{
        //By default all fields are emptied on each click, to prevent that
        u.preventDefault()

        //Creating object for backend
        let users ={
            username : this.state.username,
            password : this.state.password,
        }
        
        //Calling backend through service file
         LoginService.loginUser(users).then(res=>{
             console.log(res.data);
             //Login Success is message from backend on succesfull login
             if(res.data === "Login Success"){
            //route to user page
             this.props.history.push('/user');
             }
             //Catch any error and set state of error
         }).catch(error=>{
                this.setState({
                    error:error.response.data,
                    errorState:true
                });
                //Route back to login page
              this.props.history.push('/login');
          });
    }
    render() {
        
        //Style properties for different component
        const paperStyle={padding :20,height:'70vh',width:320, margin:"70px auto"}
        const avatarStyle={backgroundColor:red[400]}
        const buttonStyle={margin:'8px 0',background:'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'}
        const typeStyle={margin : '15px 0'}
        return (
            <div>
                <Grid>
                    {/* For Elevated look elivation prop is passed*/}
                    <Paper elevation={15} style={paperStyle}>
                        <Grid align='center'>
                            {/* Main Login Page Logo */}
                            <Avatar style={avatarStyle}><LocalHospitalIcon/></Avatar>
                            <h2>Sign In</h2>
                        </Grid>
                        <Grid style={typeStyle}>
                        {/*Field to enter username  */}
                        <TextField label='Username' 
                        placeholder='Enter username' 
                        //If this is true, textfield turns red
                        error={this.state.errorState} 
                        onChange={this.handleUserChange} 
                        fullWidth required/>
                        </Grid>
                        <Grid style={typeStyle}>
                        {/* Field to enter password, ternary operator used in type for toggle functionality */}
                        <TextField label='Password' placeholder='Enter password'
                         type={this.state.hidden? 'password' : 'text'}
                        //  If this is true, textfield turns red 
                         error={this.state.errorStatePass}
                         helperText={this.state.errorText}
                          onChange={this.handlePassChange}
                          InputProps={{ // This is where the toggle button is added.
                            endAdornment: (
                                // Put toggle button at end
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={this.handleToggle}
                                >
                                    {/* Ternary operator for toggling visibility icon */}
                                  {this.state.hidden ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                </IconButton>
                              </InputAdornment>
                            )
                          }}
                           fullWidth
                            required />
                           
                        </Grid>
                        {/* Check for remember me button */}
                        <FormControlLabel
                            control={
                            <Checkbox
                                color="primary"
                            />
                            }
                            label="Remember me"
                         />
                        <Button type='submit' 
                        color='primary' 
                        variant="contained" 
                        style={buttonStyle} 
                        onClick={this.handleLogClick} 
                        fullWidth>Sign in</Button>
                        {/* If error is found then this will be displayed, else will stay null */}
                        <Typography variant="caption" color="error">{this.state.error}</Typography>
                    </Paper>
                </Grid>
            </div>
        )
    }
}

export default Login
