let {id, dreams} = require('./DreamList.js');

module.exports = {
	read: (req, res) => res.send(dreams),
	create: (req, res) => {
		let newDream = req.body;
		newDream.id = id++;
		dreams.push(newDream);
		res.send(dreams);
	},
	update: (req, res) => {
		let {id} = req.params;
		let updatedDream = req.body;
		updatedDream.id = +id;
		let i = dreams.findIndex(dream => +dream.id === +id);
		dreams.splice(i, 1, updatedDream);
		res.send(dreams);
	},
	delete: (req, res) => {
		let {id} = req.params;
		let i = dreams.findIndex(dream => +dream.id === +id);
		dreams.splice(i, 1);
		res.send(dreams);
	}
}