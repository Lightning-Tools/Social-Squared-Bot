const { Suggestion } = require('dialogflow-fulfillment')
const { Card, feedback } = require('../helpers/utils')

const feedbackSuggest = agent => {
  agent.add(new Suggestion('Cancel'))
  feedback(agent)
}

module.exports = agent => {
  const [title, imageUrl, msg] = agent.consoleMessages

  Card(agent, title, imageUrl)
  agent.add(msg)
  feedbackSuggest(agent)
}
