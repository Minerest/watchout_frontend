import React from "react";
import { Component } from 'react';
import { Spring, config } from 'react-spring/renderprops';
import { Button } from "@material-ui/core";
import { Header} from "./Header";

export class RezContainer extends Component {
    // The master container for the Resume Page.
    render(){
        return(
            <div>
                <div className="rez_header">
                    <Header text="Hi, I'm Eric." />
                    <Header text="This is how the site is made." />
                </div>
                <Spring from={{opacity:0}} to={{opacity:1}} config={config.slow}>
                    {props =>
                    <div id='resume_container' style={props}>
                        <div id='how_its_made'>
                            <p className="rez_paragraph" id="left_rez"> I have a laptop that's running Ubuntu 18.04
                                as the server for this React application. It's currently using <a href="https://www.nginx.com/">NGINX</a>
                                to run the Web Server. NGINX is a Web Server that communicates with a Python Gateway
                                called <a href="https://gunicorn.org/">GUINICORN</a> listening on an internal web socket.
                                That web socket communicates with my <a href="https://github.com/Minerest/gcp_hackathon_project">Python backend</a>.
                                The Python backend is running a microframework called flask.
                                The Flask application serves this <a href="https://github.com/Minerest/watchout_frontend">React App</a>.
                            </p>
                            <p className="rez_paragraph" id="right_rez">The Flask backend acts as the API for the React frontend
                                sending the relevant crime data retrieved with AJAX calls and Promises.
                                The flask app makes a request to a MySQL database based on GPS coordinates and retrieves the
                                relevant crime data. That data is then turned into a JSON string and passed to the AJAX request.
                                The AJAX request then turns the JSON string and into a javascript object where it is then interpreted
                                and the values are passed to the React components.
                                The react components then rerender to change the thermometer and the values up top giving you a
                                monthly rollup of how many crimes happen around that GPS coordinate.
                                The laptop is an ancient Toshiba that has been sitting in the garage for years, untouched.
                                Now, it runs my pride and joy.</p>
                        </div>
                        <div id='buttons'>
                            <Button variant="contained" color="primary" size="medium" onClick={this.props.back_to_main}>HOME</Button>
                            <Button variant="contained" color="primary" size="medium" onClick={this.props.start_the_show}>The Watchout! App</Button>
                        </div>
                    </div>}
            </Spring>
        </div>
        );
    }
}