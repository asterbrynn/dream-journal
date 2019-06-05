import React, {Component} from 'react';

export default class CreateForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			date: "",
			text: ""
		}
	}

	handleChange = e => {
		let {value, name} = e.target;
		this.setState({
			[name]: value
		})
	}
	handleClick = () => {
		let newDream = this.state;
		this.props.createDream(newDream);
	}

	render() {
		return (
			<div style={{display: "flex",
				flexDirection: "column",
				alignItems: "flex-start",
				marginLeft: "14vw",
				marginBottom: "3vh"}}>
				<p style={{marginBottom: 0}}>
					<label htmlFor="date">Date: </label>
					<input
						style={{textAlign:"justify"}}
						type="text" name="date"
						placeholder=" e.g.: 1 June 2019"
						value={this.state.date}
						onChange={this.handleChange}/>
				</p>
				<p style={{textAlign: "justify"}}>
					<label htmlFor="text">Text: </label>
					<br/>
					<textarea
						style={{minWidth: "71vw",
							minHeight: "25vh",
							textAlign: "justify",
							fontFamily: "sans-serif"}}
						type="text" name="text"
						placeholder="Tell us about your dream."
						value={this.state.text}
						onChange={this.handleChange}/>
				</p>
				<div>
					<button onClick={this.handleClick}>Submit</button>
				</div>
			</div>
		)
	}
}