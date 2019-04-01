const sgMail = require('@sendgrid/mail')

module.exports = (key, from, to, subject, html) => {
  sgMail.setApiKey(key)
  const msg = {
    to,
    from,
    subject,
    html
  }
  sgMail.send(msg)
}
