import React from "react";
import { Component } from 'react';
import './../index.css';
import {SimpleMap} from "./SimpleMap";
import {DataView} from "./DataView";
import {Watchout} from "./Header";
import {Thermometer} from "./Thermometer";
import { Spring, config } from 'react-spring/renderprops';

export class WatchoutContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            side_div: "20%",
            f: null,
            Description: "Loading...",
            resp_for_banner: "",
            Date: "",
            Coords: "",
            should_banner_load: false,
            first_load: true,
            danger_rating: {
                last: 0,
                cur: 0
            },
            crime_stats: {
                assault: 0,
                murder: 0,
                theft: 0,
                robbery: 0,
                other: 0
            },
            last_crime_stats: {
                assault: 0,
                murder: 0,
                theft: 0,
                robbery: 0,
                other: 0
            }
        };


        this.update_dataview = this.update_dataview.bind(this);
        this.get_danger_rating = this.get_danger_rating.bind(this);
        this.update_banner = this.update_banner.bind(this);
        this.banner_wrapper = this.banner_wrapper.bind(this);
    }

    banner_timeout(){

        if (this.state.should_banner_load){
            //this.setState({first_load: false});
            setInterval(() => {
                let n = Math.floor(Math.random() * this.state.resp_for_banner.length);
                let obj = this.state.resp_for_banner[n];
                console.log(obj);
                console.log("HERE");
                this.setState({
                    Date: obj.date,
                    Coords: obj.latitude + ", " + obj.longitude,
                    Description: obj.description
                });
            }, 2500);
        }
    }

    get_danger_rating(){
        return this.state.danger_rating;
    }

    calc_danger_rating(){

        let danger_rating = 0;
        danger_rating += this.state.crime_stats.assault * .8;
        danger_rating += this.state.crime_stats.murder * 20;
        danger_rating += this.state.crime_stats.theft * .5;
        danger_rating += this.state.crime_stats.robbery * .7;
        danger_rating += this.state.crime_stats.other * .2;

        if (danger_rating > 100){
            danger_rating = 100;
        }
        this.setState({
            last_danger_rating: this.state.danger_rating,
            danger_rating: danger_rating
        });

    }

    update_dataview = data => {
        this.setState({
            last_crime_stats: this.state.crime_stats,
            crime_stats : data
        });
        this.calc_danger_rating();
    };

    banner_wrapper(res){
        this.setState({
            resp_for_banner: res
        });
    }

    update_banner = (res) => {

        this.banner_wrapper(res);
        if (this.state.first_load){
            return;
        }

        this.setState({
            should_banner_load: true,
            first_load: true
        });

        this.banner_timeout();

    };

    render(){
        let custom_configs = config.gentle
        custom_configs.duration = 450;
        return(
           <Spring
               from={{opacity:0, marginTop:500}} to={{opacity:1, marginTop:0}}
               config={custom_configs}
           >
               {props =>
                   <div className="master_container" style={props}>
                       <div className="watchout"><Watchout/></div>
                       <button onClick={this.props.back_to_main}> BACK IT UP!</button>
                       <div className="that_div">
                           <div>
                               <div className="data">
                                   <DataView last_d={this.state.last_crime_stats} d={this.state.crime_stats} amount_of_entries="3"/>
                               </div>
                               <div className="thermodiv">
                                   <Thermometer danger_rating={this.state.danger_rating}/>
                               </div>
                           </div>
                       </div>

                       <div className="maps_container">
                           <SimpleMap update={this.update_dataview} update_banner={this.update_banner}/>
                           <div id={"banner"}>
                               <p>{this.state.Description}</p>
                               <p>{this.state.Date}</p>
                               <p>{this.state.Coords}</p>
                           </div>
                       </div>
                   </div>
               }
               </Spring>
        )
    }
}