const { Suggestion } = require('dialogflow-fulfillment')
const { hasParams, feedback } = require('../helpers/utils')
const { Email } = require('../sendGrid/send')
const Common = require('../database/models/common')
const Save = require('../database/save')

const feedbackSuggest = agent => {
  agent.add(new Suggestion('Cancel'))
  feedback(agent)
}

module.exports = agent => {
  const { consoleMessages, parameters } = agent

  if (hasParams(agent)) {
    agent.add(consoleMessages)
    feedbackSuggest(agent)

    Email('User Feature Request', parameters)
    Save(Common('FeatureRequests'), parameters)
  } else {
    agent.add(consoleMessages)
  }
}
