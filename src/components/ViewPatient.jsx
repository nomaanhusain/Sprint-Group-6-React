import React, { Component } from 'react'
import ButtonAppBar from './HeaderComponent'

class ViewPatient extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pname:'',                 
        }
        this.getPatientList=this.getPatientList.bind(this);
        this.changePname=this.changePname.bind(this);
    }

    //function to get appointment by patient name
    getPatientList(name){
        this.props.history.push(`/viewAppointmentByPname/${name}`);
    }
    
    changePname= (event) => {
        this.setState({pname: event.target.value});
    }

    render() {
        return (
            <div><ButtonAppBar/>
            <br></br><br></br>
            <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                           <h3 align='center'>Get Appointments by Patient name</h3> 
                            <div className = "card-body">                   
                                    <form align="center">
                                    <div className = "form-group">
                                            <label> Paient Name: </label>
                                            <input placeholder="Paient Name" name="pname" className="form-control" 
                                                value={this.state.pname} onChange={this.changePname}/>
                                        </div>  
                                        <button style={{marginLeft: "10px"}} className="btn btn-info" onClick={() => this.getPatientList(this.state.pname)}>Get List </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                   </div>
            </div>
        )
    }
}

export default ViewPatient
