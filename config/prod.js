module.exports = {
  key: process.env.SENDGRID_API_KEY,
  mongoURI: process.env.MONGO_URI,
  emailFrom: process.env.EMAIL_FROM,
  emailTo: process.env.EMAIL_TO,
  email: require('../sendGrid/email_heroku')
}
