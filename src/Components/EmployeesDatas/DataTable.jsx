
import React, { useEffect,useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box ,IconButton,Container,Typography} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector,useDispatch } from 'react-redux';
import { handleEditData,handleEditOption,handleDeleteData } from '../../Redux/AddEmployeeRedux';
import { handlePopUpForm,handlePopUpAlert } from '../../Redux/ShowPopRedux';
import { handleDeleteOption } from '../../Redux/DataDeleteRedux';

function DataTable(props) {

    // state to store id of the row
    const [id,Setid] = useState(0)

    const usedispatch = useDispatch()
    const {tableData} = useSelector((state)=>state.addEmployeeReducer)
    const {deleteData } = useSelector((state)=>state.dataDeleteReducer)

    // function to handle edit option
    const handleDataToEdit = (id) =>{
      usedispatch(handleEditData(id))
      usedispatch(handleEditOption(true))
      usedispatch(handlePopUpForm(true))
    }

    // function to handle delete option
    const handleDataToDelete= (id) =>{
      usedispatch(handlePopUpAlert(true))
      Setid(id)
      
    }

    // useeffect to  delete the data
    useEffect(()=>{
      if(deleteData){
        usedispatch(handleDeleteData(id))
        usedispatch(handleDeleteOption(false))
      }
    },[deleteData])

    const columns = [
       
        { field: 'name', headerName: 'Name', width: 300 },
        { field: 'email', headerName: 'Email Address', width: 350 },
        { field: 'phone', headerName: 'Phone Number', width: 250 },
        { field: 'location', headerName: 'Location', width: 200 },
        {
            field: 'action', 
            headerName: 'Action', 
            width: 180,
            headerAlign: 'center',
            align: 'center',
            renderCell: (params) => (
              <Box>
                <IconButton sx={{mr: 1}} onClick={()=>handleDataToEdit(params.row.id)} >
                  <EditIcon   sx={{ color:'blue' }}/>
                </IconButton>
                <IconButton sx={{ml: 1}} onClick={()=>handleDataToDelete(params.row.id)}>
                  <DeleteIcon  sx={{ color:'red' }}/>
                </IconButton>
              </Box>
             
            )
          }];
    
          const rows = tableData.map((data) => ({
            id: data.id,
            name: data.values.name,
            email: data.values.email,
            phone: data.values.phone,
            location: data.values.location,
        }));

        
    return (
        <Container maxWidth='xl' sx={{mt:2,height:'80%',width:'100%' }}> 
          <DataGrid
            rows={rows} 
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            
          />
        </Container>
    );
}

export default DataTable;