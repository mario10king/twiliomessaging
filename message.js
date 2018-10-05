var twilio = require("twilio");
require("dotenv").config();

var accountSid = process.env.ACCOUNT_SID; 
var authToken = process.env.AUTH_TOKEN;  
var twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;  
var myPhoneNumber = process.env.MY_PHONE_NUMBER;  

var client = new twilio(accountSid, authToken);

function message(message, number){
  client.messages.create({
    body: message,
    to: '+1' + number,  
    from: '+1'+ twilioPhoneNumber 
  })
    .then((message) => console.log(message.sid));
}

message('YOUR PACKAGE HAS BEEN DELIVERED', myPhoneNumber)
