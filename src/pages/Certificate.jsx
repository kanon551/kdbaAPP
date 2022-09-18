import React, { useState, useRef } from 'react';
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
import move from '../assets/move.gif';
import ChairIcon from '@mui/icons-material/Chair';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';
import Button from '@mui/material/Button';
import pngIcon from '../assets/pngIcon.png';
import jpgIcon from '../assets/jpegIcon.png';
import Stack from '@mui/material/Stack';
import pdfIcon from '../assets/pdfIcon.png';
import certificateCanvas from '../assets/certificate.png';
import { useLocation } from 'react-router-dom';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import CalcDate from '../hooks/CalcDate';

const Container = Styled.div`
    display: flex;
    flex-direction: column;
    
  width: 100%;
  background: linear-gradient(rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)), url("https://img.freepik.com/free-vector/flat-geometric-background_23-2148957201.jpg?w=2000"),
    center;
    background-repeat: no-repeat;
    background-size: cover;
  z-index: -1;
  margin-bottom: 50px;

  @media only screen and (max-width: 2560px) {
    height: fit-content;
    }
    @media only screen and (max-width: 1440px) {
      height: fit-content;
    }
    @media only screen and (max-width: 1024px) {
      height: fit-content;
    }
    @media only screen and (max-width: 768px) {
      height: fit-content;
    }
    @media only screen and (max-width: 700px) {
      height: fit-content;
    }
    @media only screen and (max-width: 425px) {
      height: 100vh;
    }
    @media only screen and (max-width: 375px) {
      height: 100vh;
    }
    @media only screen and (max-width: 320px) {
      height: 100vh;
    }
  
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
    color: skyblue;
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

const Paper = Styled.div`
  background-color: rgb(255, 255, 255);
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
    margin: 30px;
    position: relative;
`


const ReadyCertificate = Styled.img`
  width: 100%;
  height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
`
const CentificateHolder = Styled.div`
  position: absolute;
  top: 43%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-family: cursive;
    font-weight: 400px;
    color: peru;

    font-size:2.6vw;
`

const CertificateDate = Styled.div`
  position: absolute;
  top: 33%;
  right: 5%;

  /* font-family: system-ui; */
  font-family: 'IBM Plex Mono', monospace;
    color: mediumblue;
    
    font-size:2vw;
`

const HoldersFather = Styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-family: cursive;
    font-weight: 400px;
    color: peru;

    font-size:2.6vw;
`

const HolderAdmission = Styled.div`
  position: absolute;
  bottom: 15%;
  left: 65%;

  font-family: 'IBM Plex Mono', monospace;
  font-weight: 400;

  font-size:2vw;
`

const PractiseYears = Styled.div`
  position: absolute;
  bottom: 15%;
  left: 84%;

  font-family: 'IBM Plex Mono', monospace;
  font-weight: 400;

  font-size:2vw;
`

const HoldersEnroll = Styled.div`
  position: absolute;
  bottom: 15%;
  left: 6%;

  font-family: 'IBM Plex Mono', monospace;
  font-weight: 400;

  font-size:2vw;
`

const HoldersEnnrollDt = Styled.div`
  position: absolute;
  bottom: 15%;
  left: 26%;

  font-family: 'IBM Plex Mono', monospace;
  font-weight: 400;

  font-size:2vw;
`
const FatherWrapper = Styled.div`
display: flex;
align-items: center;
justify-content: center;

font-family: system-ui;
    font-weight: 400;
    color: cornflowerblue;
`

const convertBackendDateToFront = (value) => {
  var date = new Date(value.replace('IST', ''));
  let day = date.getDate();
  let month = date.getMonth()+1;
  let year = date.getFullYear();
  const changeddate = day+"/"+month+"/"+year
  return changeddate;
}

const calculateService = (value)=> {

  let difference = CalcDate(value,new Date())
  let arr = difference['result'].split(' ');

  // The array
  return arr[0]+"."+arr[2]+" "+arr[1];
}


const ComponentToPrint = React.forwardRef((props, ref) => (
    <Paper ref={ref}>
        <ReadyCertificate src={certificateCanvas}/>
        <CertificateDate>
          {new Date().getDate()}/{new Date().getMonth()+1}/{new Date().getFullYear()}
        </CertificateDate>
        <CentificateHolder>
          {props.data === null ? "Name" : props.data.firstname}
        </CentificateHolder>
        <HoldersFather>
          {props.father}
        </HoldersFather>
        <HolderAdmission>
        {props.data === null ? "Admission Date" : convertBackendDateToFront(props.data.admissionDate)}
        </HolderAdmission>
        <PractiseYears>
          {props.data === null ? "" : calculateService(props.data.admissionDate)}
        </PractiseYears>
        <HoldersEnroll>
        {props.data === null ? "Enrollment Number" : props.data.enrollmentNo}
        </HoldersEnroll>
        <HoldersEnnrollDt>
        {props.data === null ? "Enrollment Date" : convertBackendDateToFront(props.data.enrollmentDate)}
        </HoldersEnnrollDt>
    </Paper>
  ));


const Certificate = () => {

    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
  
    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };
    const componentRef = useRef();
    const location = useLocation();
    const certificateData = location.state === null ? null : location.state.data;

    const [fatherName, setFatherName] = useState("");
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
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '25ch' },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection:'column',
                  marginTop: '20px',
                  marginBottom: '20px'
                }}
                noValidate
                autoComplete="off"
              >
                <FatherWrapper>
                  Enter Fathers Name
                </FatherWrapper>
                <OutlinedInput
                id="outlined-adornment-weight"
                value={fatherName}
                fullWidth
                onChange={(e)=>setFatherName(e.target.value)}
                aria-describedby="outlined-weight-helper-text"
              />
              </Box>
            <Stack direction="row" spacing={2} sx={{display: 'flex', alignItems:'center', justifyContent:'center'}}>
                <Button onClick={() => exportComponentAsJPEG(componentRef)} 
                        variant="outlined" 
                        startIcon={<Gif src={jpgIcon} alt="JPG"/>}>
                        Export As JPG
                </Button>
                <IconButton 
                onClick={() => exportComponentAsPDF(componentRef, {
                  pdfOptions: {
                    w: 750,
                    h: 420,
                    x : 0,
                    y: 0,
                    unit: 'px', 
                    orientation: 'p', 
                    pdfFormat : "legal"
                  }
                })} 
                aria-label="PDF">
                  <Gif src={pdfIcon} alt="PDF"/>
                </IconButton>
                <Button onClick={() => exportComponentAsPNG(componentRef)}
                        variant="contained" 
                        endIcon={<Gif src={pngIcon} alt="PNG"/>}>
                        Export As PNG
                </Button>
            </Stack>
            <ComponentToPrint ref={componentRef} data={certificateData} father={fatherName}/>
                

            
        </Container>
      <SwipeableDrawer
        anchor="bottom"
        open={open}
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
                        <Item color="No" onClick={() => navigate('/advocateGrid')}>
                            <GridOnIcon/>
                            Advocate GridView
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item color="current">
                            <CardMembershipIcon/>
                            Certiicate
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item color="No" onClick={() => navigate('/incumbancy')}>
                            <ChairIcon/>
                            Incumbency
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  )
}

export default Certificate
