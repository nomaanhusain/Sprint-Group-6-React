import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className="bg-dark text-white fixed-bottom">
                <footer className = "footer">
                    <div className="text-center " >
                    <br></br>
                    <span>Group6 &copy;All Rights Reserved 2021</span>
                    <br></br>
                        
                    
                    </div>
                </footer>
            </div>
        )
    }
}

export default FooterComponent
