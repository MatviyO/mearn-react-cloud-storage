const express = require('express')
const mongoose = require('mongoose')
const config = require('config')

const app = express()

const PORT = config.get("port");

const start = async () => {
    try {
        await mongoose.connect(config.get("mongoUrl"))
        app.listen(PORT, () => {
            console.log(`Server has been started ${PORT}`)
        })
    } catch (e) {

    }
}
start()
