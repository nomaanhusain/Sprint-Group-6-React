import React, { useEffect,useState } from 'react'
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
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import DiagnosticTestService from '../services/DiagnosticTestService';



const gridStyle={margin:'270px auto'};

function DigtestContainer ({ digtestData, fetchDigtest }) {
    useEffect(() => {
      fetchDigtest()
    }, [])

    
    // Check if data is loading and display a loading circle while it is happening
    return digtestData.loading ? (
        <Grid style={gridStyle}>
          <CircularProgress color="secondary" />
          </Grid>
          // Check if there is any error and display on screen
        ) : digtestData.error ? (
            <Grid style={gridStyle}>
            <h2 className='text-danger'>{digtestData.error}</h2>
            </Grid> 
          ) : (
            <div className="container">
            
            <div className = "row">
               
             </div>
             <br></br>
             {/* Zoom effect for the table display */}
             <Zoom in={true} style={{transitionDelay:'500ms'}}>
               {/* Elevation for the table */}
             <Paper elevation={20}>
               {/* Building the table */}
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
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                         <TableBody> 
                            {digtestData &&
                                digtestData.digtests &&
                                // Map is used to destructure the list of all diagnostic tests
                                digtestData.digtests.map(
                                    digtest=>
                                    <TableRow key={digtest.testId}>
                                        <TableCell>{digtest.testId}</TableCell>
                                        <TableCell>{digtest.testName}</TableCell>
                                        <TableCell>{digtest.testPrice}</TableCell>
                                        <TableCell>{digtest.normalValue}</TableCell>
                                        <TableCell>{digtest.units}</TableCell>
                                          <TableCell>
                                              {/*Delete Button to delete the record*/}
                                                <Button
                                                    variant="contained"
                                                    color="secondary"
                                                    onClick={()=>DiagnosticTestService.deleteTest(digtest.testId)}
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
  // To connect redux with react
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(DigtestContainer)