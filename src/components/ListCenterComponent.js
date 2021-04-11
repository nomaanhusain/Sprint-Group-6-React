import React, { Component } from 'react'
import CenterServices from '../services/CenterServices'
import ButtonAppBar from './HeaderComponent';
class ListCenterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                centers: []
        }
        this.addCenter = this.addCenter.bind(this);
        this.editCenter = this.editCenter.bind(this);
        this.deleteCenter = this.deleteCenter.bind(this);
    }

    deleteCenter(centerId){
        CenterServices.deleteDiagnosticCenter(centerId).then( res => {
            this.setState({centers: this.state.centers.filter(center => center.centerId !== centerId)});
        });
    }
    viewCenter(centerId){
        this.props.history.push(`/view-center/${centerId}`);
    }
    editCenter(centerId){
        this.props.history.push(`/add-center/${centerId}`);
    }

    componentDidMount(){
        CenterServices.getAllCenters().then((res) => {
            this.setState({ centers: res.data});
        });
    }

    addCenter(){
        this.props.history.push('/add-center/_add');
    }

    render() {
        return (
            <div>
               <ButtonAppBar/>
                
                <h2 className="text-center text-primary"> <i>People you know,Care you Trust!</i></h2>
                <br></br>

                
                 
                 
                 <div className = "row">
                    <button className="btn btn-primary mt-6" onClick={this.addCenter} style={{width:"250px"}}> Add Center</button>
                 </div>
                 <br></br>
                 <h2 className="text-center"> List of Available Centers</h2>
                 <div className = "row">
                    <button className="btn btn-primary"></button>
                 </div>
                     <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>

                                    <th> Center Id</th>
                                    <th> Center Name</th>
                                    <th> Contact Number</th>
                                    <th> Address</th>
  	                                <th> Contact Email</th>
                                    <th> Services Offered</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.centers.map(
                                        center => 
                                        <tr key = {center.centerId}>
                                            <td>{center.centerId}</td>
                                             <td> { center.centerName} </td>   
                                             <td> {center.contactNo}</td>
                                             <td> {center.address}</td>
                                             <td> {center.contactEmail}</td>
                                             <td> {center.servicesOffered}</td>
                                             <td>
                                                 <button onClick={ () => this.editCenter(center.centerId)} className="btn btn-warning">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCenter(center.centerId)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewCenter(center.centerId)} className="btn btn-primary">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>
                 <div className = "row">
                    <button className="btn btn-primary"></button>
                 </div>

            </div>
        )
    }
}

export default ListCenterComponent