const {handleDataUploadToDb,
        handleGetEmployeeData,
        handleDataToUpdate,
        handleDataToDelete} = require('../Model/EmployeeData.model')


// function to upload data 
exports.handleNewEmployeeData =async (req,res)=>{
    try{

        const uploadedData = await handleDataUploadToDb(req.body)
        res.status(200).send({
            message: uploadedData
        })

    }
    catch(err){
        res.status(400).send({
            message: err
        })
    }
}

// function to get uploaded data
exports.handleGetEmployessData = async (res) =>{
    try{

        const employeesData = await handleGetEmployeeData()
        res.status(200).send({
            message: employeesData
        })

    }catch(err){
        res.status(400).send({
            message: err
        })
    }
}

// function to update data
exports.handleUpdateEmployeeData = async (req,res) =>{
    try{

        const updatedData = await handleDataToUpdate(req.body)
        res.status(200).send({
            message:updatedData
        })
        

    }catch(err) {
        res.status(400).send({
            message: err
        })
    }
}

// function to delete particular data
exports.handleDeleteEmployeeData = async (req,res) =>{
    try{
        
        const newEmployeeList = await handleDataToDelete(req.params.id)
        res.status(200).send({
            message: newEmployeeList
        })

    }catch(err){
        res.status(400).send({
            message: err
        })
    }
}