const { hasParams, Card } = require('../helpers/utils')
const { Email } = require('../sendGrid/send')
const { Download } = require('../database/models/download')
const Save = require('../database/save')

let products = ['2010', '2013', '2016', '2019', 'SPFx']

const downloadLink = product => {
  if (product === '2019') product = '2016'
  switch (product) {
    case '2010':
    case '2013':
    case '2016':
      return `https://lightningtools.com/download-center/download-info/social-squared-${product}-enterprise-discussion-forum-web-part`
    case 'SPFx':
      return 'https://lightningtools.com/download-center/download-info/social-squared-spfx-client-side-web-part'
  }
}

const downloadCards = agent => {
  for (let i = 0; i < 5; i++) {
    Card(
      agent,
      `Social Squared ${
        products[i] === 'SPFx' ? 'Client-Side Web Part' : products[i]
      } download page.`,
      downloadLink(products[i]),
      'Download 👍'
    )
  }
}

module.exports = agent => {
  const { consoleMessages, parameters, requestSource } = agent

  if (hasParams(agent)) {
    downloadCards(agent)

    if (requestSource === 'FACEBOOK') {
      agent.add(consoleMessages)
    } else {
      const [msg1, msg2, msg3] = consoleMessages
      agent.add([msg2, msg3])
    }

    Email('User Download', parameters)
    Save(Download, parameters)
  } else {
    agent.add(consoleMessages)
  }
}
