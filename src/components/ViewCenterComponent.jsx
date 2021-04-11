import React, { Component } from 'react'
import CenterServices from '../services/CenterServices'

class ViewCenterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            centerId: this.props.match.params.centerId,
            center: {}
        }
    }

    componentDidMount(){
        CenterServices.getDiagnosticCenterById(this.state.centerId).then( res => {
            this.setState({center: res.data});
        })
    }

    render() {
        return (
            
            <div className="center"> 
                <br></br>
                <div className = "card col-md-6 offset-md-3 bg-light" >
                    
                    <h3 className = "text-center text-primary mt-2"> View Center Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label><b> Center Name:</b> </label>
                            
                            <div className = "text-danger"><b> { this.state.center.centerName }</b></div>
                            <hr/>
                        </div>
                        <div className = "row">
                            <label> <b>Contact Number: </b></label>
                             <div className = "text-danger"><b>
                                 { this.state.center.contactNo }</b></div>
                                 <hr/>
                        </div>
                        <div className = "row">
                            <label> <b>Address:</b> </label>
                            <div className = "text-danger"><b> { this.state.center.address }</b></div>
                            <hr/>
                        </div>
                        <div className = "row">
                            <label> <b>Email Address: </b></label>
                            <div className = "text-danger"> <b>{ this.state.center.contactEmail }</b></div>
                            <hr/>
                        </div>
                        <div className = "row">
                            <label> <b>Services Offered:</b> </label>
                            <div className = "text-danger"><b> { this.state.center.servicesOffered }</b></div>
                         
                        </div>
                        
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewCenterComponent