import React, {Component} from 'react';
import axios from 'axios';
import Dream from './Dream';
import CreateForm from './CreateNew';

export default class List extends Component {
	constructor() {
		super();
		this.state = {
			dreams: []
		}
	}

	componentDidMount() {
		axios.get('/api/dreams').then(res => {
			this.setState({
				dreams: res.data
			})
		}).catch(err => console.log("get error:", err))
	}
	createDream = newDream => {
		axios.post('/api/dreams', newDream).then(res => {
			this.setState({
				dreams: res.data
			})
		}).catch(err => console.log("post error:", err))
	}
	updateDream = dream => {
		axios.put(`/api/dreams/${dream.id}`, dream).then(res => {
			this.setState({
				dreams: res.data
			})
		}).catch(err => console.log("put error:", err))
	}
	deleteDream = id => {
		axios.delete(`/api/dreams/${id}`).then(res => {
			this.setState({
				dreams: res.data
			})
		}).catch(err => console.log("delete error:", err))
	}

	render() {
		return (
			<div>
				{this.state.dreams.map(dream => {
					return (
						<Dream
						key={dream.id}
						dream={dream}
						updateDream={this.updateDream}
						deleteDream={() => this.deleteDream(dream.id)}/>
						)
					})}
				<CreateForm createDream={this.createDream}/>
			</div>
		)
	}
}