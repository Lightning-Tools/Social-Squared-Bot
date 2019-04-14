const { Suggestion } = require('dialogflow-fulfillment')
const { Email } = require('../sendGrid/send')
const Common = require('../database/models/common')
const Save = require('../database/save')

const suggestions = agent => {
  agent.add(agent.consoleMessages)
  agent.add(new Suggestion('Ask Question'))
  agent.add(new Suggestion('Feature Request'))
  agent.add(new Suggestion('Bug Reporting'))
}

module.exports = agent => {
  const { parameters, action } = agent

  switch (action) {
    case 'ss.support':
      suggestions(agent)
      break
    case 'ss.support-question':
      agent.add(agent.consoleMessages)

      Email('User Question', parameters)
      Save(Common('Support'), parameters)
      break
  }
}
