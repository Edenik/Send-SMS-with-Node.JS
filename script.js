

const Nexmo = require('nexmo');
require('dotenv').config();


const message = 'message';
const number = '+972501234567'
const name = 'Eden Nahum'

const nexmoSettings = new Nexmo({
    apiKey: process.env.APIKEY,
    apiSecret: process.env.APISECRET,
});

const sendSms = (from , to ,msg) => {
    nexmoSettings.message.sendSms (from , to , msg, (err,result) => {
        err ? console.log(err) : console.log(result);
    })
}

sendSms(name, number, message);


