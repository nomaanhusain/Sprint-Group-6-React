import React, { Component } from 'react'
import AppointmentServices from '../services/AppointmentServices';
import ButtonAppBar from './HeaderComponent'
export class AddAppointmentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                    appointmentDate:'',
                    approvalStatus:'',
                    pname: '',
                    phoneNo: '',
                    age: '',
                    gender: '',
                    testName:'',
                    testPrice:'',
                    normalValue:'',
                    units:'',
                    name:'',
                    contactNo:'',
                    address:'',
                    contactEmail:'',
                    testReading:'',
                    condition:'',
                    //error values
                    appointmentDateError:'',
                    approvalStatusError:'',
                    pnameError: '',
                    phoneNoError: '',
                    ageError: '',
                    genderError: '',
                    testNameError:'',
                    testPriceError:'',
                    normalValueError:'',
                    unitsError:'',
                    nameError:'',
                    contactNoError:'',
                    addressError:'',
                    contactEmailError:'',
                    testReadingError:'',
                    conditionError:'',
        }

        this.changeDateHandler = this.changeDateHandler.bind(this);
        this.changeStatusHandler = this.changeStatusHandler.bind(this);
        this.changePatientNameHandler = this.changePatientNameHandler.bind(this);
        this.changePatientPhoneNoHandler = this.changePatientPhoneNoHandler.bind(this);
        this.changeAgeHandler = this.changeAgeHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.changeCenterNameHandler=this.changeCenterNameHandler.bind(this);
        this.changeCenterContactNoHandler=this.changeCenterContactNoHandler.bind(this);
        this.changeCenterAddressHandler=this.changeCenterAddressHandler.bind(this);
        this.changeCenterContactEmailHandler=this.changeCenterContactEmailHandler.bind(this);
        this.changeTestNameHandler=this.changeTestNameHandler.bind(this);
        this.changeTestPriceHandler=this.changeTestPriceHandler.bind(this);
        this.changeNormalValueHandler=this.changeNormalValueHandler.bind(this);
        this.changeUnitHandler=this.changeUnitHandler.bind(this);
        this.changeTestReadingHandler=this.changeTestReadingHandler.bind(this);
        this.changeConditionHandler=this.changeConditionHandler.bind(this);
        this.save = this.save.bind(this);
    }
//validaion form
    valid(){
        if(this.state.appointmentDate.length==0)
            this.setState({appointmentDateError:"Required"})
        else
            this.setState({appointmentDateError:""})
        if(this.state.approvalStatus.length==0)
        {
            this.setState({approvalStatusError:"Required"})
        }
        else 
        this.setState({approvalStatusError:""})

        if(this.state.pname.length==0)
        {
            this.setState({pnameError:"Required"})
        }
        else
        this.setState({pnameError:""})

        if(this.state.age.length==0)
        {
            this.setState({ageError:"Required"})
        }
        else
        this.setState({ageError:""})

        if(this.state.name.length==0)
        {
            this.setState({nameError:"Required"})
        }
        else
        this.setState({nameError:""})

        if(this.state.units.length==0)
        {
            this.setState({unitsError:"Required"})
        }
        else
        this.setState({unitsError:""})

        if(this.state.gender.length==0)
        {
            this.setState({genderError:"Required"})
        }
        else
        this.setState({genderError:""})

        if(this.state.address.length==0 && !this.state.add)
        {
            this.setState({addressError:"Required"})
        }
        else
        this.setState({addressError:""})

        if(this.state.phoneNo.length==0)
        {
            this.setState({phoneNoError:"Required"})
        }
        else
        this.setState({phoneNoError:""})

        if(this.state.condition.length==0)
        {
            this.setState({conditionError:"Required"})
        }
        else
        this.setState({conditionError:""})

        if(this.state.contactNo.length==0)
        {
            this.setState({contactNoError:"Required"})
        }
        else
        this.setState({contactNoError:""})

        if(this.state.testPrice.length==0)
        {
            this.setState({testPriceError:"Required"})
        }
        else
        this.setState({testPriceError:""})

        if(this.state.normalValue.length==0)
        {
            this.setState({normalValueError:"Required"})
        }
        else
        this.setState({normalValueError:""})

        if(this.state.testReading.length==0)
        {
            this.setState({testReadingError:"Required"})
        }
        else
        this.setState({testReadingError:""})

        if(this.state.contactEmail.length==0)
        {
            this.setState({contactEmailError:"Required"})
        }
        else
        this.setState({contactEmailError:""})

        if(this.state.testName.length==0)
        {
            this.setState({testNameError:"Required"})
        }
        else{
        this.setState({testNameError:""})
        return true}
    }

    //function for changes
    changeDateHandler= (event) => {
        this.setState({appointmentDate: event.target.value});
    }
    changeStatusHandler= (event) => {
        this.setState({approvalStatus: event.target.value});
    }
    changePatientNameHandler= (event) => {
        this.setState({pname : event.target.value});
    }
    changePatientPhoneNoHandler= (event) => {
        this.setState({phoneNo: event.target.value});
    }
    changeAgeHandler= (event) => {
        this.setState({age: event.target.value});
    }
    changeGenderHandler= (event) => {
        this.setState({gender: event.target.value});
    }
    changeCenterNameHandler= (event) => {
        this.setState({name: event.target.value});
    }
    changeCenterContactNoHandler= (event) => {
        this.setState({contactNo: event.target.value});
    }
    changeCenterAddressHandler= (event) => {
        this.setState({address: event.target.value});
    }
    changeCenterContactEmailHandler= (event) => {
        this.setState({contactEmail: event.target.value});
    }
    changeTestNameHandler= (event) => {
        this.setState({testName : event.target.value});
    }
    changeTestPriceHandler= (event) => {
        this.setState({testPrice: event.target.value});
    }
    changeNormalValueHandler= (event) => {
        this.setState({normalValue: event.target.value});
    }
    changeUnitHandler= (event) => {
        this.setState({units: event.target.value});
    }
    changeTestReadingHandler= (event) => {
        this.setState({testReading: event.target.value});
    }
    changeConditionHandler= (event) => {
        this.setState({condition: event.target.value});
    }

    //save function
    save = (a) => {
        a.preventDefault();
        let appointment = {
            appointmentDate:this.state.appointmentDate,
            approvalStatus:this.state.approvalStatus,
            patient:{
                        pname:this.state.pname,
                        phoneNo:this.state.phoneNo,
                        age:this.state.age,
                        gender: this.state.gender
            },
            diagnosticTests:[
                {
                    testName:this.state.testName,
                    testPrice:this.state.testPrice,
                    normalValue:this.state.normalValue,
                    units:this.state.units
                }],
            diagnosticCenter:{
                    name:this.state.name,
                    contactNo:this.state.contactNo,
                    address:this.state.address,
                    contactEmail:this.state.contactEmail
                },
            testResult:[{
                    testReading:this.state.testReading,
                    condition:this.state.condition
                }]
            }

        if(this.valid())
        {
        console.log('appointment => ' + JSON.stringify(appointment));
        AppointmentServices.addAppointment(appointment).then((response)=>
        {
            alert(response.data)
        }
        ).catch(error=>{        
            console.log(error)
        })
        this.props.history.push(`/addAppointment`);
    }
}

//frontend design function
    render() {
        return (    
            <div><ButtonAppBar/>
                <div>
            <br></br>
            <h1 align='center'>Add Appointment</h1> <br></br>
               <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                           <h3 align='center'>Enter Patient Details</h3> 
                            <div className = "card-body">                   
                                    <form align="center">
                                        <div className = "form-group">
                                            <label> Patient Name: <p style={{color:"red"}}>{this.state.pnameError}</p></label>
                                            <input type='text' placeholder="Patient name" name="pname" className="form-control" 
                                                value={this.state.pname} onChange={this.changePatientNameHandler}/>
                                                
                                        </div>
                                        <div className = "form-group">
                                            <label> Phone No. <p style={{color:"red"}}>{this.state.phoneNoError}</p></label>
                                            <input type='number' placeholder="Phone no." name="phoneNo" className="form-control" 
                                                value={this.state.phoneNo} onChange={this.changePatientPhoneNoHandler}/>
                                                
                                        </div>
                                        <div className = "form-group">
                                            <label> Age: <p style={{color:"red"}}>{this.state.ageError}</p></label>
                                            <input type='number' placeholder="Age" name="age" className="form-control" 
                                                value={this.state.age} onChange={this.changeAgeHandler}/>
                                                
                                        </div>
                                        <div className = "form-group">
                                            <label> Gender: <p style={{color:"red"}}>{this.state.genderError}</p></label>
                                            <select placeholder="Gender" name="gender" className="form-control" 
                                                value={this.state.gender} onChange={this.changeGenderHandler}>
                                                     <option>Select</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option></select>
                                                    
                                        </div>
                                        <h3 align='center'>Enter Appointment Details</h3>
                                        <div className = "form-group">
                                            <label> Appointment Date: <p style={{color:"red"}}>{this.state.appointmentDateError}</p></label>
                                            <input type='date' placeholder="appointmentDate" name="date" className="form-control" 
                                                value={this.state.appointmentDate} onChange={this.changeDateHandler}/>
                                                
                                        </div>
                                        <div className = "form-group">
                                            <label> Appointment Status: <p style={{color:"red"}}>{this.state.approvalStatusError}</p></label>
                                            <select placeholder="approvalStatus" name="approvalStatus" className="form-control" 
                                                value={this.state.approvalStatus} onChange={this.changeStatusHandler}>
                                                <option>Select</option>
                                                <option>Completed</option>
                                                <option>Not Completed</option>
                                            </select>
                                            
                                        </div>
                                        <h3 align='center'>Enter Diagnostic Center Details</h3>
                                        <div className = "form-group">
                                            <label> Center Name: <p style={{color:"red"}}>{this.state.nameError}</p></label>
                                            <select placeholder="name" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changeCenterNameHandler}>
                                                <option>Select</option>
                                                <option>Dr. lal pathlab</option>
                                                <option>Scientific lab</option>
                                            </select>
                                            
                                        </div>
                                        <div className = "form-group">
                                            <label> Center Contact No: <p style={{color:"red"}}>{this.state.contactNoError}</p></label>
                                            <input type='number' placeholder="contact No" name="contactNo" className="form-control" 
                                                value={this.state.contactNo} onChange={this.changeCenterContactNoHandler}/>
                                                
                                        </div>
                                        <div className = "form-group">
                                            <label> Center Address: <p style={{color:"red"}}>{this.state.addressError}</p></label>
                                            <input placeholder="address" name="address" className="form-control" 
                                                value={this.state.address} onChange={this.changeCenterAddressHandler}/>
                                                
                                        </div>
                                        <div className = "form-group">
                                            <label> Center Email: <p style={{color:"red"}}>{this.state.contactEmailError}</p></label>
                                            <input placeholder="contact Email" name="contactEmail" className="form-control" 
                                                value={this.state.contactEmail} onChange={this.changeCenterContactEmailHandler}/>
                                                
                                        </div>
                                        <h3 align='center'>Enter Diagnostic Test Details</h3>
                                        <div className = "form-group">
                                            <label> Test Name: <p style={{color:"red"}}>{this.state.testNameError}</p></label>
                                            <select type='text' placeholder="Test Name" name="testName" className="form-control" 
                                                value={this.state.testName} onChange={this.changeTestNameHandler}>
                                                <option>Select</option>
                                                <option>TSH</option>
                                                <option>T3</option>
                                                <option>T4</option>
                                            </select>
                                            
                                        </div>
                                        <div className = "form-group">
                                            <label> Test Price: <p style={{color:"red"}}>{this.state.testPriceError}</p></label>
                                            <input placeholder="Test Price" name="testPrice" className="form-control" 
                                                value={this.state.testPrice} onChange={this.changeTestPriceHandler}/>
                                                
                                        </div>
                                        <div className = "form-group">
                                            <label> Normal Range: <p style={{color:"red"}}>{this.state.normalValueError}</p></label>
                                            <input placeholder="Normal Range" name="normalValue" className="form-control" 
                                                value={this.state.normalValue} onChange={this.changeNormalValueHandler}/>
                                                
                                        </div>
                                        <div className = "form-group">
                                            <label> Test Unit: <p style={{color:"red"}}>{this.state.unitsError}</p></label>
                                            <select placeholder="Unit" name="units" className="form-control" 
                                                value={this.state.units} onChange={this.changeUnitHandler}>
                                                <option>Select</option>
                                                <option>mg/l</option>
                                                <option>g/l</option>
                                                <option>mg/ml</option>
                                                <option>g/ml</option>
                                            </select>
                                            
                                        </div>
                                        <h3 align='center'>Enter Test Result Details</h3>
                                        <div className = "form-group">
                                            <label> Test Reading: <p style={{color:"red"}}>{this.state.testReadingError}</p></label>
                                            <input placeholder="Reading" name="testReading" className="form-control" 
                                                value={this.state.testReading} onChange={this.changeTestReadingHandler}/>
                                                
                                        </div>
                                        <div className = "form-group">
                                            <label> condition: <p style={{color:"red"}}>{this.state.conditionError }</p></label>
                                            <select placeholder="condition" name="condition" className="form-control" 
                                                value={this.state.condition} onChange={this.changeConditionHandler}>
                                                <option>Select</option>
                                                <option>Normal</option>
                                                <option>outoff Range</option>
                                            </select>
                                            
                                            </div>
                                        <button type="submit" className="btn btn-success" onClick={this.save}>Save</button>                                    
                                    </form>
                                    <br/><br></br>
                                </div>
                            </div>
                        </div>
                   </div>
            </div>
        </div>
        )
    }
}

export default AddAppointmentComponent
