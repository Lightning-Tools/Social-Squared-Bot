const { hasParams } = require('../helpers/utils')
const { Email } = require('../sendGrid/send')
const Common = require('../database/models/common')
const Save = require('../database/save')

module.exports = agent => {
  const { consoleMessages, parameters } = agent

  if (hasParams(agent)) {
    agent.add(consoleMessages)

    Email('User Customization', parameters)
    Save(Common('Customizations'), parameters)
  } else {
    agent.add(consoleMessages)
  }
}
