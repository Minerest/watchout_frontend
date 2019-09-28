import React from "react";
import { Component } from 'react';
import { Spring, config } from 'react-spring/renderprops';
import { Button } from "@material-ui/core";
import { Header} from "./Header";
import avatar from "../avatar.png";

export class RezContainer extends Component {
    // The master container for the Resume Page.
    render(){
        return(
            <div>
                {/*<div className="rez_header">*/}
                {/*</div>*/}
                <div id="avatar_div">
                    <div className="rez_header"><Header text="The Watchout! Writeup" /> </div>
                    <Spring from={{opacity:0}} to={{opacity:1}} config={config.slow}>
                        {props => (
                         <div id="avatar_frame">
                            <img alt="avatar" src={avatar} style={props} id="avatar"/>
                         </div>
                        )}
                    </Spring>
                </div>
                <Spring from={{opacity:0}} to={{opacity:1}} config={config.slow}>
                    {props =>
                    <div id='resume_container' style={props}>
                        <span className="home_button">
                            <Button variant="contained" color="primary" size="medium" onClick={this.props.back_to_main}>HOME</Button>
                        </span>
                        <Button variant="contained" color="primary" size="medium" onClick={this.props.start_the_show}>The Watchout! App</Button>
                        <div id='how_its_made'>
                            <p className="rez_paragraph" id="left_rez"> I have a laptop that's running Ubuntu 18.04
                                as the server for this React application. It's currently
                                using <a href="https://www.nginx.com/">NGINX</a> to run the Web Server.
                                NGINX is a Web Server that communicates with a Python Gateway
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
                            <div>
                                <span className="rez_header"><Header text="Origin Story" /></span>
                                <p className="rez_paragraph">
                                    This app began during a CSUSB Hackathon. Several teams of 5 students paired up together
                                    to create something great. Before the Hackathon, I already had a team in mind. I went
                                    out and recruited some of the smartest people I knew from class and convinced them
                                    to go out on a Friday night to begin creating something.
                                </p>
                                <p className="rez_pagagraph">
                                    The timeline for the Hackathon was vast. From 6pm on a Friday night all the way until
                                    noon the next day. Wasn't the easiest thing convincing a couple of students that we
                                    should spend our Friday night at school and spend the Saturday night recovering.
                                    The theme for the Hackathon was "Create something that can improve the city."
                                    That's pretty vague.
                                </p>
                                <p>
                                   So we spent a couple of hours just brainstorming bad ideas and finally picked something
                                   that we thought was pretty tight. We would create an app the monitored crime and we got
                                   started. I started on the Python Backend. But first we needed data!
                                </p>
                                <p>
                                    So I wrote a script in Visual Basic within Excel to steal data from a random Crime Watchers website.
                                    Seemed legit. We grabbed data for the city of San Bernardino and stored it in a CSV file.
                                    I then converted that CSV file to a JSON file with crime:coordinate pairs. Every time
                                    a request was made with the URL parameters, I would open the file, match the closest
                                    coordinate pair I received and sent out a small JSON tidbit of data.
                                </p>
                                <p>
                                    The front end was designed with Android Studio and towards the end of the hackathon,
                                    we had a working, functional app! All of us were crazy excited. Everything was working
                                    flawlessly, although unoptimized. We all had to present our ideas in front of a set
                                    of judges and when it became our turn to present, we were ready. We plugged in the HDMI
                                    into my laptop, running an Ubuntu derivitive, and......... No output.
                                </p>
                                <p>
                                    We spent our 5 minutes of fame in front of the audience trying to debug why the HDMI
                                    wasn't outputting when one of us realized the app was no longer sending data back to the phone.
                                    Our app CRASHED! The whole laptop was unresponsive. While trying debug what was going on,
                                    each of us took turns on the mic talking about how the app was built, our pitfalls,
                                    and some things that came to light while developing.
                                </p>
                                <p>
                                    After the Hackathon, a couple of us continued to develop the app because we were so
                                    pationate about the idea. I eventually created a database, a webserver, better backend
                                    functionality, and optimized it as much I could. Towards the end of the summer, I decided
                                    I wanted to write a front-end to this app as well so I built it with ReactJS!
                                </p>
                            </div>
                        </div>
                        <div id='buttons'>
                            <span className="home_button"><Button variant="contained" color="primary" size="medium" onClick={this.props.back_to_main}>HOME</Button></span>
                            <Button variant="contained" color="primary" size="medium" onClick={this.props.start_the_show}>The Watchout! App</Button>
                        </div>
                    </div>}
                </Spring>
            </div>
        );
    }
}