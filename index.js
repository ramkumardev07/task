const express = require('express')
const app = express()
app.use(express.json())

// configure env file
const dotenv = require('dotenv')
dotenv.config();

// configure cros 
const cros  = require('cors')
app.use(cros())

// link route folder
const route = require('./Routes/routes')
app.use(route)

const port = process.env.PORT
app.listen(port,()=>{console.log("server is running at port"+" "+port)})

