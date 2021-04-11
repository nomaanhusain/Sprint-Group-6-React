import React, { Component } from 'react'
import ButtonAppBar from './HeaderComponent'

class ListAppointment extends Component {
    constructor(props) {
        super(props)

        this.state = {
            appointmentDate:'',
            approvalStatus:'',
        }
        this.changeDateHandler = this.changeDateHandler.bind(this);
        this.changeStatusHandler = this.changeStatusHandler.bind(this);
        this.getList = this.getList.bind(this);
    }
    //function for getting all appointment by date and status
    getList(date,status){
        this.props.history.push(`/getAppointments/${date}/${status}`);
    }
    //function for observing changes
    changeDateHandler= (event) => {
        this.setState({appointmentDate: event.target.value});
    }
    changeStatusHandler= (event) => {
        this.setState({approvalStatus: event.target.value});
    }
    
    render() {
        return (
            <div><ButtonAppBar/>
            <br></br><br></br>
            <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                           <h3 align='center'>Get Appointment list</h3> 
                            <div className = "card-body">                   
                                    <form align="center">
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
                                        <script src="getList.js"></script>
                                        <button style={{marginLeft: "10px"}} className="btn btn-info" onClick={() => this.getList(this.state.appointmentDate,this.state.approvalStatus)}>Get List </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                   </div>
            </div>
        )
    }
}

export default ListAppointment;