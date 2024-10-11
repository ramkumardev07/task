const express = require('express')
const app = express()
const { handleNewEmployeeData,
        handleGetEmployessData,
        handleUpdateEmployeeData,
        handleDeleteEmployeeData} = require('../Controller/EmployeeData.contoller')

        
// API for create data
app.post('/newData',handleNewEmployeeData)
// API for get uploaded data
app.get('/getEmployeeData',handleGetEmployessData)
// API for to update data
app.put('/updateEmployee',handleUpdateEmployeeData)
// API for delete particular data
app.delete('/deleteEmployee/:id',handleDeleteEmployeeData)


module.exports = app
