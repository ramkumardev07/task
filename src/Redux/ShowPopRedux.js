import {createSlice} from '@reduxjs/toolkit'

 const  initialState ={
    showPopUpForm: false,
    showPopUpAlert:false
}
const showPopUpSlice = createSlice({
    name:"showPopUpReducer",
    initialState,
    reducers:{
        handlePopUpForm: (state,action)=>{
            state.showPopUpForm = action.payload
        },
        handlePopUpAlert: (state,action) =>{
            state.showPopUpAlert = action.payload
        }
       
    }
})
export const {handlePopUpForm,handlePopUpAlert} = showPopUpSlice.actions
export default showPopUpSlice.reducer