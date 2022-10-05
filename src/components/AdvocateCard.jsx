import React, { useState } from 'react'
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Skeleton from '@mui/material/Skeleton';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PlagiarismOutlinedIcon from '@mui/icons-material/PlagiarismOutlined';
import {useNavigate} from 'react-router-dom';
import diploma from '../assets/diploma.gif';
import { useAdvocateHook } from '../hooks/useAdvocateHook';


const Tittle = styled.div`
    font-size: x-large;
    color: white;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
                0px 1px 1px 0px rgb(0 0 0 / 14%), 
                0px 1px 3px 0px rgb(0 0 0 / 12%);
`

const Paper = styled.div`
background-color: #fff;
    color: rgba(0, 0, 0, 0.87);
    -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 4px;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
                0px 1px 1px 0px rgb(0 0 0 / 14%), 
                0px 1px 3px 0px rgb(0 0 0 / 12%);

    
`
const AccordinName = styled.div`

color: #F4A460;
word-break: break-word;
  font-size:2.6vh;
  /* @media only screen and (max-width: 2560px) {
      font-size: x-large;
    }*/
`

const HeadingTypography = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  flex-wrap: wrap;

` 
const BodyTypography = styled.div`

word-break: break-word;
font-size:1.6vh;
`

const Item = styled.div`
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 5px;
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
    background-color: rgb(255, 255, 255);
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.43;
    letter-spacing: 0.01071em;
    text-align: center;
    color: rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: row;
    border: 2px solid white;

    &:hover{
        border: 2px solid blue;
    }
`

const Gif = styled.img`
    width: 40px;
height: 40px;
    background-repeat:no-repeat;
  background-size: cover;
  border: none;
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

const AdvocateCard = () => {

  const navigate = useNavigate();
  
    const [copyBarMembers, setCopyBarMembers] = useState([]);
    const [copyMembersForEnroll, setCopyMembersForEnroll] = useState([]);
    const onSuccess = ()=> {
      console.warn("Successfully fetched the data")
    }
    const onError =  ()=> {
      console.warn(error)
    }

    const { isLoading, isError, data, error } = useAdvocateHook(onSuccess,onError,copyBarMembers,copyMembersForEnroll)

    const [pageNumber, setPageNumber] = useState(0);
  const advocatesPerPage = 36;
  const advocatesVisited = pageNumber * advocatesPerPage;
    const advocatesCount =  data !== undefined && data.length !== 0 ? Math.ceil( data.length / advocatesPerPage) : 0;
  
    if(isError){
        return <ErrorMessage>{error.message}</ErrorMessage>
    }


    
  const changePage = (event, value) => {
    setPageNumber(value-1);
  };


      const convertBackendDateToFront = (value) => {
        var date = new Date(value.replace('IST', ''));
        let day = date.getDate();
        let month = date.getMonth()+1;
        let year = date.getFullYear();
        const changeddate = day+"/"+month+"/"+year
        return changeddate;
      }

      const checkDOB = (date) => {
        if(date === "20/7/2022")
        {
          return "dd/MM/YYYY"
        }
        else{
          return date
        }
      }

      const checkImage = (item)=> {
        if (item.image === undefined ) {
          return "https://blog.ipleaders.in/wp-content/uploads/2017/04/BV-Acharya-56.jpg";
        }
        else if (item.image.data === ""){
          return "https://blog.ipleaders.in/wp-content/uploads/2017/04/BV-Acharya-56.jpg";
        }
        else{
          return `data:image/jpeg;base64,${item.image.data}`;
        }
      }

      const checkBarMembers = (e)=>{
        let caseInsensitive = e.target.value.toLowerCase();
        setCopyMembersForEnroll([])
        setCopyBarMembers(caseInsensitive);
      }

      const checkBarMemberswithEnroll = (e)=>{
        let caseInsensitiveEnroll = e.target.value.toLowerCase();
        setCopyBarMembers([])
        setCopyMembersForEnroll(caseInsensitiveEnroll);
      }

      const capitalMale = (gender)=> {
        if(gender === "male"){
          return "Male"
        }
        else if(gender === "female"){
          return "Female"
        }
        else{
          return ""
        }
      }

      const toCertificate = (item)=> {
        navigate('/certificate', {state : {data: item}});
      }

  return (
    <Box sx={{ width: '100%',  display: 'flex',
    backgroundImage: 'url("https://coolbackgrounds.io/images/backgrounds/index/gulf-dec0ccde.svg")',
    backgroundRepeat:'no-repeat',
  backgroundSize: 'cover',
        padding: '20px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center' }}>
        <Tittle>
             Advocate card
         </Tittle>

         <Box sx={{ flexGrow: 1, }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Item> 
                    <InputBase
                      sx={{ ml: 1, flex: 1}}
                      placeholder="search by name..."
                      size="small"
                      onChange={(e)=> checkBarMembers(e)}
                      inputProps={{ 'aria-label': 'search by name' }}
                    />
                    <IconButton  sx={{ p: '10px',color:"mediumorchid"}} aria-label="search">
                      <Tooltip title="Search Advocate Profile" placement="bottom-end" arrow>
                          <PersonSearchOutlinedIcon />
                      </Tooltip>
                    </IconButton>
                  </Item>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Item>
                      <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="search by enrollment number..."
                            size="small"
                            onChange={(e)=> checkBarMemberswithEnroll(e)}
                            inputProps={{ 'aria-label': 'search by enroll number' }}
                          />
                      <IconButton sx={{ p: '10px',color:"chocolate" }} aria-label="search">
                        <Tooltip title="Search enrollment number" placement="bottom-start" arrow>
                            <PlagiarismOutlinedIcon />
                        </Tooltip>
                      </IconButton>
                  </Item>
                </Grid>
            </Grid>
        </Box>

         {
            isLoading ? 
                    <Masonry style={{marginTop: '20px'}} columns={{xs: 1, sm: 3, md:3, lg:5, xl:5  }} spacing={{xs: 2, sm: 4, md:4, lg:6, xl:6}} >
                            {[...Array(12)].map((item, index) => (
                                <Paper key={index}>
                                <Skeleton variant="rectangular" animation="wave" width="100%" height={118} />
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        >
                                            Loading......
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Skeleton animation="pulse" width="100%" />
                                    </AccordionDetails>
                                </Accordion>
                            </Paper>
                            ))}
                    </Masonry> 

        : 
                    <Masonry style={{marginTop: '20px'}} columns={{xs: 1, sm: 3, md:3, lg:5, xl:5  }} spacing={{xs: 2, sm: 4, md:4, lg:6, xl:6}} >
                            {data.slice(advocatesVisited, advocatesVisited + advocatesPerPage).map((item, index) => (
                              
                                  <Paper key={index}>
                                <img
                                src={ checkImage(item)}
                                alt={item.firstname}
                                loading="lazy"
                                style={{
                                    borderTopLeftRadius: 4,
                                    borderTopRightRadius: 4,
                                    display: 'block',
                                    width: '100%',
                                }}
                                />
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        sx={{display: 'flex',
                                          flexDirection: 'column',
                                          flexWrap: 'wrap',
                                          alignItems: 'center',
                                          justifyContent: 'center'}}
                                        >
                                        <HeadingTypography >
                                          <AccordinName style={{fontSize:'bold' }}>
                                          {item.firstname}
                                          </AccordinName>
                                          <Tooltip title="Certificate">
                                            <IconButton aria-label="certificate" onClick={()=> toCertificate(item)}>
                                              <Gif src={diploma} alt="diploma"/>
                                            </IconButton>
                                          </Tooltip>
                                        </HeadingTypography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <BodyTypography >
                                        {
                                           `Name: ${item.firstname}` 
                                        }
                                        </BodyTypography>
                                        <BodyTypography>
                                        {
                                           `EN.NO : ${item.enrollmentNo}` 
                                        }
                                        </BodyTypography>
                                        <BodyTypography>
                                        {
                                           `EN.DT: ${ convertBackendDateToFront(item.enrollmentDate)}` 
                                        }
                                        </BodyTypography>
                                        <BodyTypography >
                                        {
                                            `Mobile : ${item.mobile}`
                                        }
                                        </BodyTypography>
                                        <BodyTypography>
                                        {
                                            `LF.NO : ${item.lfNumber}`
                                        }
                                        </BodyTypography>
                                        <BodyTypography>
                                        {
                                            `Ad.Dt : ${ convertBackendDateToFront(item.admissionDate)}`
                                        }
                                        </BodyTypography>
                                        <BodyTypography>
                                        {
                                            `Gender : ${capitalMale(item.gender)}`
                                        }
                                        </BodyTypography>
                                        <BodyTypography>
                                        {
                                            `DOB : ${ checkDOB(convertBackendDateToFront(item.dob))}`
                                        }
                                        </BodyTypography>
                                        <BodyTypography>
                                        {
                                            `COP : ${item.cop}`
                                        }
                                        </BodyTypography>
                                        <BodyTypography>
                                        {
                                            `Remarks : ${item.remarks}`
                                        }
                                        </BodyTypography>
                                    </AccordionDetails>
                                </Accordion>
                            </Paper>
                              
                            ))}
                    </Masonry>

         }
      
      <Stack spacing={2}>
        <Pagination count={advocatesCount} variant="outlined" color="secondary" onChange={changePage} />
      </Stack>

        
    </Box>
  )
}

export default AdvocateCard
