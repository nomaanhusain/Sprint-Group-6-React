import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'
import {Button, Grid, Grow, Zoom} from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save'
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import UserListComponent from './UserListComponent';
import UsersServices from '../services/UsersServices'
const gridStyle={margin:'270px auto'};
function UsersContainer ({ userData, fetchUsers }) {
    useEffect(() => {
      fetchUsers()
    }, [])
    
    return userData.loading ? (
      <Grid style={gridStyle}>
        <CircularProgress color="secondary" />
        </Grid>
      ) : userData.error ? (
        <Grid style={gridStyle}>
        <h2 className='text-danger'>{userData.error}</h2>
        </Grid> 
      ) : (
        <div className="container">
        {/* <Typography variant="h3" component="h2" align="center" gutterBottom> 
        User List
        </Typography>*/}
        <div className = "row">
            {/* <Button variant="contained" 
                    color="secondary"
                    style={{width:200, height:35}}
                 startIcon={<SaveIcon />} onClick={this.addUser}> 
                 Add Employee
                 </Button>*/}
         </div>
         <br></br>
         {/* <div className = "row"> */}
         <Zoom in={true} style={{transitionDelay:'500ms'}}>
         <Paper elevation={20}>
         <TableContainer>
                <Table aria-label="simple table">
                <caption>Table of all the users in the system</caption>
                    <TableHead>
                        <TableRow>
                            <TableCell> User Id</TableCell>
                            <TableCell> Username</TableCell>
                            <TableCell> Password</TableCell>
                            <TableCell>Role</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userData &&
                            userData.users &&
                            userData.users.map(
                                user=>
                                <TableRow key={user.usersId}>
                                    <TableCell>{user.usersId}</TableCell>
                                    <TableCell>{user.username}</TableCell>
                                    <TableCell>{user.password}</TableCell>
                                    <TableCell>{user.role}</TableCell>
                                      <TableCell>  
                                             {/* <button style={{marginLeft: "10px"}} onClick={()=>this.deleteUser(user.usersId)} className="btn btn-danger">Delete </button>   */}
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                onClick={()=>UsersServices.deleteUser(user.usersId)}
                                                href="http://localhost:3000/user"
                                                startIcon={<DeleteIcon />}
                                                >
                                                    Delete
                                            </Button>
                                            </TableCell>
                                </TableRow>
                            )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            </Paper>
            </Zoom>
                {/* </div> */}
    </div>
      )
}

const mapStateToProps = state => {
    return {
      userData: state.users
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      fetchUsers: () => dispatch(fetchUsers())
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(UsersContainer)