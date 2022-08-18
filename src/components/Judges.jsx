import React from 'react'
import styled from 'styled-components'
import Grid from '@mui/material/Grid';
import { JudgeData } from './JudgesData';
import Box from '@mui/material/Box';

const Container = styled.div`
    display: flex;
    padding: 20px;
    width: 100%;
    height: fit-content;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(231, 235, 240);
`
const Tittle = styled.div`
    font-size: x-large;
`
const JudgeCard = styled.div`
  height: 300px;
    width: auto;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
    border-radius: 4px;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
    background-color: #fff;
    padding: 16px;
    
    @media only screen and (min-width: 2560px) {
      height: 500px;
    }

    
`

const JudgeImage = styled.img`
  width: 100%;
height: 85%;
  background-repeat:no-repeat;
  background-size: cover;
  border: none;
`

const JudgeTitle = styled.div`
  font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.43;
    letter-spacing: 0.01071em;
    text-align: center;
    color: rgba(0, 0, 0, 0.6);

    &:hover{
        transform: scale(1.4);
    }
    @media only screen and (min-width: 1440px) {
      font-size: 16px;
    }
    @media only screen and (min-width: 2560px) {
      font-size: 22px;
    }
`


const JudgePeriod = styled.div`
font-weight: 200;
    font-size: 12px;
    text-align: center;
    color: rgba(0, 0, 0, 0.6);

    &:hover{
        transform: scale(1.4);
    }

    @media only screen and (min-width: 1440px) {
      font-size: 16px;
    }
    @media only screen and (min-width: 2560px) {
      font-size: 22px;
    }
`


const Judges = () => {
  return (
    <Container>
       <Tittle>
            District and Sessions Judges
        </Tittle>
        <Box sx={{ flexGrow: 1, marginTop:'30px' }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  {
                    JudgeData
                      .map((obj)=> (
                          <Grid item xs={12} sm={4} md={3} lg={3} xl={3} key={obj.id}>
                              <JudgeCard>
                                <JudgeImage src={obj.image}/>
                                  <JudgeTitle>
                                  {
                                    obj.Title
                                  }
                                  </JudgeTitle>
                                  <JudgePeriod>
                                  {
                                    obj.Period
                                  }
                                  </JudgePeriod>
                              </JudgeCard>
                          </Grid>
                      ))
                      
                  }
          </Grid>
        </Box>
    </Container>
  )
}

export default Judges
