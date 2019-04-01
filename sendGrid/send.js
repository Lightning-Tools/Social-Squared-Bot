const { key, email, emailFrom, emailTo } = require('../config/keys')

exports.Email = (subject, { Product, Name, Email, Message, Feedback }) => {
  let body = ''

  if (Product) body += `<br/><b>Product:</b> ${Product}`
  if (Name) body += `<br/><b>Name:</b> ${Name}`
  if (Email) body += `<br/><b>Email:</b> ${Email}`
  if (Message) body += `<br/><b>Message:</b> ${Message}`
  if (Feedback) body += `<br/><b>Feedback:</b> ${Feedback}`

  email(key, emailFrom, emailTo, `Social Squared Chatbot - ${subject}`, body)
}
