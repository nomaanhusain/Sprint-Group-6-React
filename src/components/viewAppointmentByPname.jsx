import React, { Component } from 'react'
import AppointmentService from '../services/AppointmentServices'
import ButtonAppBar from './HeaderComponent'

class viewAppointmentByPname extends Component {
    constructor(props) {
        super(props)
        this.state = {
                name: this.props.match.params.name,
                appointment: []
        }

        this.viewAppointment = this.viewAppointment.bind(this);
    }

    viewAppointment(id){
        this.props.history.push(`/viewAppointment/${id}`);
    }


    componentDidMount(){
        AppointmentService.viewAppointments(this.state.name).then((res) => {
            this.setState({appointment: res.data});
            console.log(res);
        });
        
    }

    render() {
        return (
            <div><ButtonAppBar/>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead align="center">
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

export default viewAppointmentByPname;