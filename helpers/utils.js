const { Card, Suggestion } = require('dialogflow-fulfillment')

exports.on_prem_fallback = on_prem_fallback = 'ss_on-prem-fallback'
exports.spfx_fallback = spfx_fallback = 'spfx_fallback'

exports.setContext = setContext = (agent, name, lifespan) => {
  agent.context.set({
    name,
    lifespan
  })
}

exports.hasParams = agent => Object.keys(agent.parameters).length > 0

exports.hasContext = hasContext = (agent, name) =>
  agent.contexts.find(c => c.name === name)

exports.feedback = agent => agent.add(new Suggestion('Leave a Feedback?'))

exports.Card = (agent, title, buttonUrl, buttonText = 'Go To Page') => {
  agent.add(
    new Card({
      title,
      imageUrl:
        'https://scontent.fevn1-1.fna.fbcdn.net/v/t1.0-9/52993325_613324812496588_8846103947820138496_n.png?_nc_cat=110&_nc_ht=scontent.fevn1-1.fna&oh=30b1ff484f1da6c2acefa43eecfb8d8f&oe=5D190143',
      text:
        'Social Squared has all of the features you expect from a world class forum tool.',
      buttonText,
      buttonUrl
    })
  )
}

exports.Fallback = (agent, name, fallback) => {
  if (hasContext(agent, name)) {
    agent.setFollowupEvent('Fallback')
  } else {
    agent.add(fallback)
    agent.add('Or')

    agent.add(new Suggestion('Ask Support'))
    hasContext(agent, 'ss_on-prem')
      ? agent.add(new Suggestion('Client-Side Web Part'))
      : agent.add(new Suggestion('On-Premises'))
  }

  setContext(agent, name, 1)
}
