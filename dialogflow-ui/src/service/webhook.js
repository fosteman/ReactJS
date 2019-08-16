require('dotenv').config({ path: 'variables.env' });

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const {WebhookClient, Card, Suggestion} = require('dialogflow-fulfillment');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const processMessage = (request, respose) => {
    const agent = new WebhookClient({ request, respose });
    console.log('Dialogflow Request body: ' + JSON.stringify(agent));


    function welcome(agent) {
        agent.add(`Welcome to my agent!`);
        agent.add(new Suggestion(`Example suggestion`));
    }

    let intentMap = new Map();
    intentMap.set('Welcome', welcome);
    agent.handleRequest(intentMap);
};

app.post('/', (req, res) => {
    console.log('chat post log', req.body);
    processMessage(req, res);
});

app.set('port', process.env.PORT);

const server = app.listen(app.set('port'), () => {
    console.log(`Express running → PORT ${server.address().port}`);
});
