import React from "react";
import { Component } from 'react';
import { Spring, config } from 'react-spring/renderprops';


export class RezContainer extends Component {
    // The master container for the Resume Page.
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id='resume_container'>
                <h1>Hi, I'm Eric.</h1>
                <div id='how_its_made'>
                    <h1>How was this site was made?</h1>
                </div>
                <div id='how_its_made'>
                    <p className="rez_paragraph" id="left_rez"> I have a laptop that's running Ubuntu 18.04 as the server for this React application.
                        It's currently using <a href="https://www.nginx.com/">NGINX</a> to run the Web Server listening on Port 80 and 443.
                        NGINX communicates with a Python WSGI HTTP Server called <a href="https://gunicorn.org/">GUINICORN</a> listening on an internal web socket.
                        That web socket communicates with my <a href="https://github.com/Minerest/gcp_hackathon_project">Python backend</a>.
                        The Python backend is running a microframework called flask. I chose Flask because I felt it was
                        much quicker to learn and it is crazy customizable. It gave me the freedom to do everything I needed.
                        The Flask application serves my <a href="https://github.com/Minerest/watchout_frontend">React App</a>.
                    </p>
                    <p className="rez_paragraph" id="right_rez">The Flask backend acts as the API for the React frontend
                        sending the relevant crime data retrieved with AJAX calls and Promises.
                        The flask app makes a request to a MySQL database based on GPS coordinates and retrieves the
                        relevant crime data. That data is then turned into a JSON string and passed to the AJAX request.
                        The AJAX request then turns the JSON string and turns it into a javascript object. It is then interpreted
                        to an ordinary javascript object and the values are passed to the React components.
                        The react components then rerender to change the thermometer and the values up top giving you a
                        monthly rollup of how many crimes happen around that GPS coordinate.
                        The laptop is an ancient Toshiba that has been sitting in the garage for years, untouched.
                        Now, it runs my pride and joy.</p>
                </div>
                <div id='buttons'>
                    <button onClick={this.props.back_to_main}>Back to the index</button>
                    <button onClick={this.props.start_the_show}>The Watchout! App</button>
                </div>

            </div>
        );
    }
}