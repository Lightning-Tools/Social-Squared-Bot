This is [Lightning Tools](https://lightningtools.com) [Social Squared Forums ](https://lightningtools.com/product/social-squared)  chatbot based on [DialogFlow](https://dialogflow.com/) which is Google-owned developer of human-computer interaction technologies based on natural language conversations. The chatbot works in multiple integrations; Facebook, Telegram, Viber, Skype, Slack etc. supporting rich messages such as Cards, Images, Quick Replies with no platform detection code.

We demonstrate the chatbot on Facebook Messenger, Skype and Microsoft Teams. You can read about the chatbot integration with Facebook Messenger, publishing on Facebook and registering it on [Microsoft bot framework](https://dev.botframework.com/bots) to set up Skype integration.

To get started.
```
       Clone the repository
       
       https://github.com/Lightning-Tools/Social-Squared-Bot.git
       cd Social-Squared-Bot

       # install dependencies
       npm install OR yarn install
       
       # serve with hot reload at localhost:5000
       npm run dev OR yarn run dev
       
```   
Use [ngrok](https://ngrok.com/) to run fulfillment locally serving local http to public https or publish it on Heroku (more on How to run Social Squared Chatbot page).

The app stores data (support questions, feature requests etc.) to [mlab](https://mlab.com/) which is a fully managed cloud database service that hosts MongoDB databases.

[SendGrid](https://sendgrid.com/) is a cloud-based SMTP provider that allows you to send emails without having to maintain email servers. It is our app's SMTP provider to send emails to support (support questions, feature requests etc.).

Note, you should create dev.js file for local development in config folder https://github.com/Lightning-Tools/Social-Squared-Bot/tree/master/config based on the given dev-sample.js file https://github.com/Lightning-Tools/Social-Squared-Bot/blob/master/config/dev-sample.js file.


Go to [Social Squared Chatbot Video](https://vimeo.com/327730469) page

Go to [How to run Social Squared Chatbot](https://lightning-tools.github.io/Social-Squared-Bot/) page 

Go to [Social Squared Chatbot Description ](https://lightning-tools.github.io/Social-Squared-Bot/description/) page 

