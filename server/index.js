require('dotenv').config()
const {SERVER_PORT} = process.env
const ctrl = require('./controller')
const express = require('express')
const app = express()
app.use(express.json())
app.post('/api/sendSMS',ctrl.sendSMS)
app.listen(SERVER_PORT, ()=>console.log(`Keep it up on ${SERVER_PORT}`))