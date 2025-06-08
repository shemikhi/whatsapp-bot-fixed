const { Client, LocalAuth } = require('whatsapp-web.js');
const express = require('express');
const qrcode = require('qrcode');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Ensure public directory exists
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
}

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        headless: true,
    }
});

client.on('qr', async (qr) => {
    console.log('QR RECEIVED');
    console.log('QR DATA:', qr);
    await qrcode.toFile('./public/qr.png', qr);
    console.log('QR code saved at ./public/qr.png');
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', message => {
    if (message.body.toLowerCase() === 'hi') {
        message.reply('Hello! 👋');
    } else if (message.body.toLowerCase() === 'help') {
        message.reply('How can I help you?');
    }
});

client.initialize();

app.use('/qr', express.static('public'));

app.get('/', (req, res) => {
    res.send('<h2>Bot is running. <a href="/qr/qr.png">Scan QR Code</a></h2>');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});