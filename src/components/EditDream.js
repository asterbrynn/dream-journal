import React, {Component} from 'react';

export default class EditForm extends Component {
	constructor(props) {
		super(props);
		let {date, text} = props.dream;
		this.state = {
			date,
			text
		}
	}

	handleChange = e => {
		let {value, name} = e.target;
		this.setState({
			[name]: value
		})
	}
	handleClick = () => {
		let updatedDream = {...this.props.dream, ...this.state}
		this.props.updateDream(updatedDream);
		this.props.toggleEdit();
	}

	render() {
		return (
			<div style={{display: "flex",
				flexDirection: "column",
				alignItems: "flex-start"}}>
				<p style={{marginBottom: 0}}>
					<label htmlFor="date">Date: </label>
					<input
						style={{textAlign: "justify"}}
						type="text" name="date"
						placeholder=" e.g.: 1 June 2019"
						value={this.state.date}
						onChange={this.handleChange}/>
				</p>
				<p style={{textAlign: "justify"}}>
					<label htmlFor="text">Text: </label>
					<textarea
						style={{minWidth: "69vw",
							minHeight: "25vh",
							textAlign: "justify",
							fontFamily: "sans-serif"}}
						type="text" name="text"
						placeholder="Tell us about your dream"
						value={this.state.text}
						onChange={this.handleChange}/>
				</p>
				<button onClick={this.handleClick}>Update</button>
			</div>
		)
	}
}