import React, { useState,useRef,useEffect } from 'react'
import styled from 'styled-components'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import useMediaQuery from '@mui/material/useMediaQuery';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import kondaReddyFort from '../assets/kondaReddyBuruju.jpg';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useLocation } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { useCallback } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import axios from 'axios';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useNavigate} from 'react-router-dom';

const Container = styled.div`
    display: flex;
    padding: 40px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   

    /* background: "https://t3.ftcdn.net/jpg/02/36/23/66/360_F_236236696_mTYBnVvXVykDspnSwLdzo16jqjdVLdXy.jpg";
    background-repeat: no-repeat;
    background-size: cover; */
`

const Tittle = styled.div`
    font-size: x-large;
`

const End = styled.div`
    font-size: medium;
`

const ManipulateMembers = () => {
    const matches = useMediaQuery('(max-width:900px)');
    const navigate = useNavigate();
  const location = useLocation();
  /***********Date *************************/
    
  const [enrollDt, setEnrollDt] = useState(new Date());
  const changeEnrollDt = (newValue) => {
    setEnrollDt(newValue);
  };

  const [admissionDt, setAdmissionDt] = useState(new Date());
  const changeAdmissionDt = (newValue) => {
    setAdmissionDt(newValue);
  };

  const [birthDt, setBirthDt]= useState(new Date());
  const changeBirthDt = (newValue) => {
    setBirthDt(newValue);
  };

  /***********Date *************************/
  const profileData = location.state.data;
  const type = location.state.template;

  const fileInput = useRef(null);
  const [open, setOpen] = useState(false);
  const vertical = "top";
  const horizontal = "right";
  const[message,setMessage] = useState('');


  const [name, setName] = useState('');
  const [enrollNo, setEnrollNo] = useState('');
  const [lfNumber, setLfNumber] = useState('');
  const [gender, setGender] = useState(0);
  const [mobile, setMobile] = useState('');
  const [cop, setCop] = useState('');
  const [remarks, setremarks] = useState('');
  const [file, setFile] = useState(null);
  const [advocateID, setAdvocateID] = useState('');
  const [image, setImage] = useState('');

  const [disabled, isDisabled] = useState(false);
  const [hide, isHidden] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  
  const convertBackendDateToFront = (value) => {
    var date = new Date(value.replace('IST', ''));
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    const changeddate = month+"/"+day+"/"+year
    return changeddate;
  }
  
  const imageUpload = useCallback((e)=> {
    if(e.target.files[0].size >= 16793600){
      setMessage("File too Big, Max File Size Limit is 16MB")
      setOpen(true); 
      setFile(null);
      fileInput.current.value = null;
    }
    else{
      setFile(e.target.files[0])
    }
                
   })

useEffect(()=> {

    if(type === 'add'){
      setName('');
      setEnrollNo('');
      setLfNumber('');
      setGender(0);
      setMobile('');
      setCop('');
      setremarks('');
      setEnrollDt(new Date());
      setAdmissionDt(new Date());
      setBirthDt(new Date());
      setAdvocateID('');
      setImage("advocate");

      isDisabled(false);
      isHidden(false);
    }
    else if(type === 'edit'){
      setAdvocateID(profileData._id)
      setName(profileData.firstname);
      setEnrollNo(profileData.enrollmentNo);
      setLfNumber(profileData.lfNumber);
      setGender(profileData.gender === "" ? 0 : profileData.gender);
      setMobile(profileData.mobile);
      setCop(profileData.cop);
      setremarks(profileData.remarks);


       let convertToStringDate = convertBackendDateToFront(profileData.enrollmentDate)
      let stringDateToObject = new Date(convertToStringDate)
      setEnrollDt(stringDateToObject);

      let convertAdmissionStringDate = convertBackendDateToFront(profileData.admissionDate)
      let admissionDateToObject = new Date(convertAdmissionStringDate)
      setAdmissionDt(admissionDateToObject);
      
      let convertBirthStringDate = convertBackendDateToFront(profileData.dob)
      let birthDateToObject = new Date(convertBirthStringDate)
      setBirthDt(birthDateToObject);

      if(profileData.image === undefined || profileData.image.data === ""){
        setImage("advocate")
      }
      else{
        setImage(profileData.image.data)
      }

      isDisabled(false);
      isHidden(false);
      
    }
    else if(type === 'view'){

      setAdvocateID(profileData._id)
      setName(profileData.firstname);
      setEnrollNo(profileData.enrollmentNo);
      setLfNumber(profileData.lfNumber);
      setGender(profileData.gender === "" ? 0 : profileData.gender);
      setMobile(profileData.mobile);
      setCop(profileData.cop);
      setremarks(profileData.remarks);


       let convertToStringDate = convertBackendDateToFront(profileData.enrollmentDate)
      let stringDateToObject = new Date(convertToStringDate)
      setEnrollDt(stringDateToObject);

      let convertAdmissionStringDate = convertBackendDateToFront(profileData.admissionDate)
      let admissionDateToObject = new Date(convertAdmissionStringDate)
      setAdmissionDt(admissionDateToObject);
      
      let convertBirthStringDate = convertBackendDateToFront(profileData.dob)
      let birthDateToObject = new Date(convertBirthStringDate)
      setBirthDt(birthDateToObject);

      if(profileData.image === undefined || profileData.image.data === ""){
        setImage("advocate")
      }
      else{
        setImage(profileData.image.data)
      }

      isDisabled(true);
      isHidden(true);
    }
  },[])

  const save = async()=> {

    if(name === ""){
      setMessage("Enter Adovate Name")
      setOpen(true); 
    }
    else if(enrollNo === ''){
            setMessage("Enter enrollment number")
            setOpen(true); 
    }
    else if(gender === 0){
      setMessage("Select Gender")
      setOpen(true); 
}
    else{
            let formData = new FormData();
            formData.append('enrollmentNo', enrollNo); 
            formData.append('enrollmentDate', enrollDt); 
            formData.append('firstname', name); 
            formData.append('dob', birthDt); 
            formData.append('gender', gender.toString()); 
            formData.append('mobile', mobile); 
            formData.append('lfNumber', lfNumber); 
            formData.append('admissionDate', admissionDt); 
            formData.append('cop', cop.toString()); 
            formData.append('remarks', remarks); 
            formData.append('file', file);

            try{

              if(advocateID === ""){
                await axios.post(`https://kdbaapi.herokuapp.com/api/kdba/barMember`,formData)
                .then(response => {
                  setMessage(response.data['message'])
                  setOpen(true);

                  setName('');
                  setEnrollNo('');
                  setLfNumber('');
                  setGender(0);
                  setMobile('');
                  setCop('');
                  setremarks('');
                  setEnrollDt(new Date());
                  setAdmissionDt(new Date());
                  setBirthDt(new Date());
                  setAdvocateID('');
                  setImage("advocate");


                 fileInput.current.value = null;
                })
                .catch(e=> {

                })
              }
              else if(advocateID !== ""){
                formData.append('id', advocateID); 
                await axios.put(`https://kdbaapi.herokuapp.com/api/kdba/barMember`,formData)
                .then(response => {
                  setMessage(response.data['message'])
                  setOpen(true);
                  
                  setName('');
                  setEnrollNo('');
                  setLfNumber('');
                  setGender(0);
                  setMobile('');
                  setCop('');
                  setremarks('');
                  setEnrollDt(new Date());
                  setAdmissionDt(new Date());
                  setBirthDt(new Date());
                  setAdvocateID('');
                  setImage("advocate");

                  fileInput.current.value = null;
                })
                .catch(e=> {

                })
              }
                   

                    
          }
        
          catch(e){
              console.log(e)
          }
    }
   }

  return (
      <Container>
        <Tittle hidden={hide}>
        {
                           advocateID === '' ? "Add Advocate Profile" : "Edit Advocate Profile"
        }
        </Tittle>
        <Tittle hidden={!hide}>
                           View Advocate Profile
        </Tittle>
        <Box sx={{ flexGrow: 1, display:'flex', alignItems:'center', justifyContent:'center',marginTop: '59px',marginBottom: '50px'}}>
            <Grid container direction={matches? "column-reverse" : "row"} spacing={2}>
                <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
                            <Box sx={{ flexGrow: 1, padding:'10px', background:'white', borderRadius: '5px',
                        boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'}}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
                                        <TextField id="outlined-basic" label="Name" fullWidth variant="outlined" 
                                                    disabled={disabled} value={name} onChange={(e)=> setName(e.target.value)}/>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                        <TextField id="outlined-basic" label="Enrollment Number" fullWidth variant="outlined" 
                                                disabled={disabled} value={enrollNo} onChange={(e)=> setEnrollNo(e.target.value)}/>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                        <LocalizationProvider dateAdapter={AdapterDateFns} >
                                            <DesktopDatePicker
                                            inputFormat="dd/MM/yyyy"
                                            value={enrollDt}
                                            label="Enrollment Date"
                                            disabled={disabled}
                                            onChange={changeEnrollDt}
                                            renderInput={
                                                (params) => <TextField fullWidth {...params}/>
                                            }
                                            />
                                        </LocalizationProvider>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                        <TextField id="outlined-basic" label="LF number" fullWidth variant="outlined" 
                                                disabled={disabled} value={lfNumber} onChange={(e)=> setLfNumber(e.target.value)}/>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                        <LocalizationProvider dateAdapter={AdapterDateFns} >
                                            <DesktopDatePicker
                                            inputFormat="dd/MM/yyyy"
                                            value={admissionDt}
                                            label="Admission Date"
                                            disabled={disabled}
                                            onChange={changeAdmissionDt}
                                            renderInput={
                                                (params) => <TextField fullWidth {...params}/>
                                            }
                                            />
                                        </LocalizationProvider>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                        <FormControl fullWidth >
                                            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={gender}
                                                disabled={disabled}
                                                label="Age"
                                                onChange={(e)=> setGender(e.target.value)}
                                            >
                                                <MenuItem value={0}>None</MenuItem>
                                                <MenuItem value={'male'}>Male</MenuItem>
                                                <MenuItem value={'female'}>Female</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                        <LocalizationProvider dateAdapter={AdapterDateFns} >
                                            <DesktopDatePicker
                                            inputFormat="dd/MM/yyyy"
                                            value={birthDt}
                                            label="Date of Birth"
                                            disabled={disabled}
                                            onChange={changeBirthDt}
                                            renderInput={
                                                (params) => <TextField fullWidth {...params}/>
                                            }
                                            />
                                        </LocalizationProvider>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                        <TextField id="outlined-basic" label="Mobile" fullWidth variant="outlined" 
                                                disabled={disabled} value={mobile} onChange={(e)=> setMobile(e.target.value)}/>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                    <TextField id="outlined-basic" label="Cop" fullWidth variant="outlined" 
                                                disabled={disabled} value={cop} onChange={(e)=> setCop(e.target.value)}/>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                    <TextField
                                        id="outlined-multiline-static"
                                        label="Remarks"
                                        multiline
                                        fullWidth
                                        rows={5}
                                        disabled={disabled} value={remarks} onChange={(e)=> setremarks(e.target.value)}/>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <input type={"file"} 
                                            style={{border: "none",height: '50px',marginTop: '10px'}} 
                                            accept={"image/*"}
                                            multiple={false}
                                            disabled={disabled}
                                            ref={fileInput}
                                            onChange={(e) => imageUpload(e)} />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                    <Button variant="contained" fullWidth disabled={disabled} onClick={save} >
                                        {
                                                        advocateID === '' ? "Save" : "Update"
                                        }
                                    </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                            
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3} 
                            style={{justifyContent: matches? 'center' : 'flex-start', alignItems:matches? 'center' : 'flex-start', display:'flex'}}>

                    <Card sx={{ maxWidth: 345, height: '250px' }}>
                    {
                        image === 'advocate' ?  
                        <CardMedia
                        component="img"
                        alt="green iguana"
                        height= "100%"
                        image="https://blog.ipleaders.in/wp-content/uploads/2017/04/BV-Acharya-56.jpg"
                        /> 

                        :

                        <CardMedia
                        component="img"
                        alt="green iguana"
                        height= "100%"
                        image={`data:image/jpeg;base64,${image}`}
                        />
                            // <ImgContainer img={`data:image/jpeg;base64,${image}`}/>
                    }
                       
                        {/* <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent> */}
                        {/* <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions> */}
                    </Card>
                </Grid>
            </Grid>
        </Box>

        <Snackbar anchorOrigin={{ vertical, horizontal }} open={open} autoHideDuration={6000} onClose={handleClose}  key={vertical + horizontal}>
              <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
                {message}
              </Alert>
        </Snackbar>
    </Container>

    
  )
}

export default ManipulateMembers
