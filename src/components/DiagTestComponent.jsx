import React, { Component } from 'react'
import { Provider } from "react-redux";
import store from "../redux/store";
import DigtestContainer from './DigtestContainer'
import {Button, IconButton} from '@material-ui/core'
import ButtonAppBar from './HeaderComponent'
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import UpdateIcon from '@material-ui/icons/Update';
export class DiagTestComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.addDiagTest=this.addDiagTest.bind(this);
        this.updateDiagTest=this.updateDiagTest.bind(this);
        this.toTest=this.toTest.bind(this);
    }
    addDiagTest(){
        this.props.history.push('/add-test');
    }
    updateDiagTest(){
        this.props.history.push('/update-test');
    }
    toTest(){
        this.props.history.push('/test');
    }
    render() {
        return (
            <>
            <ButtonAppBar />
            <Typography variant="h4" component="h2" align="center" style={{padding:'20px'}}>
               Diagnostic Tests
                </Typography>
            <div className="container">
                <Button variant="contained"
                            color="primary"
                            style={{width:200, height:35,margin:"25px"}}
                            startIcon={<AddIcon />} onClick={this.addDiagTest}> 
                            Add Test
                         </Button>
                      
                        <IconButton color="primary" onClick={this.updateDiagTest}><UpdateIcon/></IconButton>
                 <br></br>
                 <Provider store={store}>
                 <DigtestContainer/>
                 </Provider>
            </div>
            </>
        )
    }
}

export default DiagTestComponent
