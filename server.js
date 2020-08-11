const express = require('express')
const WebSocket = require('ws')
const port = 3000

const server = express().listen(port, () => console.log(`Listening on ${port}`))

const wss = new WebSocket.Server({ server });

wss.on('connection', ws => {
    console.log('Client connected')

    ws.on('close', () => {
        console.log('Close connected')
    })
});