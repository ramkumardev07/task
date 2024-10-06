import {createSlice} from '@reduxjs/toolkit'

 const  initialState ={
    deleteData: false
    
}
const dataDeleteSlice = createSlice({
    name:"dataDeleteReducer",
    initialState,
    reducers:{
        handleDeleteOption: (state,action) =>{
            state.deleteData = action.payload
        }
      
       
    }
})
export const {handleDeleteOption} = dataDeleteSlice.actions
export default dataDeleteSlice.reducer