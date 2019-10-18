import React from 'react';

export class TypeWriter extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			content: this.props.content, // array of content to iterate over
			current_text: "",
		};
		this.interval_id = null;
		this.pause_timeout = null;
		this.text_index = 0;
		this.forward = true; // toggles going backwards and forwards
		this.pause_duration = false;
		this.content_index = 0;
		this.current_string = this.props.content[this.content_index];
		this.set_text_timeout = this.set_text_timeout.bind(this);
		this.set_current_text = this.set_current_text.bind(this);
		this.set_pause_interval = this.set_pause_interval.bind(this);
	}

	componentDidMount(){
		this.set_text_timeout();
	}

	componentWillUnmount() {
		clearInterval(this.interval_id);
		clearTimeout(this.pause_timeout);
	}

	set_pause_interval(){
		this.pause_duration = 0;
		this.set_text_timeout();
	}

	set_text_timeout(){
		const timeout_duration = 120;
		if (this.pause_duration > 0){
			clearInterval(this.interval_id);
			this.pause_timeout = setTimeout(this.set_pause_interval, this.pause_duration);
		}
		else {
			clearInterval(this.interval_id);
			this.interval_id = setInterval(this.set_current_text, timeout_duration);
		}
	}

	set_current_text(){
		let len = this.state.content[this.content_index].length;
		let cur_text;
		this.text_index = this.forward ? this.text_index + 1 : this.text_index - 1;
		if (this.text_index <= len && this.forward){
			cur_text = this.current_string.substring(0, this.text_index);
			this.setState({current_text: cur_text});
			return;
		}

		if (this.forward){
			this.forward = !this.forward;
			this.pause_duration = 1500;
			clearInterval(this.interval_id);
			this.set_text_timeout();
			return;
		}
		else if (!this.forward && this.text_index >= 0){
			cur_text = this.current_string.substring(0, this.text_index);
			this.setState({current_text: cur_text});
		}
		else {
			this.forward = !this.forward;
			this.text_index = 0;
			this.pause_duration = 450;
			this.content_index++;
			if (this.content_index >= this.state.content.length){
				this.content_index = 0;
			}
			this.current_string = this.state.content[this.content_index];
			clearInterval(this.interval_id);
			this.set_text_timeout();
		}

	}

	render(){
		return (<p id="type_writer">{this.state.current_text}</p>)
	}
}
