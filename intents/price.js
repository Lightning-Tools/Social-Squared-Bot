const { Suggestion } = require('dialogflow-fulfillment')
const { Card } = require('../helpers/utils')
const { Email } = require('../sendGrid/send')
const { Price } = require('../database/models/price')
const Save = require('../database/save')

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
  const { consoleMessages, parameters, action } = agent

  switch (action) {
    case 'ss.price':
      agent.add(consoleMessages)
      pricingSuggestions(agent)
      break
    case 'ss.price.yes':
      priceCard(agent, parameters)
      agent.add(consoleMessages)
      Email('Product Price', parameters)
      Save(Price, parameters)
      break
    case 'ss.price.no':
      agent.add(consoleMessages)
      break
  }
}
