var helper = require('sendgrid').mail

module.exports = (key, from, to, subject, html) => {
  const content = new helper.Content('text/html', html)
  const mail = new helper.Mail(
    new helper.Email(from),
    subject,
    new helper.Email(to),
    content
  )
  const sg = require('sendgrid')(key)
  const request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON()
  })

  sg.API(request, (error, response) => {
    if (error) {
      console.log('SendGrid Error:', error)
    }
  })
}
