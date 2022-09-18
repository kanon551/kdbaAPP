import React, { useState } from 'react';
import { DataGrid, GridToolbar,GridActionsCellItem } from '@mui/x-data-grid';
import styled from 'styled-components'
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import PlagiarismOutlinedIcon from '@mui/icons-material/PlagiarismOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import Tooltip from '@mui/material/Tooltip';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import jwt_decode from "jwt-decode";
import { useAdvocateHook } from '../hooks/useAdvocateHook';


const Container = styled.div`
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
`

const Table = styled.div`
    height: 80%;
    width: 80%;
    background: white;
    padding: 20px;
border-radius: 20px;
box-shadow:  5px -5px 10px #5a5a5a,
             -5px 5px 10px #ffffff;
`

export const Input = styled.input`
  width: 300px;
  height: 40px;
  min-width: 150px;
  background: transparent url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E") no-repeat 13px;
  background-position-x: 90%;
  background-color: white;
  display: flex;

box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 20px );
-webkit-backdrop-filter: blur( 20px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
    flex-direction: column;

     &:focus-visible{   
          outline: 2px solid #2e7d32;
    }
`

const ErrorMessage = styled.div`
    color: white;
    display: flex;
    font-size: xxx-large;
    margin: 100px;
    font-weight: bold;
    font-family: 'Courier New', Courier, monospace;
    align-items: center;
    justify-content: center;
`


const KdbaQueryMembers = () => {

    const navigate = useNavigate();
    const [advocateID, setAdvocateID] = useState('');
    const [deleteConfirm, setDeleteConfirm] = useState(false);
    const vertical = "top";
    const horizontal = "center";
    const [open, setOpen] = useState(false);
    const[message,setMessage] = useState('');
    const [copyBarMembers, setCopyBarMembers] = useState([]);
    const [copyMembersForEnroll, setCopyMembersForEnroll] = useState([]);
    
    const onSuccess = ()=> {
      console.warn("Successfully fetched the data")
    }
    const onError =  ()=> {
      console.warn(error)
    }

    
    const { isLoading, isError, data, error } = useAdvocateHook(onSuccess,onError,copyBarMembers,copyMembersForEnroll)

    if(isError){
        return <ErrorMessage>{error.message}</ErrorMessage>
    }
    

    const checkBarMembers = (e)=>{

      let caseInsensitive = e.target.value.toLowerCase();
      setCopyMembersForEnroll([])
      setCopyBarMembers(caseInsensitive);


    //   if(e.keyCode === 8){
    //       //console.log("backward filtering")
    //       const noBackCharecter = e.target.value.slice(0, -1)
    //       let caseInsensitive = noBackCharecter.toLowerCase();
    //       const p = Array.from(caseInsensitive).reduce((a, v, i) => `${a}[^${caseInsensitive.substr(i)}]*?${v}`, '');
    //       const re = RegExp(p);
    //       setBarMembers(copyBarMembers.filter(v => v.firstname.toLowerCase().match(re)))
    //   }
    //   else if(e.target.value !== ""){
    //       //console.log("forward filtering")
    //       let caseInsensitive = e.target.value.toLowerCase();
    //       const p = Array.from(caseInsensitive).reduce((a, v, i) => `${a}[^${caseInsensitive.substr(i)}]*?${v}`, '');
    //       const re = RegExp(p);
    //      setBarMembers((prev)=>
    //      [...prev].filter(v => v.firstname.toLowerCase().match(re)))
    //   }
    //   else{
    //     setBarMembers(copyBarMembers)
    //   }
      
    }

    const checkBarMemberswithEnroll = (e)=>{
      let caseInsensitiveEnroll = e.target.value.toLowerCase();
      setCopyBarMembers([])
      setCopyMembersForEnroll(caseInsensitiveEnroll);


    //   if(e.keyCode === 8){
    //       //console.log("backward filtering")
    //       const noBackCharecter = e.target.value.slice(0, -1)
    //       let caseInsensitive = noBackCharecter.toLowerCase();
    //       const p = Array.from(caseInsensitive).reduce((a, v, i) => `${a}[^${caseInsensitive.substr(i)}]*?${v}`, '');
    //       const re = RegExp(p);
    //       setBarMembers(copyMembersForEnroll.filter(v => v.enrollmentNo.toLowerCase().match(re)))
    //   }
    //   else if(e.target.value !== ""){
    //       //console.log("forward filtering")
    //       let caseInsensitive = e.target.value.toLowerCase();
    //       const p = Array.from(caseInsensitive).reduce((a, v, i) => `${a}[^${caseInsensitive.substr(i)}]*?${v}`, '');
    //       const re = RegExp(p);
    //        setBarMembers((prev)=>
    //        [...prev].filter(v => v.enrollmentNo.toLowerCase().match(re)))
    //   }
    //   else{
    //     setBarMembers(copyMembersForEnroll)
    //   }
      
     }


      const isAdmin = () => {
        try{
          if(localStorage.getItem('token') !== null && localStorage.getItem('token') !== undefined && jwt_decode(localStorage.getItem('token')).exp > Date.now() / 1000){
            return false;
          }
          else{
            return true;
          } 
        }
        catch(e){
          return true;
        }
        
      }

      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

      const handleClickOpen = (event,e) => {

        /****Dont send the event data as props in state directly ******/
        /**** This causes the react router DOM cant persist state between navigation ****/
        /***** Normally useNavigate persists, hence, convert the data to be send in refined format */

        let obj1;
        let obj2;

        if(event === undefined && e === undefined){
          obj1 = null;
          obj2 = 'add';
        }
        else if(event !== undefined && e !== undefined){
          obj1 = event['row'];
          obj2 = 'view';

        }
        else if(event !== undefined && e === undefined){
          obj1 = event['row'];
          obj2 = 'edit';
        }
        navigate('/advocateProfile', {state : {data: obj1, template: obj2 }});
      };

      const deleteUser = (event) => {
        setAdvocateID(event.row._id)
        setDeleteConfirm(true)

      }

      
      const deleteConfirmed = async()=> {
        const decoded = jwt_decode(localStorage.getItem('token'));

    const authAxios = axios.create({
      baseURL: `https://kdbaapi.herokuapp.com/api/kdba`,
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      },
    })
  
    if (decoded.exp < Date.now() / 1000) {
      
      navigate('/advocateGrid');
    }
    else{
      await authAxios.delete(`/barMember/${advocateID}`)
      .then( res => { 
        setMessage(res.data['message']);
        setOpen(true); 
        setDeleteConfirm(false)
      }) 
    .catch(e => {

    })
    }
        
    }
      
      const columns = [
        { field: 'actions', 
          type: 'actions', 
          width: 100,
          getActions: (event) => [
            <Tooltip title="Delete Advocate Profile" placement="top" arrow>
              <span>
                  <GridActionsCellItem disabled={isAdmin()}
                      icon={   
                                  <DeleteIcon/>
                            } 
                      color='error' onClick={()=> deleteUser(event)} label="Delete"/>
              </span>
            </Tooltip>,
            <Tooltip title="Edit Advocate Profile" arrow>
              <span>
                <GridActionsCellItem disabled={isAdmin()}
                icon={
                              <EditIcon/>
                } 
                sx={{ color:'yellowgreen' }} onClick={()=>handleClickOpen(event)} label="Edit"/>
              </span>
            </Tooltip>
             
          ], 
        },
         { field: 'id', headerName: 'ID', width: 80 },
        { field: 'firstname', headerName: 'Name', width: 280 },
       
        
        { field: 'enrollmentDate', headerName: 'Enrollment Dt',type: 'date', width: 130,editable: true,
            valueGetter: (params) => {
              return new Date(params.value)
            }
        },
        { field: 'enrollmentNo', headerName: 'Enrollment No', width: 150},
        { field: 'lfNumber', headerName: 'LF', width: 70},
        { field: 'admissionDate', headerName: 'Admission Dt',type: 'date', width: 130,
            valueGetter: (params) => {
              return new Date(params.value)
            }
        },
        { field: 'gender', headerName: 'Gender', width: 80 },
        { field: 'dob', headerName: 'DOB', type: 'date', width: 130 ,
          valueGetter: (params) => {
            return new Date(params.value)
          }
        },
        { field: 'mobile', headerName: 'Mobile', width: 100 },
        { field: 'cop', headerName: 'Cop', width: 80},
        { field: 'remarks', headerName: 'Remarks', width: 130},
      ];

      const LoadingSkeleton = () => (
        <Box
          sx={{
            height: "max-content"
          }}
        >
          {[...Array(10)].map((data, i) => (
            <Skeleton key={i} variant="rectangular" sx={{ my: 4, mx: 1 }} />
          ))}
        </Box>
      );


  return (
    <Container>
      <Paper
            component="form"
            sx={{ display: 'flex',flexDirection:'row', p: '2px',  borderRadius: 1,
            marginBottom:'10px',marginLeft:'20px',marginRight:'20px', alignItems: 'center'
         }}
          >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="name..."
                  onChange={(e)=> checkBarMembers(e)}
                  // onKeyDown={(e)=> checkBarMembers(e)}
                  inputProps={{ 'aria-label': 'search google maps' }}
                />
                <IconButton  sx={{ p: '10px',color:"mediumorchid" }} aria-label="search">
                <Tooltip title="Search Advocate Profile" placement="bottom-end" arrow>
                    <PersonSearchOutlinedIcon  />
                </Tooltip>
                  
                </IconButton>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />


                <IconButton
                color="primary" 
                sx={{ p: '10px' }}
                disabled={isAdmin()}
                aria-label="directions" 
                onClick={()=>handleClickOpen()}>
                <Tooltip title="Add Advocate Profile" placement="top" arrow>
                    <PersonAddAltOutlinedIcon />
                </Tooltip>
                </IconButton>
                <Divider 
                sx={{ height: 28, m: 0.5 }} 
                orientation="vertical" 
                />


                <IconButton sx={{ p: '10px',color:"chocolate" }} aria-label="search">
                <Tooltip title="Search enrollment number" placement="bottom-start" arrow>
                    <PlagiarismOutlinedIcon />
                </Tooltip>
                </IconButton>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="enroll..."
                  onChange={(e)=> checkBarMemberswithEnroll(e)}
                  // onKeyDown={(e)=> checkBarMemberswithEnroll(e)}
                  inputProps={{ 'aria-label': 'search google maps' }}
                />
               
          </Paper>
          
      <Table>
          {
            isLoading ? 
            <DataGrid
                components={{
                  LoadingOverlay: LoadingSkeleton,
                }}
                loading
                rows={[]}
                columns={columns}
              />
                :

                <DataGrid style={{color:'black', backgroundColor:'white'}}
                rows={data}
                columns={columns}
                getRowId={(row) => row._id}
                checkboxSelection
                disableSelectionOnClick
                components={{ Toolbar: GridToolbar }} />
          }
               

            
        </Table>

        <Snackbar anchorOrigin={{ vertical, horizontal }} open={open} autoHideDuration={6000} onClose={handleClose}  key={vertical + horizontal}>
              <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
                {message}
              </Alert>
        </Snackbar>

        <Dialog
          open={deleteConfirm}
          onClose={()=> setDeleteConfirm(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
                  Delete Record
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
                    Are You sure about deleting this record ?
                    Because once deleted cant be retrived.
                    Confirm Delete
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={()=> setDeleteConfirm(false)} autoFocus>
              Cancel
            </Button>
            <Button onClick={deleteConfirmed} autoFocus>
              Delete
            </Button>
          </DialogActions>
        </Dialog>
    </Container>
  )
}

export default KdbaQueryMembers
