import React, { Component } from 'react'
import AppointmentService from '../services/AppointmentServices';
import ButtonAppBar from './HeaderComponent'

export class ViewAppointment extends Component {
    constructor(props) {
        super(props)
        //fields define in page
        this.state = {
            id: this.props.match.params.id,
            appointmentDate:'',
            appointmentId:'',
            approvalStatus:'',
            patientId:'',
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
            centerId:'',
            testResultId:'',
            testId:'',
            condition:''
        }
    }
//function for show data in following fields
    componentDidMount(){
        AppointmentService.viewAppointment(this.state.id).then((res) => {
            console.log(res.data);
            this.setState({appointmentDate: res.data.appointmentDate});
            this.setState({approvalStatus: res.data.approvalStatus});
            this.setState({appointmentId: res.data.appointmentId});
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
            this.setState({patientId: res.data.patient.patientId});
            this.setState({centerId: res.data.diagnosticCenter.centerId});
            this.setState({testId: res.data.diagnosticTests[0].testId});
            this.setState({testResultId: res.data.testResult[0].testResultId});
        });
    }

    render() {
        return (
            <div><ButtonAppBar/>
                <div>
            <br></br>
               <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                           <h3 align='center'>Enter Patient Details</h3> 
                            <div className = "card-body">                   
                                    <form align="center">
                                        <div className = "form-group">
                                            <label> Patient Id: </label>
                                            <input placeholder="Patient id" name="pid" className="form-control" 
                                                value={this.state.patientId}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Patient Name: </label>
                                            <input placeholder="Patient name" name="pname" className="form-control" 
                                                value={this.state.pname}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Phone No. </label>
                                            <input placeholder="Phone no." name="phoneNo" className="form-control" 
                                                value={this.state.phoneNo}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Age: </label>
                                            <input placeholder="Age" name="age" className="form-control" 
                                                value={this.state.age}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Gender: </label>
                                            <select placeholder="Gender" name="gender" className="form-control" 
                                                value={this.state.gender}>
                                                     <option>Select</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option></select>
                                        </div>
                                        <h3 align='center'>Enter Appointment Details</h3>
                                        <div className = "form-group">
                                            <label> Appointment Id: </label>
                                            <input placeholder="appointment Id" name="appointmentId" className="form-control" 
                                                value={this.state.appointmentId} />
                                        </div>
                                        <div className = "form-group">
                                            <label> Appointment Date: </label>
                                            <input type='date' placeholder="appointmentDate" name="date" className="form-control" 
                                                value={this.state.appointmentDate} />
                                        </div>
                                        <div className = "form-group">
                                            <label> Appointment Status: </label>
                                            <select placeholder="approvalStatus" name="approvalStatus" className="form-control" 
                                                value={this.state.approvalStatus} >
                                                <option>Select</option>
                                                <option>Completed</option>
                                                <option>Not Completed</option>
                                            </select>
                                        </div>
                                        <h3 align='center'>Enter Diagnostic Center Details</h3>
                                        <div className = "form-group">
                                            <label> Diagnostic Center Id: </label>
                                            <input placeholder="appointment Id" name="appointmentId" className="form-control" 
                                                value={this.state.centerId} />
                                        </div>
                                        <div className = "form-group">
                                            <label> Center Name: </label>
                                            <select placeholder="name" name="name" className="form-control" 
                                                value={this.state.name} >
                                                <option>Select</option>
                                                <option>Dr. lal pathlab</option>
                                                <option>Scientific lab</option>
                                            </select>
                                        </div>
                                        <div className = "form-group">
                                            <label> Center Contact No: </label>
                                            <input placeholder="contact No" name="contactNo" className="form-control" 
                                                value={this.state.contactNo}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Center Address: </label>
                                            <input placeholder="address" name="address" className="form-control" 
                                                value={this.state.address}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Center Email: </label>
                                            <input placeholder="contact Email" name="contactEmail" className="form-control" 
                                                value={this.state.contactEmail}/>
                                        </div>
                                        <h3 align='center'>Enter Diagnostic Test Details</h3>
                                        <div className = "form-group">
                                            <label> Diagnostic Test  Id: </label>
                                            <input placeholder="appointment Id" name="appointmentId" className="form-control" 
                                                value={this.state.testId} />
                                        </div>
                                        <div className = "form-group">
                                            <label> Test Name: </label>
                                            <select placeholder="Test Name" name="testName" className="form-control" 
                                                value={this.state.testName}>
                                                <option>Select</option>
                                                <option>TSH</option>
                                                <option>T3</option>
                                                <option>T4</option>
                                            </select>
                                        </div>
                                        <div className = "form-group">
                                            <label> Test Price: </label>
                                            <input placeholder="Test Price" name="testPrice" className="form-control" 
                                                value={this.state.testPrice} />
                                        </div>
                                        <div className = "form-group">
                                            <label> Normal Range: </label>
                                            <input placeholder="Normal Range" name="normalValue" className="form-control" 
                                                value={this.state.normalValue} />
                                        </div>
                                        <div className = "form-group">
                                            <label> Test Unit: </label>
                                            <select placeholder="Unit" name="units" className="form-control" 
                                                value={this.state.units} >
                                                <option>Select</option>
                                                <option>mg/l</option>
                                                <option>g/l</option>
                                                <option>mg/ml</option>
                                                <option>g/ml</option>
                                            </select>
                                        </div>
                                        <h3 align='center'>Enter Test Result Details</h3>
                                        <div className = "form-group">
                                            <label> Test Result Id: </label>
                                            <input placeholder="appointment Id" name="appointmentId" className="form-control" 
                                                value={this.state.testResultId} />
                                        </div>
                                        <div className = "form-group">
                                            <label> Test Reading: </label>
                                            <input placeholder="Reading" name="testReading" className="form-control" 
                                                value={this.state.testReading}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> condition: </label>
                                            <select placeholder="condition" name="condition" className="form-control" 
                                                value={this.state.condition}>
                                                <option>Select</option>
                                                <option>Normal</option>
                                                <option>outoff Range</option>
                                            </select>
                                            </div>
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