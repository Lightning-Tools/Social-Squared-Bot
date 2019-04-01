const { Suggestion, Image } = require('dialogflow-fulfillment')
const { Email } = require('../sendGrid/send')
const { Feedback } = require('../database/models/feedback')
const Save = require('../database/save')

const feedbackSuggestions = agent => {
  agent.add(new Suggestion('Yes'))
  agent.add(new Suggestion('I do not Know'))
  agent.add(new Suggestion('No'))
}

module.exports = agent => {
  const { consoleMessages, action } = agent

  switch (action) {
    case 'ss.feedback':
      agent.add(consoleMessages)
      feedbackSuggestions(agent)
      break
    case 'ss.feedback.yes':
      const [msg, imageUrl] = consoleMessages
      agent.add(msg)
      agent.add(new Image(imageUrl.text))

      Email('User Feedback', { Feedback: 'positive' })
      Save(Feedback, { Feedback: 'positive' })
      break
    case 'ss.feedback.no':
      agent.add(consoleMessages)

      Email('User Feedback', { Feedback: 'negative' })
      Save(Feedback, { Feedback: 'negative' })
      break
    case 'ss.feedback.dontKnow':
      agent.add(consoleMessages)

      Email('User Feedback', { Feedback: 'unknown' })
      Save(Feedback, { Feedback: 'unknown' })
      break
  }
}
