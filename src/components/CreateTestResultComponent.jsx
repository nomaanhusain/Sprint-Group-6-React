import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import {Button, Paper} from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save'
import Typography from '@material-ui/core/Typography';
import TestResultService from '../services/TestResultService'
class CreateTestResultComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             testReading:0,
             condition:''
        }
        this.saveTestResult=this.saveTestResult.bind(this);
        this.changeConditionHandler=this.changeConditionHandler.bind(this);
        this.changeTestReadingHandler=this.changeTestReadingHandler.bind(this);
    }

    saveTestResult=(u)=>{
        u.preventDefault();
        let testres={
            testReading:this.state.testReading,
            condition:this.state.condition
        }
        TestResultService.addTestResult(testres).then(res=>{
            this.props.history.push('/testresult');
        });
    }

    cancel(){
        this.props.history.push('/testresult');
    }
    
    changeConditionHandler =(event)=>{
        this.setState({condition:event.target.value});
    }

    changeTestReadingHandler=(event)=>{
        this.setState({testReading:event.target.value})
    }
    render() {
        return (
            <div>
                <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                        
                             <div className = "card col-md-4 offset-md-3 offset-md-4">
                             <Paper elevation={10}>
                             <Typography variant="h4" align="center" gutterBottom>
                             Add Test Result
                            </Typography>
                               
                                <div className = "card-body"> 
                                <form>

                                    <div className = "form-group">
                                    <TextField id="outlined-basic" label="Test Reading"
                                     style={{marginBottom : 20}}
                                     fullWidth={true}
                                     autoFocus={true}
                                     required
                                     type="number"
                                     error={this.state.errorState}
                                      onChange={this.changeTestReadingHandler} />
                                    </div>

                                    <div className = "form-group">
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
                                    </div>
                                    <Button variant="contained"
                                        color="primary"
                                        size="medium"
                                        startIcon={<SaveIcon />} 
                                        onClick={this.saveTestResult}>Save</Button>
                                     <Button variant="contained" 
                                     color="secondary" 
                                     onClick={this.cancel.bind(this)} 
                                     style={{marginLeft: "10px"}}>Cancel</Button>
                                </form>
                                </div> 
                                </Paper> 
                             </div>
                            
                        </div>
                    </div>

            </div>
            </div>
        )
    }
}

export default CreateTestResultComponent
