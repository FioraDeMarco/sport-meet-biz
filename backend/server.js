const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()

app.use(express.json())

const uri = process.env.ATLAS_URI

async function connect() {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        const connection = mongoose.connection;
        connection.once('open', () => {
            console.log('Connected to MongoDB')
        })
    } catch (error) {
        console.log('error connecting to mongodb', error)
    }
}

connect()

// app.use('/', )


const profileRouter = require('./routes/sportMeetBiz.route')
app.use('/profiles', profileRouter)


app.listen(5000, () => {
    console.log(`Server is running on port: 5000`);
  });

module.exports=connect;

