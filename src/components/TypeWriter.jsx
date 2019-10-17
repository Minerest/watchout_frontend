import React from 'react';

export class TypeWriter extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			content: this.props.content, // array of content to iterate over
			timeout_id: null,
			current_text: "",
		};
		this.text_index = 0;
		this.forward = true; // toggles going backwards and forwards
		this.pause_duration = false;
		this.content_index = 0;
		this.current_string = this.props.content[this.content_index];
		this.set_text_timeout = this.set_text_timeout.bind(this);
		this.set_current_text = this.set_current_text.bind(this);
	}

	componentDidMount(){
		this.set_text_timeout();
	}

	set_text_timeout(){
		const timeout_duration = 100;
		if (this.pause_duration > 0){
			clearTimeout(this.state.timeout_id);
			this.setState({timeout_id: setTimeout(() => {this.pause_duration = 0} , this.pause_duration)});
		}
		clearTimeout(this.state.timeout_id);
		this.set_current_text();
		this.state.timeout_id = setInterval(this.set_text_timeout, timeout_duration);
	}

	set_current_text(){

		let len = this.state.content[this.content_index].length;
		let cur_text;
		this.text_index = this.forward ? this.text_index + 1 : this.text_index - 1;
		console.log(this.text_index);
		if (this.text_index <= len && this.forward){
			cur_text = this.current_string.substring(0, this.text_index);
			// console.log(cur_text);
			this.setState({
				current_text: cur_text
			});
		}
		else {
			if (this.forward){
				this.forward = !this.forward;
				this.pause_duration = 3000;
			}
			else if (!this.forward && this.text_index > 0){
				cur_text = this.current_string.substring(0, this.text_index);
				console.log("REVERSE: " + cur_text);
				this.setState({current_text: cur_text});
			}
			else {
				this.forward = !this.forward;
				this.text_index = 0;
				this.pause_duration = 450;
				this.content_index++;
				if(this.content_index >= this.state.content.length){
					this.content_index = 0;
				}
				this.current_string = this.state.content[this.content_index];
			}
		}

		// else if (this.state.current_text > len && this.forward){
		// 	this.forward = !this.forward;
		// 	this.pause_duration = 3000;
		// }
		// else if (!this.forward && this.state.current_text > 0){
		// 	cur_text = this.current_string.substring(0, this.text_index);
		// 	console.log("REVERSE: " + cur_text);
		// 	this.setState({cur_text: cur_text});
		// }
		// else {
		// 	this.forward = !this.forward;
		// 	this.text_index = 0;
		// 	this.pause_duration = 450;
		// 	this.content_index++;
		// 	if(this.content_index >= this.state.content.length){
		// 		this.content_index = 0;
		// 	}
		// 	this.current_string = this.state.content[this.content_index];
		// }

	}

	render(){
		return (
			<p id="TypeWriter">{this.state.current_text}</p>
		)
	}
}