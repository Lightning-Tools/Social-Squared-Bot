module.exports = async (coll, { Product, Name, Email, Message, Feedback }) => {
  const doc = new coll({})

  if (Product) doc.product = `Social Squared ${Product}`
  if (Name) doc.name = Name
  if (Email) doc.email = Email
  if (Message) doc.message = Message
  if (Feedback) doc.feedback = Feedback

  await doc.save()
}
