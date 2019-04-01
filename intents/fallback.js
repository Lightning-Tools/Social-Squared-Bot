const { Suggestion } = require('dialogflow-fulfillment')
const {
  setContext,
  hasContext,
  feedback,
  on_prem_fallback,
  spfx_fallback
} = require('../helpers/utils')

const ss_fallback = 'ss_fallback'

const products = agent => {
  agent.add(new Suggestion('On-Premises'))
  agent.add(new Suggestion('Client-Side Web Part'))

  if (hasContext(agent, on_prem_fallback) || hasContext(agent, spfx_fallback)) {
    feedback(agent)
  }
}

module.exports = agent => {
  const [msg1, msg2] = agent.consoleMessages

  agent.add(msg1)
  if (!hasContext(agent, ss_fallback)) {
    agent.add(msg2)
    products(agent)
  }

  hasContext(agent, ss_fallback)
    ? setContext(agent, ss_fallback, 0)
    : setContext(agent, ss_fallback, 2)
}
