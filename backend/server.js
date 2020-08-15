const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const app = express()
require('./database')

// requirements

// initialization 

app.use(bodyParser.json())
app.use(cors())

const users = require('api/users')

// will add other api functions if I have time
// const notes = require('api/notes')
// const appointments = require('api/appointments')

app.use('/api/users', users);
app.use(express.static(path.join(__dirname, '../build')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build'))
})

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});


