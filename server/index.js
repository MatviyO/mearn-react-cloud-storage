const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const authRouter = require('./routes/auth.routes')
const filehRouter = require('./routes/file.routes')
const fileUploader = require('express-fileupload')
const app = express()
const cors = require('cors')

const PORT = config.get("port");
const corsmiddleware = require('./middleware/cors.middleware')

app.use(fileUploader({}))
app.use(cors())
app.use(corsmiddleware)
app.use(express.json())
app.use(express.static('static'))
app.use('/api/auth', authRouter)
app.use('/api/files', filehRouter)


const start = async () => {
    try {
        await mongoose.connect(config.get("mongoUrl"), { useNewUrlParser: true, useUnifiedTopology: true })
        app.listen(PORT, () => {
            console.log(`Server has been started ${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}
start()
