import React from 'react';
import { Spring } from 'react-spring/renderprops';

export class DropdownMenu extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            open: true,
        }
        this.list_items = this.props.items.map(item => <li>{item}</li>);
        this.handleClick = this.handleClick.bind(this);
        this.closed_height = 50; // in pixels
        this.open_height = 200; // in pixels

    }

    handleClick(){
        this.setState({open:!this.state.open});
    }

    calculateHeight(){

    }

    render() {

        if (this.state.open) {
            return (
            <Spring from={{height: this.closed_height, opacity:.5}} to={{height:this.open_height, opacity: .9}}>
                {props => (
                    <div className="dropdown_menu open" style={{"height": props.height}} onClick={this.handleClick}>
                        <h2>Skills</h2>
                        <ul style={{"opacity": props.opacity}}>{this.list_items}</ul>
                    </div>
                )}
            </Spring>
            )
        }
        else {
            return (
                <Spring from={{height: this.open_height, opacity:.9}} to={{height: this.closed_height, opacity:.5}}>
                    { props =>
                        (<div style={props} className="dropdown_menu closed" onClick={this.handleClick}><h2>Skills</h2></div>)
                    }
                </Spring>

            )
        }
    }
}