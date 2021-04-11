import React, { Component } from 'react'
import { Provider } from "react-redux";
import store from "../redux/store";
import DigtestContainer from './DigtestContainer'
import {Button} from '@material-ui/core'
import ButtonAppBar from './HeaderComponent'
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
export class DiagTestComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.addDiagTest=this.addDiagTest.bind(this);
        this.toTest=this.toTest.bind(this);
    }
    addDiagTest(){
        this.props.history.push('/add-test');
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
