import React from 'react';
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
import kdbaLogo from '../assets/kdbaLogo.jpeg';
import GridOnIcon from '@mui/icons-material/GridOn';
import move from '../assets/move.gif';
import ChairIcon from '@mui/icons-material/Chair';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';


const Container = Styled.div`
    display: flex;
    flex-direction: column;
  height: fit-content;
  width: 100%;
  background: linear-gradient(rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)), url("https://images.pond5.com/beautiful-white-hexagons-surface-morphing-090457143_prevstill.jpeg"),
    center;
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
const CardLeft = Styled.div`
  width: 80%
`
const CardRight = Styled.div`
font-family: "Roboto","Helvetica","Arial",sans-serif;
    font-weight: 400;
    @media only screen and (max-width: 2560px) {
      font-size: 20px
    }
    @media only screen and (max-width: 1440px) {
      font-size: 16px
    }
    @media only screen and (max-width: 1024px) {
      font-size: 16px
    }
    @media only screen and (max-width: 768px) {
      font-size: 16px
    }
    @media only screen and (max-width: 700px) {
      font-size: 16px
    }
    @media only screen and (max-width: 425px) {
      font-size: 14px
    }
    @media only screen and (max-width: 375px) {
      font-size: 12px
    }
    @media only screen and (max-width: 320px) {
      font-size: 10px
    }
`

const CardTitle = Styled.div`
margin: 0;
    font-family: "Roboto","Helvetica","Arial",sans-serif;
    font-weight: 400;
    
    line-height: 1.5;
    letter-spacing: 0.00938em;

    @media only screen and (max-width: 2560px) {
      font-size: 20px
    }
    @media only screen and (max-width: 1440px) {
      font-size: 16px
    }
    @media only screen and (max-width: 1024px) {
      font-size: 16px
    }
    @media only screen and (max-width: 768px) {
      font-size: 16px
    }
    @media only screen and (max-width: 700px) {
      font-size: 16px
    }
    @media only screen and (max-width: 425px) {
      font-size: 14px
    }
    @media only screen and (max-width: 375px) {
      font-size: 12px
    }
    @media only screen and (max-width: 320px) {
      font-size: 10px
    }
`
const CardDescription = Styled.div`
margin: 0;
    font-family: "Roboto","Helvetica","Arial",sans-serif;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.00938em;
    color: rgba(0, 0, 0, 0.6);
    margin-bottom: 12px;

    @media only screen and (max-width: 2560px) {
      font-size: 18px
    }
    @media only screen and (max-width: 1440px) {
      font-size: 14px
    }
    @media only screen and (max-width: 1024px) {
      font-size: 14px
    }
    @media only screen and (max-width: 768px) {
      font-size: 14px
    }
    @media only screen and (max-width: 700px) {
      font-size: 14px
    }
    @media only screen and (max-width: 425px) {
      font-size: 12px
    }
    @media only screen and (max-width: 375px) {
      font-size: 10px
    }
    @media only screen and (max-width: 320px) {
      font-size: 8px
    }
   
`
const OtMembers = Styled.div`
font-size: 30px;
    @media only screen and (max-width: 600px) {
        font-size: 20px;
    }
`

const Tab2Head = Styled.div`
display: flex;
    align-items: center;
    justify-content: center;
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

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const Incumbency = () => {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
  
    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };

    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);

  };

  const FoundersData = [
    {
      Name: "SRI S.GANAPATHI IYAR",
      Desription: "Fort, Kurnool.",
      Title: "President "
    },
    {
      Name: "SRI. V.BHIMESWARA REDDY",
      Desription: "Public Prosecutor, Fort, Kurnool ",
      Title: "Vice-President "
    },
    {
      Name: "SRI. N.RANGANATH",
      Desription: "Officer’s Club Road, Kurnool",
      Title: "Vice- President "
    },
    {
      Name: "SRI. R.C. SUBBAIAH",
      Desription: "Advocate, Peta, Kurnool.",
      Title: "Secretary"
    },
    {
      Name: "SRI. S.SUNDARAMAIAH",
      Desription: "Advocate, N.R.Peta, Kurnool ",
      Title: "Joint Secretary"
    },
    {
      Name: "SRI. G.NAGALAKSHMI REDDY",
      Desription: "Advocate, N.R.Peta, Kurnool",
      Title: "Librarian"
    }
  ]
  
  const OthersData = [
    {
      Name: "SRI. P.LAKSHMI REDDY",
      Desription: "ADVOCATE ,FORT, KURNOOL ",
      Title: ""
    },
    {
      Name: "SRI.S.NAZIR AHMED",
      Desription: "ADVOCATE ,FORT, KURNOOL ",
      Title: ""
    },
    {
      Name: "SRI.D.C.SUBBANNA ",
      Desription: "ADVOCATE ,FORT, KURNOOL ",
      Title: ""
    },
    {
      Name: "SRI. P.R. KRISHNA REDDY",
      Desription: "ADVOCATE ,FORT, KURNOOL ",
      Title: ""
    },
    {
      Name: "SRI. C.YESURATHNAM",
      Desription: "ADVOCATE ,FORT, KURNOOL ",
      Title: ""
    }
  ]

  const rows = [
    {
      id: 1,
      years: '1982-1983',
      president: 'K.RAMA KRISHNA RAO',
      gn: 'A.SUNDAR RAMAIAH'
    },
    {
      id: 2,
      years: '1983-1984',
      president: 'B.JANGAM REDDY',
      gn: 'A.SUNDAR RAMAIAH'
    },
    {
      id: 3,
      years: '1984-1985',
      president: 'K.SUBRAMANYAM',
      gn: 'K.VENKATA RAMAIAH'
    },
    {
      id: 4,
      years: '1985-1986',
      president: 'P.SUBRAMANYAM',
      gn: 'V.NAGANJANEYULU'
    },
    {
      id: 5,
      years: '1986-1987',
      president: 'M.A.SALAM',
      gn: 'T.NARAYANA REDDY'
    },
    {
      id: 6,
      years: '1987-1988',
      president: 'M.A.SALAM',
      gn: 'B.KOTESWAR REDDY'
    },
    {
      id: 7,
      years: '1988-1989',
      president: 'P.PRAHLADA REDDY',
      gn: 'K.KAPILESWA RAIAH'
    },
    {
      id: 8,
      years: '1989-1990',
      president: 'K.V. CHALAPATHI RAO',
      gn: 'M.L.SRINIVASA REDDY'
    },
    {
      id: 9,
      years: '1990-1991',
      president: 'B.JANGAM REDDY',
      gn: 'A.SUNDAR RAMAIAH'
    },
    {
      id: 10,
      years: '1991-1992',
      president: 'M.A.SALAM',
      gn: 'C.NAGENDRANATH'
    },
    {
      id: 11,
      years: '1992-1993',
      president: 'P.SUBRAHMANYAM',
      gn: 'V.NAGANJANEYULU'
    },
    {
      id: 12,
      years: '1993-1994',
      president: 'KATTAM RAMAKRISHNA REDDY',
      gn: 'B. MURALI MANOHAR'
    },
    {
      id: 13,
      years: '1994-1995',
      president: 'K.V. CHALAPATHI RAO',
      gn: 'V.V.KRISHNAMRAJ'
    },
    {
      id: 14,
      years: '1995-1996',
      president: 'K.V. CHALAPATHI RAO',
      gn: 'J.JANAKIRAMI REDDY'
    },
    {
      id: 15,
      years: '1996-1997',
      president: 'N.SRIRAMULU',
      gn: 'V.VICTOR  AUGUSTINE'
    },
    {
      id: 16,
      years: '1997-1998',
      president: 'N.SRIRAMULU',
      gn: 'T.NAGABHUSHANAM NAIDU'
    },
    {
      id: 17,
      years: '1998-1999',
      president: 'N.SRINIVASA CHARI',
      gn: 'P.SUNKANNA'
    },
    {
      id: 18,
      years: '1999-2000',
      president: 'G.NAGALAKSHMI REDDY',
      gn: 'L.HARI HARANATHA REDDY'
    },
    {
      id: 19,
      years: '2000-2001',
      president: 'J.JANAKIRAMI REDDY',
      gn: 'A.CHANDRAMOULISWARAREDDY'
    },
    {
      id: 20,
      years: '2001-2002',
      president: 'V.NAGANJENEYULU',
      gn: 'KAVELLA RAMA KRISHANA REDDY'
    },
    {
      id: 21,
      years: '2002-2003',
      president: 'CHALLA SUDHAKARA REDDY',
      gn: 'DASETTY SRINIVASULU'
    },
    {
      id: 22,
      years: '2003-2004',
      president: 'Y.RAJASEKHAR REDDY',
      gn: 'B.ADINARAYANA REDDY'
    },
    {
      id: 23,
      years: '2004-2005',
      president: 'K.KAPILESWARAIAH',
      gn: 'B.KRISHNA MURTHY'
    },
    {
      id: 24,
      years: '2005-2006',
      president: 'D.C.SUBBANNA',
      gn: 'P.SUVARANA REDDY'
    },
    {
      id: 25,
      years: '2006-2007',
      president: 'B.V.RAMANAREDDY',
      gn: 'K.MOHAN BABU'
    },
    {
      id: 26,
      years: '2007-2008',
      president: 'DASETY SRINIVASULU',
      gn: 'B.MURALI MOHAN'
    },
    {
      id: 27,
      years: '2008-2009',
      president: 'RANGA RAVI KUMAR',
      gn: 'M.PRABHAKAR'
    },
    {
      id: 28,
      years: '2009-2010',
      president: 'N.NARAYAN REEDY',
      gn: 'B.CHANDURUDU'
    },
    {
      id: 29,
      years: '2010-2011',
      president: 'C.NAGENDRANATH',
      gn: 'C.PRABHAKAR REDDY'
    },
    {
      id: 30,
      years: '2011-2012',
      president: 'M.D.Y RAMAMURTHY',
      gn: 'N.RAMACHANDRA'
    },
    {
      id: 31,
      years: '2012-2013',
      president: 'Y.JAYARAJU',
      gn: 'D.SIVASANKARA REDDY'
    },
    {
      id: 32,
      years: '2013-2014',
      president: 'K.LAKSHMI NARAYANA',
      gn: 'S.A.SUBHAN'
    },
    {
      id: 33,
      years: '2014-2015',
      president: 'A.CHANDRAMOULISWARAREDDY',
      gn: 'P.HARINATH CHOWDARY'
    },
    {
      id: 34,
      years: '2015-2016',
      president: 'K.OMKAR',
      gn: 'K.KUMAR'
    },
    {
      id: 35,
      years: '2016-2017',
      president: 'S.CHAND BASHA',
      gn: 'C.V.SRINIVASULU'
    },
    {
      id: 36,
      years: '2017-2018',
      president: 'V.NAGALAKSHMI DEVI',
      gn: 'S.BABU SAHEB'
    },
    {
      id: 37,
      years: '2018-2019',
      president: 'A.S.UMAR JAVEED ALI',
      gn: 'GOPALA KRISHNUDU.B'
    },
    {
      id: 38,
      years: '2019-2020',
      president: 'K.MOHAN BABU',
      gn: 'GOPALA  KRISHNAIAH.G'
    },
    {
      id: 39,
      years: '2021-2022',
      president: 'M.SUBBAIAH',
      gn: 'ABDUL KAREEM'
    },
    {
      id: 40,
      years: '2022-2023',
      president: 'M.R.KRISHNA',
      gn: 'KATAM RANGADU'
    },
  ]
  const columns = [
        { 
          field: 'id', 
          headerName: 'Sl.No', 
          width: 90 
        },
        {
          field: 'years',
          headerName: 'Years',
          width: 150,
        },
        {
          field: 'president',
          headerName: 'NAME OF THE PRESIDENT',
          width: 400,
        },
        {
          field: 'gn',
          headerName: 'NAME OF THE  GENERAL SECRETARY',
          width: 400,
        }
      ];
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
            <Box sx={{ width: '100%',padding: '20px' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                    >
                    <Tab style={{fontWeight: 'bold'}} label="FOUNDER MEMBERS" {...a11yProps(0)} />
                    <Tab style={{fontWeight: 'bold'}} label="PRESIDENTS AND SECRETARIES" {...a11yProps(1)} />
                </Tabs>
                </Box>
                <TabPanel  value={value} index={0}>
                  {
                    FoundersData.map((item, index) => (

                      <Card style={{marginBottom:'10px'}} key={index}>
                        <CardContent style={{display: 'flex', flexDirection:'row',alignItems: 'center', justifyContent: 'space-between'}}>
                          <CardLeft>
                            <CardTitle >
                            {
                              item.Name
                            }
                            </CardTitle>
                            <CardDescription >
                            {
                              item.Desription
                            }
                            </CardDescription>
                          </CardLeft>
                          <CardRight>
                            {
                              item.Title
                            } 
                          </CardRight>
                        </CardContent>
                      </Card>
                    ))
                  }
                  
                  <OtMembers>
                    Other Members
                  </OtMembers>
                      
                  {
                    OthersData.map((item, index) => (
                      <Card style={{marginBottom:'10px'}} key={index}>
                        <CardContent style={{display: 'flex', flexDirection:'row',alignItems: 'center', justifyContent: 'space-between'}}>
                          <CardLeft>
                            <CardTitle >
                            {
                              item.Name
                            }
                            </CardTitle>
                            <CardDescription >
                            {
                              item.Desription
                            }
                            </CardDescription>
                          </CardLeft>
                          <CardRight>
                            {
                              item.Title
                            } 
                          </CardRight>
                        </CardContent>
                      </Card>
                      ))

                  }

                </TabPanel>
                <TabPanel style={{height:'100vh'}} value={value} index={1}>
                <Tab2Head>
                    PRESIDENTS AND SECRETARIES OF THE DISTRICT BAR ASSOCIATION-KURNOOL
                </Tab2Head>
                

                <div style={{ marginTop:'30px', height: 500, width: '100%', display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <DataGrid style={{backgroundColor:'white'}}
                    rows={rows}
                    columns={columns}
                   components={{ Toolbar: GridToolbar }} />
                </div>
                </TabPanel>
            </Box>
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
                    <Grid item xs={6}>
                        <Item color="No" onClick={() => navigate('/advocateGrid')}>
                            <GridOnIcon/>
                            Advocate GridView
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item color="current" >
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

export default Incumbency
