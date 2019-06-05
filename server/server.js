const express = require('express');
const app = express();
const port = 8008;
const DreamCtrl = require('./controllers/DreamCtrl.js');

app.use(express.json());

app.get('/api/dreams', DreamCtrl.read);
app.post('/api/dreams', DreamCtrl.create);
app.put('/api/dreams/:id', DreamCtrl.update);
app.delete('/api/dreams/:id', DreamCtrl.delete);

app.listen(port, () => console.log(`${port} ducks marching on Rome`))