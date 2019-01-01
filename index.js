const express = require('express');
const bodyParser = require('body-parser');

const TelegramBot = require('node-telegram-bot-api');
const token = YOUR_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

const app = module.exports = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
// 1001381150945 id for Radhe Krishna channel.
const sendTracker = function (req, res, next) {
    const options = {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{ text: 'Order here', url: 't.me/Prateekagg' }],
                [{ text: 'Order on whatsapp', url: 'http://api.whatsapp.com/send?phone=+919897886503' }]
            ]
        })
    };
    bot.sendMessage(CHAT_ID, req.params.data, options).then(function (sended) {
        console.log('ssss', sended);
    });
    res.statusCode = 200;
    res.json({success: true});
}

app.use('/send-tracker/:data', sendTracker);

// Use environment defined port or 3000
var port = process.env.PORT || 9999;

// Start the server
app.listen(port);
console.log('Server starts on port ' + port);
