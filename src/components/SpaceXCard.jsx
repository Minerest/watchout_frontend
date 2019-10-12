import React from "react";

export class SpaceXCard extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            img_id: 1
        };
        this.update_img_id = this.update_img_id.bind(this);
    }

    update_img_id(){
        let indx = this.state.img_id + 1;
        if ( this.props.launch.links.flickr_images.length === indx){
            indx = 0;
        }
        this.setState({
            img_id: indx
        });
    }

    render() {
        return (
            <div className="spacex_card" onClick={this.update_img_id} key={this.props.key}>
                <h2>{this.props.launch.mission_name}</h2>
                <img src={this.props.launch.links.flickr_images[this.state.img_id]}/>
                <p>{this.props.launch.details}</p>
            </div>
        )
    }
}