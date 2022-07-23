import React, { useState,useRef,useEffect } from 'react'
import styled from 'styled-components'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useLocation } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import { useCallback } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import axios from 'axios';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useNavigate} from 'react-router-dom';


const Container = styled.div`
  background-color: #F4A460;
    height: 100vh;
    flex-direction: row;
    width: 100vw;
    display: flex;
    
`
const Profile = styled.div`
  font-size: larger;
  font-weight: 700;
  color: white;
`

const StaticImageContainer = styled.div`

height: 450px;
  margin-top: 10px;
  margin-bottom: 10px;
    background-image: url("https://blog.ipleaders.in/wp-content/uploads/2017/04/BV-Acharya-56.jpg");
    background-repeat:no-repeat;
    background-size: 100% 100%;
  width: 250px;
  position: relative;
  object-fit: cover;
  box-shadow:  5px -5px 10px #5a5a5a,
             -5px 5px 10px #ffffff;
`
const ImgContainer = styled.div`

height: 450px;
  margin-top: 10px;
  margin-bottom: 10px;
    background-image: url(${props => props.img });
    background-repeat:no-repeat;
    background-size: 100% 100%;
  width: 250px;
  position: relative;
  object-fit: cover;
  box-shadow:  5px -5px 10px #5a5a5a,
             -5px 5px 10px #ffffff;
`

const Data = styled.div`
  width: 250px;
  height: auto;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 10px;

  overflow-y: scroll;
  
`



const AdvocateProfile = () => {

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
  const horizontal = "center";
  const[message,setMessage] = useState('');


  const [name, setName] = useState('');
  const [enrollNo, setEnrollNo] = useState('');
  const [lfNumber, setLfNumber] = useState('');
  const [gender, setGender] = useState(0);
  const [mobile, setMobile] = useState('');
  const [cop, setCop] = useState(false);
  const [copNumber, setCopNumber] = useState('');
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
    const file = Math.round((e.target.files[0].size / 1024));
                // The size of the file.
                if (file >= 250) {
                  setMessage("File too Big, please select a file under 220kb")
                  setOpen(true); 
                  setFile(null);
                  fileInput.current.value = null;
                }  else {
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
      setCop('false');
      setCopNumber('');
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
      setCopNumber(profileData.copNumber);


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
      setCopNumber(profileData.copNumber);


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
            formData.append('copNumber', copNumber); 
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
                  setCop('false');
                  setCopNumber('');
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
                  setCop('false');
                  setCopNumber('');
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
     <Box
        sx={{
          display: 'flex',
          flexDirection:'column',
          justifyContent: 'flex-start',
          alignItems:'center',
          marginTop:'40px',
          marginBottom:'40px',
          bgcolor: 'bg.paper',
          borderRadius: 1,
          width: '100%',
        }}
      >
        <Profile hidden={hide}>
                            <ArrowBackIcon  onClick={() => navigate('/kdba_members')} style={{cursor:'pointer'}}/>
          {
                           advocateID === '' ? "Add Advocate Profile" : "Edit Advocate Profile"
          }
        </Profile>
        <Profile hidden={!hide}>
                          <ArrowBackIcon  onClick={() => navigate('/kdba_members')} style={{cursor:'pointer'}}/>
                           View Advocate Profile
        </Profile>
        {
          image === 'advocate' ? <StaticImageContainer/> :
            <ImgContainer img={`data:image/jpeg;base64,${image}`}/>
        }
       
        
        <Data>
          <Box sx={{ flexGrow: 1, }}>
              <Grid container spacing={2} sx={{
                          input: {
                            color: "white",
                          },
                          label:{
                            fontSize:'larger',
                            fontWeight:'bold'
                          }
                        }}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                    <TextField id="outlined-basic" label="Name" fullWidth variant="outlined" 
                        disabled={disabled} value={name} onChange={(e)=> setName(e.target.value)}/>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <TextField id="outlined-basic" label="Enrollment Number" fullWidth variant="outlined" 
                     disabled={disabled} value={enrollNo} onChange={(e)=> setEnrollNo(e.target.value)}/>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <LocalizationProvider dateAdapter={AdapterDateFns} >
                        <DesktopDatePicker
                          inputFormat="dd/MM/yyyy"
                          value={enrollDt}
                          label="Enrollment Date"
                          style={{height:'40px'}}
                          disabled={disabled}
                          onChange={changeEnrollDt}
                          renderInput={
                            (params) => <TextField {...params}/>
                          }
                        />
                      </LocalizationProvider>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <TextField id="outlined-basic" label="LF number" fullWidth variant="outlined" 
                     disabled={disabled} value={lfNumber} onChange={(e)=> setLfNumber(e.target.value)}/>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <LocalizationProvider dateAdapter={AdapterDateFns} >
                        <DesktopDatePicker
                          inputFormat="dd/MM/yyyy"
                          value={admissionDt}
                          label="Admission Date"
                          style={{height:'40px'}}
                          disabled={disabled}
                          onChange={changeAdmissionDt}
                          renderInput={
                            (params) => <TextField  {...params}/>
                          }
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <FormControl fullWidth >
                      <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={gender}
                        disabled={disabled}
                        label="Age"
                       style={{color:'white'}}
                        onChange={(e)=> setGender(e.target.value)}
                      >
                        <MenuItem value={0}>None</MenuItem>
                        <MenuItem value={'male'}>Male</MenuItem>
                        <MenuItem value={'female'}>Female</MenuItem>
                      </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <LocalizationProvider dateAdapter={AdapterDateFns} >
                        <DesktopDatePicker
                          inputFormat="dd/MM/yyyy"
                          value={birthDt}
                          label="Date of Birth"
                          style={{height:'40px'}}
                          disabled={disabled}
                          onChange={changeBirthDt}
                          renderInput={
                            (params) => <TextField  {...params}/>
                          }
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <TextField id="outlined-basic" label="Mobile" fullWidth variant="outlined" 
                    disabled={disabled} value={mobile} onChange={(e)=> setMobile(e.target.value)}/>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-cop-label">Cop</InputLabel>
                      <Select
                        labelId="demo-simple-cop-labell"
                        id="demo-simple-cop"
                        value={cop}
                        disabled={disabled}
                        label="Cop"
                        style={{color:'white'}}
                        onChange={(e)=> setCop(e.target.value)}
                      >
                        <MenuItem value={'true'}>True</MenuItem>
                        <MenuItem value={'false'}>False</MenuItem>
                      </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <TextField id="outlined-basic" label="Cop Number" fullWidth variant="outlined" 
                    disabled={disabled} value={copNumber} onChange={(e)=> setCopNumber(e.target.value)}/>
                </Grid>
                
              </Grid>
            </Box>
            <Snackbar anchorOrigin={{ vertical, horizontal }} open={open} autoHideDuration={6000} onClose={handleClose}  key={vertical + horizontal}>
              <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
                {message}
              </Alert>
            </Snackbar>
        </Data>
        <input type={"file"} 
          style={{border: "none",height: '50px',marginTop: '10px'}} 
          accept={"image/*"}
          multiple={false}
          disabled={disabled}
          ref={fileInput}
          onChange={(e) => imageUpload(e)} />                   
        <Button variant="contained" sx={{marginTop:'10px'}} disabled={disabled} onClick={save} >
          {
                           advocateID === '' ? "Save" : "Update"
          }
        </Button>
      </Box>
    </Container>
  )
}

export default AdvocateProfile
