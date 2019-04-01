const { Suggestion } = require('dialogflow-fulfillment')
const { hasParams, Card } = require('../helpers/utils')
const { Email } = require('../sendGrid/send')
const { Price } = require('../database/models/price')
const Save = require('../database/save')

const license = [
  'Licensing - Per WFE for On-Premises, and per User for Online. We can subscription or perpetual options.'
]

const price = ['Would you like to go to product pricing page?']

const pricingSuggestions = agent => {
  agent.add(new Suggestion('Yes'))
  agent.add(new Suggestion('No'))
}

const priceCard = (agent, { Product }) => {
  if (Product === 'SPFx') {
    Card(
      agent,
      `Social Squared Client Side Web Part pricing page.`,
      'https://lightningtools.com/social-squared-sharepoint-add-in-pricing',
      'Get Price'
    )
  } else {
    Card(
      agent,
      `Social Squared Web Part pricing page.`,
      'https://lightningtools.com/social-squared-sharepoint-web-part-pricing',
      'Get Price'
    )
  }
}

module.exports = agent => {
  const { consoleMessages, parameters } = agent

  switch (agent.action) {
    case 'ss.price':
      agent.add(license)
      agent.add(price)
      pricingSuggestions(agent)
      break
    case 'ss.price.yes':
      if (hasParams(agent)) {
        priceCard(agent, parameters)
        agent.add(consoleMessages)

        Email('Product Price', parameters)
        Save(Price, parameters)
      } else {
        agent.add(consoleMessages)
      }
      break
    case 'ss.price.no':
      agent.add(consoleMessages)
      break
    default:
      agent.add(consoleMessages)
      break
  }
}
