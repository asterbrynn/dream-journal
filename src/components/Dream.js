import React, {Component} from 'react';
import EditForm from './EditDream';

export default class Dream extends Component {
	constructor(props) {
		super(props);
		this.state = {
			edit: false
		}
	}
	toggleEdit = () => {
		this.setState({
			edit: !this.state.edit
		})
	}
	render() {
		let {dream} = this.props;
		return (
			<div style={{border: "2px solid #669933",
					margin: "3vh 12vw",
					padding: "2vh"}}>
				<div style={{display: "flex",
					justifyContent: "space-between"}}>
					{this.state.edit ?
						<button onClick={this.toggleEdit}>Cancel</button>
						: <button onClick={this.toggleEdit}>Edit</button>
					}
					<button onClick={this.props.deleteDream}>Delete</button>
				</div>
				{this.state.edit ?
					<EditForm
						dream={dream} toggleEdit={this.toggleEdit}
						updateDream={this.props.updateDream}/>
					: <div>
						<p style={{marginTop: 0}}>{dream.date}</p>
						<p style={{marginTop: 0, marginBottom: "1vh",
							textAlign: "justify",
							textIndent: "5vw"}}>{dream.text}</p>
					</div>
				}
			</div>
		)
	}
}