const database = require('../Utils/database')

exports.handleDataUploadToDb = async(data)=>{
    const newEmployee = await database.query(
        'INSERT INTO employeedata (Employee_id,Employee_Name,Employee_Email,Employee_Mobilenumber,Employee_Location) VALUES ($1,$2,$3,$4,$5)',
        [
            data.id,
            data.values.name,
            data.values.email,
            data.values.phone,
            data.values.location,
            
        ]  
    )

    const uploadedData = await database.query(
        "SELECT * FROM employeedata "
     )
    return uploadedData.rows
}

exports.handleGetEmployeeData = async ( )=>{
    const allEmployessData = await database.query(
        "SELECT * FROM employeedata "
     )
    return allEmployessData.rows

}

exports.handleDataToUpdate = async (data) =>{
    const updateEmployee = await database.query("UPDATE employeedata SET Employee_Name = $1, Employee_Email = $2, Employee_Mobilenumber = $3, Employee_Location = $4 WHERE Employee_id = $5",
        [   
            data.values.name,
            data.values.email,
            data.values.phone,
            data.values.location,
            data.id
        ]
    
        )
        const updatedData = await database.query(
            "SELECT * FROM employeedata "
         )
        return updatedData.rows
}

exports.handleDataToDelete = async (id) =>{
    const deleteEmployee = await database.query("DELETE FROM employeedata WHERE Employee_id = $1 ",
        [id])

        const updatedData = await database.query(
            "SELECT * FROM employeedata "
         )
        return updatedData.rows
        
}