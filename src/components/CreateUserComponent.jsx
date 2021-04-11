import React, { Component } from 'react'
import UsersServices from '../services/UsersServices'
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import {Button, Paper} from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save'
import Typography from '@material-ui/core/Typography';

//RegEx to validate if password is in correct format
const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#\$%\^\&*\)\(+=._-]{8,}$/;
class CreateUserComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             password:'',
             role:'',
             error:'',
             errorState:false,
             errorStatePass:false,
             errorText:''
        }
        this.changePasswordHandler=this.changePasswordHandler.bind(this);
        this.changeUsernameHandler=this.changeUsernameHandler.bind(this);
        this.changeRoleHandler=this.changeRoleHandler.bind(this);
        this.saveUser=this.saveUser.bind(this);
    }
    componentDidMount(){

        // step 4
            return
    }
    saveUser =(u)=>{
        u.preventDefault()
        let users ={
            username : this.state.username,
            password : this.state.password,
            role : this.state.role
        }
        if(!this.state.errorState && !this.state.errorStatePass){
            UsersServices.addUser(users).then(res =>{
                this.props.history.push('/users');
            }).catch(error=>{
                this.setState({
                    error:error.response.data,
                    errorState:true
                });
          });
        }
    }
cancel(){
    this.props.history.push('/users');
}
changeUsernameHandler= (event) => {
    this.setState({username: event.target.value});
}

// To validate password using regex

changePasswordHandler= (event) => {
    if(passwordValidator.test(event.target.value)){
        this.setState({errorText:'',
        password: event.target.value,
    errorStatePass:false})
    }else{
        this.setState({errorText:'Password should be 8 characters with an Uppercase and Lowercase character and a Number',
    errorStatePass:true})
    }
    
}
changeRoleHandler= (event) => {
    this.setState({role: event.target.value});
}
    
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                        
                             <div className = "card col-md-4 offset-md-3 offset-md-4">
                             <Paper elevation={10}>
                             <Typography variant="h4" align="center" gutterBottom>
                             Add User
                            </Typography>
                               
                                <div className = "card-body"> 
                                <form>

                                    <div className = "form-group">
                                    <TextField id="outlined-basic" label="Username"
                                     style={{marginBottom : 20}}
                                     fullWidth={true}
                                     autoFocus={true}
                                     required
                                     error={this.state.errorState}
                                      onChange={this.changeUsernameHandler} />
                                    </div>

                                    <div className = "form-group">
                                    <TextField id="outlined-pass" 
                                    label="Password"
                                    type="password" 
                                    style={{marginBottom:20}}
                                    fullWidth={true}
                                    required
                                    error={this.state.errorStatePass}
                                    helperText={this.state.errorText}
                                    onChange={this.changePasswordHandler} />
                                    </div>

                                    <div className = "form-group">
                                    <InputLabel id="demo-simple-select-label">Role</InputLabel>
                                    <Select
                                     labelId="demo-simple-select-label"
                                     id="demo-simple-select"
                                     value={this.state.role}
                                     required
                                     style={{width:200, height:35, marginBottom:20}}
                                     onChange={this.changeRoleHandler}>
                                        <MenuItem value='Admin'>Admin</MenuItem>
                                        <MenuItem value='Patient'>Patient</MenuItem>
                                    </Select>
                                    </div>
                                    <Button variant="contained"
                                        color="primary"
                                        size="medium"
                                        startIcon={<SaveIcon />} 
                                        onClick={this.saveUser}>Save</Button>
                                     <Button variant="contained" 
                                     color="secondary" 
                                     onClick={this.cancel.bind(this)} 
                                     style={{marginLeft: "10px"}}>Cancel</Button>
                                </form>
                                </div>
                                <Typography variant="caption" color="error">{this.state.error}</Typography>  
                                </Paper> 
                             </div>
                            
                        </div>
                    </div>

            </div>
        )
    }
}

export default CreateUserComponent
