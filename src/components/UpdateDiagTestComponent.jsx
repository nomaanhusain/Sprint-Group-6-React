import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import {Button, Paper} from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import DiagnosticTestService from '../services/DiagnosticTestService'
import UpdateIcon from '@material-ui/icons/Update';
export class UpdateDiagTestComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            testId:0,
            testName:'',
            testPrice:0,
            normalValue:'',
            units:'',
            error:'',
            errorState:false
        }
        
    }
    
    // Update new diagnostic test
    updateTest =(u)=>{
        u.preventDefault()
        // Object for diagnostic test
        let test={
            testId:this.state.testId,
            testName:this.state.testName,
            testPrice:this.state.testPrice,
            normalValue:this.state.normalValue,
            units:this.state.units
        }
        // Check all required fields are filled if not raise error
        if(this.state.testId===0||this.state.testName===''||this.state.testPrice===0||this.state.normalValue===''||this.state.units===''){
            this.setState({errorState:true,
            error:'Please fill required data'});
        }else{
            // Call to backend 
        DiagnosticTestService.updateTest(test).then(res=>{
            this.props.history.push('/test');
        }).catch(error=>{
            // Raise error if some error comes from backend
            this.setState({
                error:error.response.data,
                errorState:true
            });
      });
    }
    }
    cancel(){
        // Route to test
        this.props.history.push('/test');
    }
    changeTestIdHandler=(event)=>{
        this.setState({testId:event.target.value});
    }
    // Handle change in text field
    changeTestNameHandler=(event)=>{
        this.setState({testName:event.target.value});
    }
    // Handle change in text field
    changeTestPriceHandler=(event)=>{
        this.setState({testPrice:event.target.value});
    }
    // Handle change in text field
    changeNormalValueHandler=(event)=>{
        this.setState({normalValue:event.target.value});
    }
    // Handle change in text field
    changeUnitHandler=(event)=>{
        this.setState({units:event.target.value});
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
                             Add Diagnostic Test
                            </Typography>
                               
                                <div className = "card-body"> 
                                <form>


                                <div className = "form-group">
                                    {/* Text Field for Test Name */}
                                    <TextField id="outlined-basic" label="Test Id"
                                    placeholder="Enter ID to be updated"
                                     style={{marginBottom : 20}}
                                     type="number"
                                     fullWidth={true}
                                     autoFocus={true}
                                     required
                                     error={this.state.errorState}
                                      onChange={this.changeTestIdHandler} />
                                    </div>

                                    <div className = "form-group">
                                    {/* Text Field for Test Name */}
                                    <TextField id="outlined-basic" label="Test Name"
                                     style={{marginBottom : 20}}
                                     fullWidth={true}
                                     required
                                     error={this.state.errorState}
                                      onChange={this.changeTestNameHandler} />
                                    </div>

                                    <div className = "form-group">
                                    {/* Text Field for Test Price */}
                                    <TextField id="outlined-pass" 
                                    label="Test Price"
                                    style={{marginBottom:20}}
                                    fullWidth={true}
                                    required
                                    type='number'
                                    error={this.state.errorState}
                                    onChange={this.changeTestPriceHandler} />
                                    </div>

                                    <div className = "form-group">
                                    {/* Text Field for Normal Value */}
                                    <TextField id="outlined-pass" 
                                    label="Normal Value"
                                    style={{marginBottom:20}}
                                    fullWidth={true}
                                    required
                                    error={this.state.errorState}
                                    onChange={this.changeNormalValueHandler} />
                                    </div>

                                    <div className = "form-group">
                                    {/* Text Field for Units */}
                                    <TextField id="outlined-pass" 
                                    label="Units"
                                    style={{marginBottom:20}}
                                    fullWidth={true}
                                    required
                                    error={this.state.errorState}
                                    onChange={this.changeUnitHandler} />
                                    </div>
                                    {/* Button to save */}
                                    <Button variant="contained"
                                        color="primary"
                                        size="medium"
                                        // Icon for the button
                                        startIcon={<UpdateIcon />} 
                                        onClick={this.updateTest}>Save</Button>
                                     <Button variant="contained" 
                                     color="secondary" 
                                     onClick={this.cancel.bind(this)} 
                                     style={{marginLeft: "10px"}}>Cancel</Button>
                                </form>
                                </div>
                                {/* If any error occours this is displayed, else it stays null */}
                                <Typography variant="caption" color="error">{this.state.error}</Typography>  
                                </Paper> 
                             </div>
                            
                        </div>
                    </div>

            </div>
        )
    }
}

export default UpdateDiagTestComponent
