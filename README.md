#TWILIO SET UP
https://www.twilio.com/try-twilio
Must sign up for an account to get a accountSID (Account Secret ID) and AuthToken and a Twilio number

npm i twilio

Add the accountSID, AuthToken, and TwilioNumber in .env .

#Backend
Bring in these environment variables so that you can use them most likely in your controller.

Bring in twilio and invoke it immediately with accountSID and authToken, respectively, and save this to a variable 

Invoke the create method on the newly created variable object (newVariable.messages.create)
Pass in the body, from and to properties inside an object. 

It'll return a promise. Do something with that info and send something back to the frontend. 
