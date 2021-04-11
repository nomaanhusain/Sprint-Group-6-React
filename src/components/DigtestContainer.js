import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {fetchDigtest} from '../redux'
import {Button, Grid, Grow, Tab, Typography, Zoom} from '@material-ui/core'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import DiagnosticTestService from '../services/DiagnosticTestService';
const gridStyle={margin:'270px auto'};

function DigtestContainer ({ digtestData, fetchDigtest }) {
    useEffect(() => {
      fetchDigtest()
    }, [])

    return digtestData.loading ? (
        <Grid style={gridStyle}>
          <CircularProgress color="secondary" />
          </Grid>
        ) : digtestData.error ? (
            <Grid style={gridStyle}>
            <h2 className='text-danger'>{digtestData.error}</h2>
            </Grid> 
          ) : (
            <div className="container">
            
            <div className = "row">
               
             </div>
             <br></br>
             
             <Zoom in={true} style={{transitionDelay:'500ms'}}>
             <Paper elevation={20}>
             <TableContainer>
                    <Table aria-label="simple table">
                    <caption>Table of all the Diagnostic Test in the system</caption>
                        <TableHead>
                            <TableRow>
                                <TableCell> Test Id</TableCell>
                                <TableCell> Test Name</TableCell>
                                <TableCell> Test Price</TableCell>
                                <TableCell>Normal Value</TableCell>
                                <TableCell>Unit</TableCell>
                                <TableCell>Centers Associated</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                         <TableBody> 
                            {digtestData &&
                                digtestData.digtests &&
                                digtestData.digtests.map(
                                    digtest=>
                                    <TableRow key={digtest.testId}>
                                        <TableCell>{digtest.testId}</TableCell>
                                        <TableCell>{digtest.testName}</TableCell>
                                        <TableCell>{digtest.testPrice}</TableCell>
                                        <TableCell>{digtest.normalValue}</TableCell>
                                        <TableCell>{digtest.units}</TableCell>
                                        <TableCell>{digtest.diagnosticCenter.map(center=><Typography>{center.name}</Typography>)}</TableCell>
                                          <TableCell>  
                                                 {/* <button style={{marginLeft: "10px"}} onClick={()=>this.deleteUser(user.usersId)} className="btn btn-danger">Delete </button>   */}
                                                <Button
                                                    variant="contained"
                                                    color="secondary"
                                                    onClick={DiagnosticTestService.deleteTest(digtest.testId)}
                                                    href="http://localhost:3000/test"
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
                   
        </div>
          )
}

const mapStateToProps = state => {
    return {
        digtestData: state.digtests
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      fetchDigtest: () => dispatch(fetchDigtest())
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(DigtestContainer)