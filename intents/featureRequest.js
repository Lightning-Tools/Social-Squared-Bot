const { Suggestion } = require('dialogflow-fulfillment')
const { feedback } = require('../helpers/utils')
const { Email } = require('../sendGrid/send')
const Common = require('../database/models/common')
const Save = require('../database/save')

const feedbackSuggest = agent => {
  agent.add(new Suggestion('Cancel'))
  feedback(agent)
}

module.exports = agent => {
  const { consoleMessages, parameters } = agent

  agent.add(consoleMessages)
  feedbackSuggest(agent)

  Email('User Feature Request', parameters)
  Save(Common('FeatureRequests'), parameters)
}
