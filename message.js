const twilio = require("twilio");
require("dotenv").config();

const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
const myPhoneNumber = process.env.MY_PHONE_NUMBER;

const client = new twilio(accountSid, authToken);

function sendMessage(message, number){
  client.messages.create({
    body: message,
    to: '+1' + number,  
    from: '+1'+ twilioPhoneNumber 
  })
    .then((message) => console.log(message.sid));
}

sendMessage('YOUR PACKAGE HAS BEEN DELIVERED', myPhoneNumber)
