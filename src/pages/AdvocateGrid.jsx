import React, { useState } from 'react'
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
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import move from '../assets/move.gif';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import ChairIcon from '@mui/icons-material/Chair';
import KdbaQueryMembers from './KdbaQueryMembers';

const Container = Styled.div`
    display: flex;
    flex-direction: column;
  height: 100vh;
  width: 100%;
  background-image: url("https://i.pinimg.com/originals/5c/e0/5e/5ce05e42fd984649cba8ff13d2697d82.jpg") ;
  background-repeat: no-repeat;
    background-size: cover;
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

const drawerBleeding = 56;

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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AdvocateGrid = () => {

    const navigate = useNavigate();
    const [openDrawer, setOpenDrawer] = useState(false);
  
    const toggleDrawer = (newOpen) => () => {
        setOpenDrawer(newOpen);
    };

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    const vertical = "top";
    const horizontal = "center";
    const [snakOpen, setSnakOpen] = useState(false);
    const[message,setMessage] = useState('');

    const handleSnakClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setSnakOpen(false);
    };


    const[password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);
    const [email, setEmail] = useState('');

      

    const checkLoginStatus =async() => {

      const data ={
        email: email,
        password: password
      }

      await axios.post("https://kdbaapi.herokuapp.com/api/kdba/login",data)
      .then(res => {
        setMessage(res.data.message)
        setSnakOpen(true);

        if(res.data.token !== null && localStorage.getItem('token') !== undefined){
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('mail', res.data['object'].email)
          localStorage.setItem('kdbaAdminId', res.data['object']._id)

          setOpen(false);
        }
        else{
          localStorage.setItem('token', null)
          localStorage.setItem('mail', null)
          localStorage.setItem('kdbaAdminId', null)
        }
        
      })
      .catch(err => {
        
      })

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
            <KdbaQueryMembers/>
            <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle  sx={{display: 'flex',justifyContent:'space-between', alignItems:'center'}}>
                  Login
                  <CloseIcon sx={{cursor: 'pointer'}}  onClick={handleClose}/>
                </DialogTitle>
                <DialogContent dividers>
                  <DialogContentText id="alert-dialog-slide-description">
                      <Box
                        component="form"
                        sx={{
                          display: 'flex',
                          flexDirection:'column',
                          '& > :not(style)': { m: 1, width: 'auto' },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                          <TextField style={{margin: "10px"}}
                                          label="Email"
                                          fullWidth
                                          value={email}
                                          onChange={(event)=> setEmail(event.target.value)}
                           />
                          <FormControl  style={{margin: "10px"}} variant="outlined">
                                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                  <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword === true ? "password" : "text"}
                                    value={password}
                                    fullWidth
                                    onChange={(event)=> setPassword(event.target.value)}
                                    endAdornment={
                                      <InputAdornment position="end">
                                        <IconButton
                                          aria-label="toggle password visibility"
                                            onClick={()=>setShowPassword(!showPassword)}
                                          edge="end"
                                        >
                                          {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                      </InputAdornment>
                                    }
                                    label="Password"
                                  />
                            </FormControl>
                      </Box>
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button onClick={()=>checkLoginStatus()}>Login</Button>
                </DialogActions>
            </Dialog>

            <Snackbar anchorOrigin={{ vertical, horizontal }} open={snakOpen} autoHideDuration={6000} onClose={handleSnakClose}  key={vertical + horizontal}>
              <Alert onClose={handleSnakClose} severity="info" sx={{ width: '100%' }}>
                {message}
              </Alert>
            </Snackbar>

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
            border: '1px solid #F4A460'
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
                    <Grid item xs={4}>
                        <Item color="current">
                            <GridOnIcon/>
                            Advocate GridView
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item color="No" onClick={() => navigate('/incumbancy')}>
                            <ChairIcon/>
                            Incumbency
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item color="No" onClick={handleClickOpen}>
                            <GridOnIcon/>
                            Admin
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  )
}

export default AdvocateGrid
