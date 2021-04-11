import React, { Component } from 'react'
import TestResultService from '../services/TestResultService'
import {Button, Grid, Grow, Zoom,IconButton} from '@material-ui/core'
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
import UpdateIcon from '@material-ui/icons/Update';
import ButtonAppBar from './HeaderComponent';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import { ThreeSixty } from '@material-ui/icons';
const gridStyle={margin:'250px auto'};

class ListTestResultComponent extends Component {
    constructor(props) {
        super(props)
        // States of this component
        this.state = {
             TestResults:[],
             errorExists:false,
             noError:true,
             errorMessage:'',
             openDialog:false,
             testResultId:0,
             testReading:0,
             condition:''
        }
        this.addTestResult=this.addTestResult.bind(this);
        this.updateTestResult=this.updateTestResult.bind(this);
        this.changeConditionHandler=this.changeConditionHandler.bind(this);
        this.changeTestReadingHandler=this.changeTestReadingHandler.bind(this);
        this.handleCloseDialog=this.handleCloseDialog.bind(this);
    }
    // For update dialog box
    handleOpenDialog(testId){
        // Determines if dialog box will be displayed or not
        this.setState({openDialog:true,
        // TestResult id is passed automatically, tells which record has to be updated 
        testResultId:testId});
    }
    // For update dialog box
    handleCloseDialog(){
        // Determines if dialog box will be displayed or not
        this.setState({openDialog:false});
    }
    // Lifecycle method, automatically called after mounting of component
    componentDidMount(){
        TestResultService.getAllTestResult().then(res=>{
            this.setState({TestResults: res.data });
        }).catch(error=>{
            this.setState({
                noError:false,
                errorMessage:'Network Error',
            })
        })
    }
    // Delete a test result from record
    deleteTestResult(testId){
        TestResultService.deleteTestResult(testId).then( res => {
            this.props.history.push('/testresult');
        });
    }
    // Route to add page
    addTestResult(){
        this.props.history.push('/add-testresult');
    }
    // for updating
    updateTestResult=(t)=>{
        t.preventDefault();
        // Object for backend
        let testres = {
            testResultId:this.state.testResultId,
            testReading:this.state.testReading,
            condition:this.state.condition
        }
        // This is required, so if default, raise error
        if(this.state.testReading===0){
            this.setState({errorExists:true},()=>{console.log(this.state.errorExists)});
    }else{
        TestResultService.updateTestResult(testres).then(res=>{
            this.props.history.push('/testresult')
        });
        this.handleCloseDialog();
        window.location.reload();
    }

    }
    // TextField onchange handler
    changeConditionHandler =(event)=>{
        this.setState({condition:event.target.value});
    }
    // TextField onchange handler
    changeTestReadingHandler=(event)=>{
        this.setState({testReading:event.target.value})
    }

    render() {
        return (
            <>
                <ButtonAppBar/>
               <Typography variant="h4" component="h2" align="center" style={{padding:'20px'}}>
                Test Results
                </Typography>
                <div className="container">
                {/* Add Button */}
             <Button variant="contained" 
                    color="primary"
                    style={{width:200, height:35 ,margin:"25px"}}
                 startIcon={<AddIcon />} onClick={this.addTestResult}> 
                 Add Test Result
                 </Button>
        
         <br></br>
          <div className = "row">
              {/* Zoom effect on table load */}
         <Zoom in={true} style={{transitionDelay:'500ms'}}>
             {/* Elevated look for table */}
         <Paper elevation={20}>
        {this.state.noError &&
         <TableContainer>
                <Table aria-label="simple table">
                <caption>Table of all the Test Result in the system</caption>
                    <TableHead>
                        <TableRow>
                            <TableCell> Test Result Id</TableCell>
                            <TableCell> Test Reading</TableCell>
                            <TableCell> Condition</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {   this.state.TestResults.map(
                                testresult=>
                                <TableRow key={testresult.testResultId}>
                                    <TableCell>{testresult.testResultId}</TableCell>
                                    <TableCell>{testresult.testReading}</TableCell>
                                    <TableCell>{testresult.condition}</TableCell>
                                    {/* <TableCell>{user.role}</TableCell> */}
                                      <TableCell>  
                                        {/*Tooltip is used to add tips on hover over the button  */}
                                      <Tooltip title="Delete Test Result">
                                            <IconButton
                                                color="secondary"
                                                onClick={()=>this.deleteTestResult(testresult.testResultId)}
                                                href="http://localhost:3000/testresult"
                                                >
                                                    <DeleteIcon />
                                            </IconButton>
                                            </Tooltip>
                                            <Tooltip title="Update Test Result">
                                            <IconButton
                                                color="primary"
                                                onClick={()=>this.handleOpenDialog(testresult.testResultId)}
                                                >
                                                    <UpdateIcon />
                                            </IconButton>
                                            </Tooltip>
                                            {/* For update dialog box */}
                                            <Dialog open={this.state.openDialog} onClose={this.handleCloseDialog} aria-labelledby="form-dialog-title">
                                            <DialogTitle id="form-dialog-title">Update Test Result</DialogTitle>
                                            <DialogContent>
                                                {/* Sub-Heading for dialog box */}
                                                <DialogContentText>
                                                    Update the current Test Result Data
                                                </DialogContentText>
                                                {/* Text Field for dialog box */}
                                                <TextField id="outlined-basic" label="Test Reading"
                                                    style={{marginBottom : 20}}
                                                    fullWidth={true}
                                                    autoFocus={true}
                                                    error={this.state.errorExists}
                                                    type="number"
                                                    onChange={this.changeTestReadingHandler} />
                                    

                                                {/* Drop down for dialog box */}
                                                <InputLabel id="demo-simple-select-label">Contition</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={this.state.conditon}
                                                        required
                                                        style={{width:200, height:35, marginBottom:20}}
                                                        onChange={this.changeConditionHandler}>
                                                            <MenuItem value='Normal'>Normal</MenuItem>
                                                            <MenuItem value='Needs Attention'>Needs Attention</MenuItem>
                                                            <MenuItem value='Critical'>Critical</MenuItem>
                                                    </Select>
                                            </DialogContent>
                                            {/* Actions for dialog box */}
                                            <DialogActions>
                                                <Button onClick={this.handleCloseDialog} color="secondary">
                                                    Cancel
                                                </Button>
                                                <Button onClick={this.updateTestResult} color="primary">
                                                    Update
                                                </Button>
                                            </DialogActions>
                                            </Dialog>
                                            </TableCell>
                                </TableRow>
                            )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            }
            </Paper>
            </Zoom>
            {!this.state.noError && <Grid style={gridStyle}>
        <h2 className='text-danger'>{this.state.errorMessage}</h2>
        </Grid>}
                 </div> 
                </div> 
            </>
        )
    }
}

export default ListTestResultComponent
