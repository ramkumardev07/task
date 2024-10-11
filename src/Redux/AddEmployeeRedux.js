import {createSlice,current} from '@reduxjs/toolkit'

 const  initialState ={
    tableData:{
        uploadedData: []
    },
    isNew: false,
    dataToEdit:'',
    isEdit: false,
    editedDataIndex:''
}

const addEmployeeSlice = createSlice({
    name:"addEmployeeReducer",
    initialState,
    reducers:{
        updateTableData: (state,action) =>{
            state.tableData = {uploadedData : action.payload}
            
        },
        handleNewForm: (state,actions) =>{
            state.isNew = actions.payload
        },
        handleEditedData: (state,action)=>{
            state.tableData = {uploadedData : action.payload}
        },
        handleEditData: (state,action) =>{
            const currentState = current(state);
            state.dataToEdit = currentState.tableData.uploadedData.filter((item,index) => 
                item.employee_id === action.payload && item 
            )
        },
        handleEditOption: (state,action) =>{
            state.isEdit = action.payload
        },
        handleDeleteData: (state,action) =>{
            state.tableData = {uploadedData : action.payload}
        }
    }
})
export const {updateTableData,handleNewForm,handleEditData,handleEditOption,handleEditedData,handleDeleteData} = addEmployeeSlice.actions
export default addEmployeeSlice.reducer