const { Card } = require('../helpers/utils')

module.exports = agent => {
  const [msg, title, imageUrl] = agent.consoleMessages

  Card(agent, title.text, imageUrl.text)
  agent.add(msg)
}
