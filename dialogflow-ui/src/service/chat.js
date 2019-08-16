require('dotenv').config({ path: 'variables.env' });

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const processMessage = require('./messageProcessor');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/chat', (req, res) => {
    const { message } = req.body;
    console.log('chat post log', req.body);
    processMessage(message);
});

app.set('port', process.env.PORT);
const server = app.listen(app.get('port'), () => {
    console.log(`Express running → PORT ${server.address().port}`);
});
