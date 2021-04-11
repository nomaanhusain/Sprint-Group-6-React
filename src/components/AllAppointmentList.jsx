import React, { Component } from 'react'
import AppointmentService from '../services/AppointmentServices'
import ButtonAppBar from './HeaderComponent'


class AllAppointmentList extends Component {
    constructor(props) {
        super(props)
        this.state = {
                status: this.props.match.params.status,
                date: this.props.match.params.date,
                appointment: []
        }

        this.viewAppointment = this.viewAppointment.bind(this);
        this.updateAppointment=this.updateAppointment.bind(this);
        this.deleteAppointment = this.deleteAppointment.bind(this);
    }
//view appointment by individual id
    viewAppointment(id){
        this.props.history.push(`/viewAppointment/${id}`);
    }
    //update appointment by individual id
    updateAppointment(id){
        this.props.history.push(`/updateAppointment/${id}`);
    }
    //delete appointment by individual id
    deleteAppointment(id){
        AppointmentService.removeAppointment(id).then( res => {
            this.setState({appointment: this.state.appointment.filter(appointment => appointment.appointmentId !== id)});
            alert(res.data);
        });
    }

//functio for geting data from data base in appointment variable
    componentDidMount(){
        AppointmentService.getAppointmentList(this.state.date,this.state.status).then((res) => {
            this.setState({appointment: res.data});
            console.log(res);
        });
        
    }
//frontend for display data 
    render() {
        return (
            <div><ButtonAppBar/>
                 <br></br>
                 <div className = "py-4">
                        <table className = "table table-striped table-bordered">

                            <thead class="thead-dark" align="center">
                                <tr>
                                    <th> Appointment id</th>
                                    <th> Appointment Date</th>
                                    <th> Patient Name</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody align="center">
                                {
                                    this.state.appointment.map(
                                        appointment => 
                                        <tr key = {appointment.appointmentId}>
                                             <td> {appointment.appointmentId} </td>   
                                             <td> {appointment.appointmentDate}</td>
                                             <td> {appointment.patient.pname}</td>
                                             <td>
                                                 <button  className="btn btn-info" onClick={() => this.updateAppointment(appointment.appointmentId)}>Update </button>
                                                 <button style={{marginLeft: "10px"}} className="btn btn-danger" onClick={() => this.deleteAppointment(appointment.appointmentId)}>Delete </button>
                                                 <button style={{marginLeft: "10px"}} className="btn btn-info" onClick={() => this.viewAppointment(appointment.appointmentId)}>View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>
            </div>
        )
    }
}

export default AllAppointmentList;