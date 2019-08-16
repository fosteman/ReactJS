const {WebhookClient, Card, Suggestion} = require('dialogflow-fulfillment');

module.exports.processMessage = (request, respose) => {
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

