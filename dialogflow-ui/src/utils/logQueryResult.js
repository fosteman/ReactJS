export function logQueryResult(sessionClient, result) {
    // Imports the Dialogflow library
    const dialogflow = require('dialogflow');

    // Instantiates a context client
    const contextClient = new dialogflow.ContextsClient();

    console.log(`  Query: ${result.queryText}`);
    console.log(`  Response: ${result.fulfillmentText}`);
    if (result.intent) {
        console.log(`  Intent: ${result.intent.displayName}`);
    } else {
        console.log(`  No intent matched.`);
    }
    const parameters = JSON.stringify(struct.decode(result.parameters));
    console.log(`  Parameters: ${parameters}`);
    if (result.outputContexts && result.outputContexts.length) {
        console.log(`  Output contexts:`);
        result.outputContexts.forEach(context => {
            const contextId = contextClient.matchContextFromContextName(context.name);
            const contextParameters = JSON.stringify(
                struct.decode(context.parameters)
            );
            console.log(`    ${contextId}`);
            console.log(`      lifespan: ${context.lifespanCount}`);
            console.log(`      parameters: ${contextParameters}`);
        });
    }
}
