import React, { Component } from 'react'
import CenterServices from '../services/CenterServices'

class CreateCenterComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             centerId:this.props.match.params.centerId,
             centerName:'',
             contactNo:'',
             address:'',
             contactEmail:'',
             servicesOffered:''
          }
        this.changeCenterNameHandler=this.changeCenterNameHandler.bind(this);
        this.changeContactNoHandler=this.changeContactNoHandler.bind(this);
        this.changeAddressHandler=this.changeAddressHandler.bind(this);
        this.changeContactEmailHandler=this.changeContactEmailHandler.bind(this);
        this.changeServicesOfferedHandler=this.changeServicesOfferedHandler.bind(this);
        this.saveOrUpdateCenter=this.saveOrUpdateCenter.bind(this);
    }
    componentDidMount(){
        if(this.state.centerId === '_add'){
            return
        }else{
            CenterServices.getDiagnosticCenterById(this.state.centerId).then( (res) =>{
                let center = res.data;
                this.setState({centerName: center.centerName,
                    contactNo: center.contactNo,
                    address: center.address,
                    contactEmail: center.contactEmail,
                    servicesOffered:center.servicesOffered
                });
            });
        }        
    }

    saveOrUpdateCenter =(c)=>{
        c.preventDefault();
        let center ={
            centerName:this.state.centerName,
            contactNo:this.state.contactNo,
            address:this.state.address,
            contactEmail:this.state.contactEmail,
            servicesOffered:this.state.servicesOffered
             
        };
        console.log('center => ' + JSON.stringify(center));

        // step 5
        if(this.state.centerId === '_add'){
            CenterServices.addCenter(center).then(res =>{
                this.props.history.push('/centers');
            });
        }else{

            CenterServices.updateDiagnosticCenter(center,this.state.centerId).then(res =>{
                this.props.history.push('/centers');
            });
    }}

changeCenterNameHandler= (event) => {
    this.setState({centerName: event.target.value});
}
changeContactNoHandler= (event) => {
    this.setState({contactNo: event.target.value});
}
changeAddressHandler= (event) => {
    this.setState({address: event.target.value});
}
changeContactEmailHandler= (event) => {
    this.setState({contactEmail: event.target.value});
}
changeServicesOfferedHandler= (event) => {
    this.setState({servicesOffered: event.target.value});
}
cancel(){
    this.props.history.push('/centers');
}
getTitle(){
    if(this.state.centerId === '_add'){
        return <h3 className="text-center mt-2">Add Center</h3>
    }else{
        return <h3 className="text-center">Update Existing Center</h3>
    }
}


    
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container ">
                        <div className = "row ">
                             <div className = "card col-md-6 offset-md-3 offset-md-4 bg-light">
                             {/* <Typography variant="h4" align="center" gutterBottom>
                             Add Center
                            </Typography> */}
                                 {
                                    this.getTitle()
                                }

                                <div className = "card-body"> 
                                <form>
                                <div className = "form-group">
                                            <label> Center Name: </label>
                                            <input placeholder="Center Name" name="centerName" className="form-control" 
                                                value={this.state.centerName} onChange={this.changeCenterNameHandler}/>
                                                
                                        </div>
                                        <div className = "form-group" >
                                            <label> Contact Number: </label>
                                            <input placeholder="Contact Number" name="contactNo" className="form-control"
                                                      required="required"
                                                value={this.state.contactNo} onChange={this.changeContactNoHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Address: </label>
                                            <input placeholder="Address" name="address" className="form-control" 
                                                value={this.state.address} onChange={this.changeAddressHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Contact Email: </label>
                                            <input placeholder="xyz@gmail.com" name="contactEmail" className="form-control" 
                                                value={this.state.contactEmail} onChange={this.changeContactEmailHandler}/>
                                                
                                        </div>
                                        <div className = "form-group">
                                            <label> Services Offered: </label>
                                            <input placeholder="Services Offered" name="servicesOffered" className="form-control" 
                                                value={this.state.servicesOffered} onChange={this.changeServicesOfferedHandler}/>
                                                <br/>
                                        </div>
                                        
                                        <button className="btn btn-primary" onClick={this.saveOrUpdateCenter}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateCenterComponent


                                 