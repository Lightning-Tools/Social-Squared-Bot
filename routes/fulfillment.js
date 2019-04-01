const { WebhookClient } = require('dialogflow-fulfillment')

const {
  bugs,
  customization,
  documentation,
  download,
  fallback,
  featureRequest,
  feedback,
  onPrem,
  onPremDoubleHop,
  onPremFallback,
  onPremInstantMessaging,
  onPremLookAndFeel,
  onPremMobile,
  onPremReplyViaEmail,
  onPremTrial,
  onPremUpgrade,
  price,
  spfx,
  spfxFallback,
  spfxLookAndFeel,
  spfxMobile,
  support
} = require('../intents')

module.exports = app => {
  app.post('/', async (request, response) => {
    const agent = new WebhookClient({ request, response })

    let intentMap = new Map()

    intentMap.set('Default Fallback Intent', fallback)
    intentMap.set('ss.support', support)
    intentMap.set('ss.support-question', support)
    intentMap.set('ss.bugs', bugs)
    intentMap.set('ss.download', download)
    intentMap.set('ss.documentation', documentation)
    intentMap.set('ss.feature-request', featureRequest)
    intentMap.set('ss.customization', customization)
    intentMap.set('ss.price', price)
    intentMap.set('ss.price - yes', price)
    intentMap.set('ss.price - no', price)
    intentMap.set('ss.feedback', feedback)
    intentMap.set('ss.feedback - yes', feedback)
    intentMap.set('ss.feedback - no', feedback)
    intentMap.set('ss.feedback - do-not-know', feedback)
    intentMap.set('ss.on-prem', onPrem)
    intentMap.set('ss.on-prem - trial', onPremTrial)
    intentMap.set('ss.on-prem - double-hop', onPremDoubleHop)
    intentMap.set('ss.on-prem - look-and-feel', onPremLookAndFeel)
    intentMap.set('ss.on-prem - upgrade', onPremUpgrade)
    intentMap.set('ss.on-prem - reply-via-email', onPremReplyViaEmail)
    intentMap.set('ss.on-prem - instant-messaging', onPremInstantMessaging)
    intentMap.set('ss.on-prem - mobile', onPremMobile)
    intentMap.set('ss.on-prem - fallback', onPremFallback)
    intentMap.set('ss.spfx', spfx)
    intentMap.set('ss.spfx - look-and-feel', spfxLookAndFeel)
    intentMap.set('ss.spfx - mobile', spfxMobile)
    intentMap.set('ss.spfx - fallback', spfxFallback)

    agent.handleRequest(intentMap)
  })
}
