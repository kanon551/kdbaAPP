import React from 'react'
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
import Feature from '../components/Feature';
import {useNavigate} from 'react-router-dom';
import kdbaLogo from '../assets/kdbaLogo.jpeg';
import GridOnIcon from '@mui/icons-material/GridOn';
import move from '../assets/move.gif';
import ChairIcon from '@mui/icons-material/Chair';


const Container = Styled.div`
     display: flex;
    flex-direction: column;
    height: fit-content;
    width: 100%;
    background: url("https://coolbackgrounds.io/images/backgrounds/index/sea-edge-79ab30e2.png");
    background-repeat: no-repeat;
    background-size: cover;
   z-index: -1;

   margin-bottom: 30px;
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

const History = () => {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
  
    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `fit-content`,
            overflow: 'visible'
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
            <Feature/>
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
                        <Item color="current">
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

export default History
