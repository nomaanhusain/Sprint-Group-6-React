import React, { Component } from 'react'
import AppointmentService from '../services/AppointmentServices';
import ButtonAppBar from './HeaderComponent'

export class ViewAppointment extends Component {
    constructor(props) {
        super(props)
        //fieds variables
        this.state = {
            id: this.props.match.params.id,
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
            condition:''
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
        this.update = this.update.bind(this);
    }
//function for observing changes in fields
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

    //function for update changes in database
    update = (a) => {
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
        console.log('appointment => ' + JSON.stringify(appointment));
        AppointmentService.updateAppointment(this.state.id,appointment).then((response)=>
        {
            alert("Appointment updated")
        }
        ).catch(error=>{        
            console.log(error)
        })
        this.props.history.push(`/getAppointmentForm`);
        
 }

//function for getting values stored in database for update
    componentDidMount(){
        AppointmentService.viewAppointment(this.state.id).then((res) => {
            console.log(res.data);
            this.setState({appointmentDate: res.data.appointmentDate});
            this.setState({approvalStatus: res.data.approvalStatus});
            this.setState({pname: res.data.patient.pname});
            this.setState({phoneNo: res.data.patient.phoneNo});
            this.setState({age: res.data.patient.age});
            this.setState({gender: res.data.patient.gender});
            this.setState({testName: res.data.diagnosticTests[0].testName});
            this.setState({testPrice: res.data.diagnosticTests[0].testPrice});
            this.setState({normalValue: res.data.diagnosticTests[0].normalValue});
            this.setState({units: res.data.diagnosticTests[0].units});
            this.setState({name: res.data.diagnosticCenter.name});
            this.setState({contactEmail: res.data.diagnosticCenter.contactEmail});
            this.setState({contactNo: res.data.diagnosticCenter.contactNo});
            this.setState({address: res.data.diagnosticCenter.address});
            this.setState({testReading: res.data.testResult[0].testReading});
            this.setState({condition: res.data.testResult[0].condition});
        });
    }

    render() {
        return (
            <div>
                <div><ButtonAppBar/>
            <br></br>
               <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                           <h3 className="text-center text-info">Enter Patient Details</h3> 
                            <div className = "card-body">                   
                                    <form align="center">
                                        <div className = "form-group">
                                            <label> Patient Name: </label>
                                            <input placeholder="Patient name" name="pname" className="form-control" 
                                                value={this.state.pname} onChange={this.changePatientNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Phone No. </label>
                                            <input placeholder="Phone no." name="phoneNo" className="form-control" 
                                                value={this.state.phoneNo} onChange={this.changePatientPhoneNoHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Age: </label>
                                            <input placeholder="Age" name="age" className="form-control" 
                                                value={this.state.age} onChange={this.changeAgeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Gender: </label>
                                            <select placeholder="Gender" name="gender" className="form-control" 
                                                value={this.state.gender} onChange={this.changeGenderHandler}>
                                                     <option>Select</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option></select>
                                        </div>
                                        <h3 align='center'>Enter Appointment Details</h3>
                                        <div className = "form-group">
                                            <label> Appointment Date: </label>
                                            <input type='date' placeholder="appointmentDate" name="date" className="form-control" 
                                                value={this.state.appointmentDate} onChange={this.changeDateHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Appointment Status: </label>
                                            <select placeholder="approvalStatus" name="approvalStatus" className="form-control" 
                                                value={this.state.approvalStatus} onChange={this.changeStatusHandler}>
                                                <option>Select</option>
                                                <option>Completed</option>
                                                <option>Not Completed</option>
                                            </select>
                                        </div>
                                        <h3 align='center'>Enter Diagnostic Center Details</h3>
                                        <div className = "form-group">
                                            <label> Center Name: </label>
                                            <select placeholder="name" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changeCenterNameHandler}>
                                                <option>Select</option>
                                                <option>Dr. lal pathlab</option>
                                                <option>Scientific lab</option>
                                            </select>
                                        </div>
                                        <div className = "form-group">
                                            <label> Center Contact No: </label>
                                            <input placeholder="contact No" name="contactNo" className="form-control" 
                                                value={this.state.contactNo} onChange={this.changeCenterContactNoHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Center Address: </label>
                                            <input placeholder="address" name="address" className="form-control" 
                                                value={this.state.address} onChange={this.changeCenterAddressHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Center Email: </label>
                                            <input placeholder="contact Email" name="contactEmail" className="form-control" 
                                                value={this.state.contactEmail} onChange={this.changeCenterContactEmailHandler}/>
                                        </div>
                                        <h3 align='center'>Enter Diagnostic Test Details</h3>
                                        <div className = "form-group">
                                            <label> Test Name: </label>
                                            <select placeholder="Test Name" name="testName" className="form-control" 
                                                value={this.state.testName} onChange={this.changeTestNameHandler}>
                                                <option>Select</option>
                                                <option>TSH</option>
                                                <option>T3</option>
                                                <option>T4</option>
                                            </select>
                                        </div>
                                        <div className = "form-group">
                                            <label> Test Price: </label>
                                            <input placeholder="Test Price" name="testPrice" className="form-control" 
                                                value={this.state.testPrice} onChange={this.changeTestPriceHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Normal Range: </label>
                                            <input placeholder="Normal Range" name="normalValue" className="form-control" 
                                                value={this.state.normalValue} onChange={this.changeNormalValueHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Test Unit: </label>
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
                                            <label> Test Reading: </label>
                                            <input placeholder="Reading" name="testReading" className="form-control" 
                                                value={this.state.testReading} onChange={this.changeTestReadingHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> condition: </label>
                                            <select placeholder="condition" name="condition" className="form-control" 
                                                value={this.state.condition} onChange={this.changeConditionHandler}>
                                                <option>Select</option>
                                                <option>Normal</option>
                                                <option>outoff Range</option>
                                            </select>
                                            </div>
                                        <button className="btn btn-success" onClick={this.update}>update</button>                                    
                                    </form><br/><br/>
                                </div>
                            </div>
                        </div>
                   </div>
            </div>
        </div>
        )
    }
}
export default ViewAppointment