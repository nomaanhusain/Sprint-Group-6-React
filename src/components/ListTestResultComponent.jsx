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
const gridStyle={margin:'250px auto'};

class ListTestResultComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             TestResults:[],
             noError:true,
             errorMessage:'',
             openDialog:false,
             testResultId:0,
             testReading:'',
             condition:''
        }
        this.addTestResult=this.addTestResult.bind(this);
        this.updateTestResult=this.updateTestResult.bind(this);
        this.changeConditionHandler=this.changeConditionHandler.bind(this);
        this.changeTestReadingHandler=this.changeTestReadingHandler.bind(this);
        this.handleCloseDialog=this.handleCloseDialog.bind(this);
    }
    handleOpenDialog(testId){
        this.setState({openDialog:true,
        testResultId:testId});
    }
    handleCloseDialog(){
        this.setState({openDialog:false});
    }
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
    deleteTestResult(testId){
        TestResultService.deleteTestResult(testId).then( res => {
            this.props.history.push('/testresult');
        });
    }

    addTestResult(){
        this.props.history.push('/add-testresult');
    }

    updateTestResult=(t)=>{
        t.preventDefault();

        let testres = {
            testResultId:this.state.testResultId,
            testReading:this.state.testReading,
            condition:this.state.condition
        }

        TestResultService.updateTestResult(testres).then(res=>{
                this.props.history.push('/testresult')
        });
        this.handleCloseDialog();
        window.location.reload();
    }

    changeConditionHandler =(event)=>{
        this.setState({condition:event.target.value});
    }

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
        
             <Button variant="contained" 
                    color="primary"
                    style={{width:200, height:35 ,margin:"25px"}}
                 startIcon={<AddIcon />} onClick={this.addTestResult}> 
                 Add Test Result
                 </Button>
        
         <br></br>
          <div className = "row">
         <Zoom in={true} style={{transitionDelay:'500ms'}}>
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
                                            <Dialog open={this.state.openDialog} onClose={this.handleCloseDialog} aria-labelledby="form-dialog-title">
                                            <DialogTitle id="form-dialog-title">Update Test Result</DialogTitle>
                                            <DialogContent>
                                                <DialogContentText>
                                                    Update the current Test Result Data
                                                </DialogContentText>
                                                <TextField id="outlined-basic" label="Test Reading"
                                                    style={{marginBottom : 20}}
                                                    fullWidth={true}
                                                    autoFocus={true}
                                                    required
                                                    type="number"
                                                    onChange={this.changeTestReadingHandler} />
                                    

                                    
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
                                            <DialogActions>
                                                <Button onClick={this.handleCloseDialog} color="primary">
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
