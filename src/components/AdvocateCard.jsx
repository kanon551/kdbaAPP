import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios';
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
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import {useNavigate} from 'react-router-dom';
import diploma from '../assets/diploma.gif';

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

  @media only screen and (max-width: 2560px) {
      font-size: x-large;
    }
    @media only screen and (max-width: 1440px) {
      font-size: larger;
    }
    @media only screen and (max-width: 1024px) {
      font-size: larger;
    }
    @media only screen and (max-width: 768px) {
      font-size: large;
    }
    @media only screen and (max-width: 700px) {
      font-size: small;
    }
    @media only screen and (max-width: 425px) {
      font-size: small;
    }
    @media only screen and (max-width: 375px) {
      font-size: x-small;
    }
    @media only screen and (max-width: 320px) {
      font-size: xx-small;
    }
`

const HeadingTypography = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

` 
const BodyTypography = styled.div`

  @media only screen and (max-width: 2560px) {
      font-size: 28px;
    }
    @media only screen and (max-width: 1440px) {
      font-size: 18px;
    }
    @media only screen and (max-width: 1024px) {
      font-size: 16px;
    }
    @media only screen and (max-width: 768px) {
      font-size: 14px;
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
      font-size: 8px;
    }
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

const AdvocateCard = () => {

  const navigate = useNavigate();

    const [barMembers, setBarMembers] = useState([]);
    const [copyBarMembers, setCopyBarMembers] = useState([]);
    const [copyMembersForEnroll, setCopyMembersForEnroll] = useState([]);


    const [pageNumber, setPageNumber] = useState(0);
  const advocatesPerPage = 12;
  const advocatesVisited = pageNumber * advocatesPerPage;
  const advocatesCount = Math.ceil(barMembers.length / advocatesPerPage);
  const changePage = (event, value) => {
    setPageNumber(value-1);
  };



    useEffect(()=>{
        getBarMemebers();
      },[])

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

      const getBarMemebers = async() => {
        try{
          const response = await axios.get(`https://kdbaapi.herokuapp.com/api/kdba/getBarMembers`);
          setCopyBarMembers(getRowsWithID(response.data['object']))
          setCopyMembersForEnroll(getRowsWithID(response.data['object']))
           setBarMembers(getRowsWithID(response.data['object']));
          
      }
     
      catch(e){
          console.log(e)
      }
      }

      const itemData = [
        {
          title: 'Loading......',
        },
        {
          title: 'Loading......',
        },
        {
          title: 'Loading......',
        },
        {
          title: 'Loading......',
        },
        {
          title: 'Loading......',
        },
        {
          title: 'Loading......',
        },
        {
          title: 'Loading......',
        },
        {
          title: 'Loading......',
        },
        {
          title: 'Loading......',
        },
        {
          title: 'Loading......',
        },
        {
          title: 'Loading......',
        },
        {
          title: 'Loading......',
        },
        {
          title: 'Loading......',
        },
        {
          title: 'Loading......',
        },
        {
          title: 'Loading......',
        },
        {
          title: 'Loading......',
        }
      ];

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
        console.log(item)
        navigate('/certificate', {state : {data: item}});
        // navigate('/advocateProfile', {state : {data: obj1, template: obj2 }});
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
                      onKeyDown={(e)=> checkBarMembers(e)}
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
                            onKeyDown={(e)=> checkBarMemberswithEnroll(e)}
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
            barMembers.length === 0 ? 
                    <Masonry style={{marginTop: '20px'}} columns={{xs: 2, sm: 3, md:3, lg:4, xl:4  }} spacing={{xs: 2, sm: 3, md:3, lg:4, xl:4}} >
                            {itemData.map((item, index) => (
                                <Paper key={index}>
                                    <Skeleton variant="rectangular" animation="wave" width="100%" height={118} />
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                            >
                                                {item.title}
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Skeleton animation="pulse" width="100%" />
                                        </AccordionDetails>
                                    </Accordion>
                                </Paper>

                            ))}
                    </Masonry> 

        : 
                    <Masonry style={{marginTop: '20px'}} columns={{xs: 2, sm: 3, md:3, lg:4, xl:4  }} spacing={{xs: 2, sm: 3, md:3, lg:4, xl:4}} >
                            {barMembers.slice(advocatesVisited, advocatesVisited + advocatesPerPage).map((item, index) => (
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
                                        >
                                        <HeadingTypography >
                                          <AccordinName style={{fontSize:'bold' }}>
                                          {item.firstname}
                                          </AccordinName>
                                          <Tooltip title="Certificate">
                                            <IconButton aria-label="certificate" onClick={()=> toCertificate(item)}>
                                              <Gif src={diploma} alt="diploma"/>
                                              {/* <CardMembershipIcon color="action" fontSize="large"/> */}
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
