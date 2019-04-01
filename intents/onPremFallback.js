const { Fallback, on_prem_fallback } = require('../helpers/utils')

const fallback = ({ requestSource }) => {
  const sep = requestSource === 'SKYPE' ? '<br />' : '\n'

  return [
    `1.Look and Feel ${sep}2.Double-Hope issue ${sep}3.Instant Messaging ${sep}4.Mobile ${sep}5.Reply Via Email ${sep}6.Upgrade versions ${sep}7.License Activation`
  ]
}

module.exports = agent => {
  agent.add(agent.consoleMessages)
  Fallback(agent, on_prem_fallback, fallback(agent))
}
