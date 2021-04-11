import React, { Component } from 'react'
import ButtonAppBar from './HeaderComponent'
import AppointmentService from '../services/AppointmentServices';

class viewAppointmentById extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id:'',                 
        }
        this.getAppointmentList=this.getAppointmentList.bind(this);
        this.Delete=this.Delete.bind(this);
        this.changeId=this.changeId.bind(this);
    }
    getAppointmentList(id){
        this.props.history.push(`/viewAppointment/${id}`);
    }
    Delete(id){
        AppointmentService.removeAppointment(id).then( res => {
            this.setState({appointment: this.state.appointment.filter(appointment => appointment.appointmentId !== id)});
            alert(res.data);
    })
    }
    changeId= (event) => {
        this.setState({id: event.target.value});
    }

    render() {
        return (
            <div><ButtonAppBar/>
            <br></br><br></br>
            <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                           <h3 align='center'>Get Appointments by Id</h3> 
                            <div className = "card-body">                   
                                    <form align="center">
                                    <div className = "form-group">
                                            <label> Appointment Id: </label>
                                            <input placeholder="Appointment Id" name="id" className="form-control" 
                                                value={this.state.id} onChange={this.changeId}/>
                                        </div>
                                        <script src="getList.js"></script>
                                        <button style={{marginLeft: "10px"}} className="btn btn-info" onClick={() => this.getAppointmentList(this.state.id)}>View</button>
                                        <button style={{marginLeft: "10px"}} className="btn btn-info" onClick={() => this.Delete(this.state.id)}>Delete</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                   </div>
            </div>
        )
    }
}

export default viewAppointmentById;
