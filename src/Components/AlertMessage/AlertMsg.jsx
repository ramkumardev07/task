import React,{Fragment} from 'react';
import {Box, Container,Card,CardHeader,CardContent,Button,Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useSelector,useDispatch } from 'react-redux';
import { handleDeleteOption } from '../../Redux/DataDeleteRedux';
import {handlePopUpAlert} from '../../Redux/ShowPopRedux'

function Alert() {

    const {showPopUpAlert} = useSelector((state)=> state.showPopUpReducer)
    const usedispatch = useDispatch()
    
    // handle cancel button
    const handleCancel = () =>{
        usedispatch(handlePopUpAlert(false))
    }

    //handle delete button
    const handleDelete = () =>{
        usedispatch(handleDeleteOption(true))
        usedispatch(handlePopUpAlert(false))
    }

    return (
        <Fragment>
        {showPopUpAlert &&
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center', 
                position: 'fixed', 
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'rgba(0, 0, 0, 0.6)', 
                zIndex: 1300, 
            }}>
            <Container maxWidth='xs'>
                <Card elevation={3} sx={{borderRadius:'20px',p:1}} >
                    <CardHeader 
                        sx={{
                            '& .MuiCardHeader-title': { 
                            fontSize: '20px' ,
                            fontWeight: 'bold'
                            }}} 
                        title={'Alert'}/>
                    <CardContent >
                        <Grid container spacing={3}>
                            <Grid size={12}>
                                <Typography fontFamily={'sans-serif'} lineHeight={'30px'} fontSize={'20px'}>Are you sure, you want to delete this employee?</Typography>
                            </Grid>
                            <Grid container sx={{ width:1,ml:1}} >
                                <Grid size={6} sx={{ml:3}}>
                                    <Button onClick={()=>handleCancel()} variant="outlined">Cancel</Button>
                                </Grid>
                                <Grid size={4} onClick={()=>handleDelete()} sx={{display:'flex',justifyContent:'flex-end'}}>
                                    <Button variant="outlined" color="error">Delete</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Container>
            </Box>
            }
        </Fragment>
    );
}

export default Alert;