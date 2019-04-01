const { Card } = require('../helpers/utils')

module.exports = agent => {
  const [msg1, msg2, title, imageUrl] = agent.consoleMessages

  Card(agent, title.text, imageUrl.text)
  agent.add([msg1, msg2])
}
