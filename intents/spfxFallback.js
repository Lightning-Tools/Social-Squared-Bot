const { Fallback, spfx_fallback } = require('../helpers/utils')

const fallback = ({ requestSource }) => {
  const sep = requestSource === 'SKYPE' ? '<br />' : '\n'

  return [
    `1.Look and Feel ${sep}2.Microsoft Teams ${sep}3.Mobile ${sep}4.Modern Sites`
  ]
}

module.exports = agent => {
  agent.add(agent.consoleMessages)
  Fallback(agent, spfx_fallback, fallback(agent))
}
