const { Card } = require('../helpers/utils')

const upgradeCards = agent => {
  Card(
    agent,
    `Upgrading Social Squared Versions.`,
    'https://www.manula.com/manuals/lightning-tools/social-squared/9/en/topic/upgrading-the-social-squared-database-and-wsp'
  )
  Card(
    agent,
    `Upgrading from Social Squared 2010 to Social Squared 2013/2016/2019.`,
    'http://lightningtools.kayako.com/Knowledgebase/Article/View/50/16/upgrading-from-social-squared-2010-to-social-squared-2013'
  )
}

module.exports = agent => {
  upgradeCards(agent)

  const { consoleMessages, requestSource } = agent
  if (requestSource === 'FACEBOOK') {
    agent.add(consoleMessages)
  }
}
