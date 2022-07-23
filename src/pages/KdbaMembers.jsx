import React, { useEffect, useState } from 'react'
import { useDemoData } from '@mui/x-data-grid-generator';
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
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import Tooltip from '@mui/material/Tooltip';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const Container = styled.div`
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  background-image: url("https://i.pinimg.com/originals/5c/e0/5e/5ce05e42fd984649cba8ff13d2697d82.jpg") ;
    background-repeat:no-repeat;
  background-size: cover;
    height: 100vh;
    width: 100vw;
`

const Table = styled.div`
    height: 500px;
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


const KdbaMembers = () => {
    const [barMembers, setBarMembers] = useState([]);
    const [copyBarMembers, setCopyBarMembers] = useState([]);
    const [copyMembersForEnroll, setCopyMembersForEnroll] = useState([]);
    const { loading } = useDemoData({ });
    const [birdID, setBirdID] = useState('');
    const [deleteConfirm, setDeleteConfirm] = useState(false);
    const vertical = "top";
    const horizontal = "center";
    const [open, setOpen] = useState(false);
    const[message,setMessage] = useState('');

    const navigate = useNavigate();


    const checkBarMembers = (e)=>{
      if(e.keyCode === 8){
          //console.log("backward filtering")
          const noBackCharecter = e.target.value.slice(0, -1)
          let caseInsensitive = noBackCharecter.toLowerCase();
          const p = Array.from(caseInsensitive).reduce((a, v, i) => `${a}[^${caseInsensitive.substr(i)}]*?${v}`, '');
          const re = RegExp(p);
          setBarMembers(copyBarMembers.filter(v => v.firstname.toLowerCase().match(re)))
      }
      else if(e.target.value !== ""){
          //console.log("forward filtering")
          let caseInsensitive = e.target.value.toLowerCase();
          const p = Array.from(caseInsensitive).reduce((a, v, i) => `${a}[^${caseInsensitive.substr(i)}]*?${v}`, '');
          const re = RegExp(p);
          setBarMembers((prev)=>
      [...prev].filter(v => v.firstname.toLowerCase().match(re)))
      }
      else{
        setBarMembers(copyBarMembers)
      }
      
    }

    const checkBarMemberswithEnroll = (e)=>{
      if(e.keyCode === 8){
          //console.log("backward filtering")
          const noBackCharecter = e.target.value.slice(0, -1)
          let caseInsensitive = noBackCharecter.toLowerCase();
          const p = Array.from(caseInsensitive).reduce((a, v, i) => `${a}[^${caseInsensitive.substr(i)}]*?${v}`, '');
          const re = RegExp(p);
          setBarMembers(copyMembersForEnroll.filter(v => v.enrollmentNo.toLowerCase().match(re)))
      }
      else if(e.target.value !== ""){
          //console.log("forward filtering")
          let caseInsensitive = e.target.value.toLowerCase();
          const p = Array.from(caseInsensitive).reduce((a, v, i) => `${a}[^${caseInsensitive.substr(i)}]*?${v}`, '');
          const re = RegExp(p);
          setBarMembers((prev)=>
      [...prev].filter(v => v.enrollmentNo.toLowerCase().match(re)))
      }
      else{
        setBarMembers(copyMembersForEnroll)
      }
      
    }

    
      const getRowsWithID = (rows) => {
        let id = 1;
        let CompleteRowListArray = []
    
        for(let row of rows){
          const rowWithID = {
            id: id,
            ...row
          }
          id++
          CompleteRowListArray.push(rowWithID)
        }
    
        return CompleteRowListArray
      }

      const convertBackendDateToFront = (value) => {
        var date = new Date(value.replace('IST', ''));
        let day = date.getDate();
        let month = date.getMonth()+1;
        let year = date.getFullYear();
        const changeddate = day+"/"+month+"/"+year
        return changeddate;
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
        navigate('/advocate_Profile', {state : {data: obj1, template: obj2 }});
      };

      const deleteUser = (event) => {
        setBirdID(event.row._id)
        setDeleteConfirm(true)

      }

      const deleteConfirmed = async()=> {
        await axios.delete(`https://kdbaapi.herokuapp.com/api/kdba/barMember/${birdID}`)
        .then( res => { 
          setMessage(res.data['message']);
          setOpen(true); 
          setDeleteConfirm(false)
          getBarMemebers();
        }) 
      .catch(e => {
  
      })
    }
    
      const isAdmin = () => {

      }

      const columns = [
        { field: 'actions', 
          type: 'actions', 
          width: 100,
          getActions: (event) => [
            <Tooltip title="View Advocate Profile" placement="left" arrow>
              <GridActionsCellItem icon={<ContactsOutlinedIcon/>}  color='info' onClick={(e)=> handleClickOpen(event,e)} label="View" />
            </Tooltip>,
            <Tooltip title="Delete Advocate Profile" placement="top" arrow>
                  <GridActionsCellItem  disabled={isAdmin()} icon={<DeleteIcon/>} color='error' onClick={()=> deleteUser(event)} label="Delete"/>
            </Tooltip>,
              <Tooltip title="Edit Advocate Profile" arrow>
                 <GridActionsCellItem disabled={isAdmin()} icon={<EditIcon/>} sx={{ color:'yellowgreen' }} onClick={()=>handleClickOpen(event)} label="Edit"/>
              </Tooltip>
             
          ], 
        },
         { field: 'id', headerName: 'ID', width: 80 },
        { field: 'firstname', headerName: 'Name', width: 280 },
       
        
        { field: 'enrollmentDate', headerName: 'Enrollment Dt',type: 'date', width: 130,
            valueGetter: (params) => {
              return convertBackendDateToFront(params.value)
            }
        },
        { field: 'enrollmentNo', headerName: 'Enrollment No', width: 150},
        { field: 'lfNumber', headerName: 'Lf', width: 70},
        { field: 'admissionDate', headerName: 'Admission Dt',type: 'date', width: 130,
            valueGetter: (params) => {
              return convertBackendDateToFront(params.value)
            }
        },
        { field: 'gender', headerName: 'Gender', width: 80 },
        { field: 'dob', headerName: 'DOB', width: 130 ,
          valueGetter: (params) => {
            return convertBackendDateToFront(params.value)
          }
        },
        { field: 'mobile', headerName: 'Mobile', width: 100 },
        { field: 'cop', headerName: 'Cop', width: 80},
        { field: 'copNumber', headerName: 'Cop Number', width: 130},
      ];

      const getBarMemebers = async() => {
        try{
          const response = await axios.get(`https://kdbaapi.herokuapp.com/api/kdba/barMember`);
          setCopyBarMembers(getRowsWithID(response.data['object']))
          setCopyMembersForEnroll(getRowsWithID(response.data['object']))
          setBarMembers(getRowsWithID(response.data['object']));
      }
     
      catch(e){
          console.log(e)
      }
      }

      useEffect(()=>{
        getBarMemebers();
      },[])

  return (
    <Container>
        <Paper
            component="form"
            sx={{ display: 'flex',flexDirection:'row', p: '2px',  borderRadius: 1,
            marginTop:'80px', marginBottom:'10px',marginLeft:'20px',marginRight:'20px', alignItems: 'center'
         }}
          >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="name..."
                  onChange={(e)=> checkBarMembers(e)}
                  onKeyDown={(e)=> checkBarMembers(e)}
                  inputProps={{ 'aria-label': 'search google maps' }}
                />
                <IconButton  sx={{ p: '10px',color:"mediumorchid" }} aria-label="search">
                <Tooltip title="Search Advocate Profile" placement="bottom-end" arrow>
                    <PersonSearchOutlinedIcon  />
                </Tooltip>
                  
                </IconButton>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions" onClick={()=>handleClickOpen()}>
                <Tooltip title="Add Advocate Profile" placement="top" arrow>
                    <PersonAddAltOutlinedIcon />
                </Tooltip>
                </IconButton>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton sx={{ p: '10px',color:"chocolate" }} aria-label="search">
                <Tooltip title="Search enrollment number" placement="bottom-start" arrow>
                    <PlagiarismOutlinedIcon />
                </Tooltip>
                </IconButton>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="enrollment number..."
                  onChange={(e)=> checkBarMemberswithEnroll(e)}
                  onKeyDown={(e)=> checkBarMemberswithEnroll(e)}
                  inputProps={{ 'aria-label': 'search google maps' }}
                />
               
          </Paper>
       
        <Table>
                <DataGrid style={{color:'black', backgroundColor:'white'}}
                rows={barMembers}
                columns={columns}
                getRowId={(row) => row._id}
                checkboxSelection
                disableSelectionOnClick
                loading={loading} 
                components={{ Toolbar: GridToolbar }} />

            
        </Table>

        <Snackbar anchorOrigin={{ vertical, horizontal }} open={open} autoHideDuration={6000} onClose={handleClose}  key={vertical + horizontal}>
              <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
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
            <Button onClick={deleteConfirmed} autoFocus>
              Delete
            </Button>
          </DialogActions>
        </Dialog>
    </Container>
  )
}

export default KdbaMembers
