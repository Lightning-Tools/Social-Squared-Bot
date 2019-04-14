const { Card } = require('../helpers/utils')

const documentationLink = product => {
  switch (product) {
    case '2010':
      return 'https://www.manula.com/manuals/lightning-tools/social-squared-2010/9/en/topic/introduction'
    case '2013':
    case '2016':
    case '2019':
      return 'https://www.manula.com/manuals/lightning-tools/social-squared/9/en/topic/introduction'
    case 'SPFx':
      return 'https://lightningtools.com/product/social-squared-client-side-web-part'
  }
}

const documentationCard = (agent, { Product }) => {
  Card(
    agent,
    `Social Squared ${
      Product === 'SPFx' ? 'Client-Side Web Part' : Product
    } documentation page.`,
    documentationLink(Product),
    'Get It 👍'
  )
}

module.exports = agent => {
  const { consoleMessages } = agent

  documentationCard(agent, agent.parameters)
  agent.add(consoleMessages)
}
