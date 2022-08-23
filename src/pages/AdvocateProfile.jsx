import React, { useState,useRef,useEffect } from 'react'
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Styled from 'styled-components'
import PanToolIcon from '@mui/icons-material/PanTool';
import Grid from '@mui/material/Grid';
import HomeIcon from '@mui/icons-material/Home';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import GavelIcon from '@mui/icons-material/Gavel';
import BalanceIcon from '@mui/icons-material/Balance';
import {useNavigate} from 'react-router-dom';
import kdbaLogo from '../assets/kdbaLogo.jpeg'
import GridOnIcon from '@mui/icons-material/GridOn';
import TextField from '@mui/material/TextField';
import useMediaQuery from '@mui/material/useMediaQuery';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
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
import Button from '@mui/material/Button';
import move from '../assets/move.gif';
import jwt_decode from "jwt-decode";


const Container = Styled.div`
    display: flex;
    flex-direction: column;
  height: auto;
  width: 100%;
  background: linear-gradient(rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)), url("https://wallpaperaccess.com/full/4954969.jpg"),
    center;
  z-index: -1;

  margin-bottom: 50px;
`

const Logo = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center; 
`

const PureLogo = Styled.img`
     background-repeat:no-repeat;
  background-size: cover;
  width: 60px;
    height: 60px;
`

const LogoTitle = Styled.div`
    font-weight: bold;
    color: white;
    font-size: x-large;
    flex-wrap: wrap;
    text-decoration: underline #F4A460;
`

const AdminButton = Styled.div`
    border: 2px solid white;
    cursor: pointer;
    color: white;
    padding: 10px;
    font-weight: bold;
    border-radius: 5px;
    justify-content: center;
    display: flex;
    background: #F4A460;
    width: 50px;
    &:hover{
        border: 2px solid #F4A460;
    }
`

const Wrapper = Styled.div`
 padding: 20px;
 display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const Root = Styled.div`
    height: '100%';
  background-color: 'grey';
`
const Item = Styled.div`
transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
    background-color: ${props => props.color === "current" ? "cadetblue" : "rgb(255, 255, 255)" };
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-weight: 400;
    line-height: 1.43;
    letter-spacing: 0.01071em;
    padding: 8px;
    text-align: center;
    color: ${props => props.color === "current" ? "rgb(255, 255, 255)" : "rgba(0, 0, 0, 0.6)" };

    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    border: 1px solid white;

    &:hover{
        cursor: pointer;
    border: 1px solid #F4A460;
    }

    @media only screen and (max-width: 2560px) {
      font-size: 16px;
    }
    @media only screen and (max-width: 1440px) {
      font-size: 16px;
    }
    @media only screen and (max-width: 1024px) {
      font-size: 16px;
    }
    @media only screen and (max-width: 768px) {
      font-size: 16px;
    }
    @media only screen and (max-width: 700px) {
      font-size: 12px;
    }
    @media only screen and (max-width: 425px) {
      font-size: 12px;
    }
    @media only screen and (max-width: 375px) {
      font-size: 10px;
    }
    @media only screen and (max-width: 320px) {
      font-size: 10px;
    }
`
const Gif = Styled.img`
    width: 30px;
height: 30px;
    background-repeat:no-repeat;
  background-size: cover;
  border: none;
`


const Container2 = Styled.div`
    display: flex;
    padding-left: 40px;
    padding-right: 40px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background: "https://t3.ftcdn.net/jpg/02/36/23/66/360_F_236236696_mTYBnVvXVykDspnSwLdzo16jqjdVLdXy.jpg";
    background-repeat: no-repeat;
    background-size: cover; */
`

const Tittle = Styled.div`
    font-size: x-large;
    color: white;
    text-decoration: underline #F4A460;
    font-weight: bold;
`

const End = Styled.div`
    font-size: medium;
`

// const StyledBox = Styled.div`
//   background-color: 'grey';
// `

// const Puller = Styled.div`
//    width: 30px;
//   height: 6px;
//   background-color: '#F4A460';
//   border-radius: 3px;
//   position: 'absolute';
//   top: 8px;
//   left: 'calc(50% - 15px)';
// `

const drawerBleeding = 56;

// const Root = styled('div')(({ theme }) => ({
//   height: '100%',
//   backgroundColor:
//     theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
// }));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? '#F4A460' : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

const AdvocateProfile = () => {

    const navigate = useNavigate();
    const [openDrawer, setOpenDrawer] = React.useState(false);
  
    const toggleDrawer = (newOpen) => () => {
        setOpenDrawer(newOpen);
    };


    const matches = useMediaQuery('(max-width:900px)');
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

      const decoded = jwt_decode(localStorage.getItem('token'));

        const authAxios = axios.create({
          baseURL: `http://https://kdbaapi.herokuapp.com/api/kdba`,
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          },
        })
      
        if (decoded.exp < Date.now() / 1000) {
          
          navigate('/advocateGrid');
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
                await authAxios.post(`/barMember`,formData)
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
                await authAxios.put(`/barMember`,formData)
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
   }

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `fit-content`,
            overflow: 'visible',
          },
        }}
      />
        <Container>
            <Wrapper>
            <Logo>
                <PureLogo src={kdbaLogo}/>
                <LogoTitle>
                    Kurnool District Bar Association
                </LogoTitle>
            </Logo>
                <AdminButton onClick={toggleDrawer(true)}>
                        <PanToolIcon/>
                </AdminButton>
            </Wrapper>
            <Container2>
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
                </Container2>

        </Container>
      <SwipeableDrawer
        anchor="bottom"
        open={openDrawer}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: 'absolute',
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
            right: 0,
            left: 0,
            border: '1px solid #F4A460',
          }}
        >
          <Puller />
          <Typography sx={{ p: 2, color: 'text.secondary', display:'flex', flexDirection:'row', justifyContent:'flex-start', alignItems:'center' }}>
            <Gif src={move} alt="drag..."/>
            drag
          </Typography>
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            paddingTop:'16px',
            height: '100%',
            overflow: 'auto',
            border: '1px solid #F4A460'
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Item color="No" onClick={() => navigate('/home')}>
                            <HomeIcon/>
                            Home
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item color="No" onClick={() => navigate('/history')}>
                            <HistoryEduIcon/>
                            History
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item color="No" onClick={() => navigate('/judges')}>
                            <GavelIcon/>
                            Judges
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item color="No" onClick={() => navigate('/advocates')}>
                            <BalanceIcon/>
                            Advocates
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item color="No" onClick={() => navigate('/advocateGrid')}>
                            <GridOnIcon/>
                            Advocate GridView
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item color="current">
                            <GridOnIcon/>
                            Admin Access
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  )
}

export default AdvocateProfile
