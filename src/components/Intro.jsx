import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Justice1 from '../assets/legalKdba.jpg';
import Justice2 from '../assets/legalKdba2.jpg';
import Justice3 from '../assets/legalKdba3.jpg';
import Justice4 from '../assets/legalKdba4.jpg';
import AnimatedShapes from './AnimatedShapes';
import Grid from '@mui/material/Grid';


const Container = styled.div`
    height: fit-content;
    background-color: white;

    display: flex;
    padding: 20px;
`

const Image = styled.img`
    width: 100%;
height: 100%;
    background-repeat:no-repeat;
  background-size: cover;
  border: none;
`

const Title = styled.h1`
    font-size: 60px;
    @media only screen and (max-width: 600px) {
        font-size: 45px;
    }
`

const Anime = styled.div`
    height: fit-content;
    animation: AniTittle 15s ease-in-out infinite alternate ;

    @keyframes AniTittle {
        10%{
            transform: translateY(-80px);
        }
        20%{
            transform: translateY(-160px);
        }
        30%{
            transform: translateY(-240px);
        }
        40%{
            transform: translateY(-320px);
        }
        50%{
            transform: translateY(-400px);
        }
        60%{
            transform: translateY(-480px);
        }
        70%{
            transform: translateY(-560px);
        }
        80%{
            transform: translateY(-640px);
        }
        90%{
            transform: translateY(-720px);
        }
        100%{
            transform: translateY(-800px);
        }
    }
`
const AnimTitle = styled.div`
    height: 80px;
    font-size: 30px;
    font-weight: bold;
    color: #59b256;
    display: flex;
    align-items: center;
    justify-content: center;
`
const AnimItem = styled.div`
margin-top: 30px;
    height: 80px;
    overflow: hidden;
`

const Desc = styled.p`
width: 60%;
font-size: small;

@media only screen and (max-width: 600px) {
        font-size: smaller;
    }
`

const Intro = () => {

    const images = [Justice1, Justice2, Justice3, Justice4];
    const [currentImage, setCurrentImage] = useState(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage(images[Math.floor(Math.random() * images.length)]);
        }, 5000)
        
        return () => clearInterval(intervalId);
    }, [])

  return (
    <Container>
      <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={7} lg={7} xl={7} 
            style={{display: 'flex',flexDirection: 'column',alignItems: 'center',justifyContent: 'center'}}>
                 <Title>
                        KDBA Members
                </Title>
                <Desc>
                        We are a professional body of lawyers, responsible for
                        the regulation of the legal profession in Kurnool District jurisdiction, dedicated to serve the 
                        bar association members. Our association is established to promote professional competence, enforce
                        standards of ethical conduct, and encourage a spirit of public service among members of the
                        legal profession.
                </Desc>
                <AnimItem>
                    <Anime>
                        <AnimTitle>Law</AnimTitle>
                        <AnimTitle>Justice</AnimTitle>
                        <AnimTitle>Safety</AnimTitle>
                        <AnimTitle>Protection</AnimTitle>
                        <AnimTitle>Civil and Political Engagement</AnimTitle>
                        <AnimTitle>Peace</AnimTitle>
                        <AnimTitle>Social Progress</AnimTitle>
                        <AnimTitle>Human Rights</AnimTitle>
                        <AnimTitle>Standard Structure and Order</AnimTitle>
                        <AnimTitle>Dispute Settlement And Remedies</AnimTitle>
                    </Anime>
                </AnimItem>
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                <Image src={currentImage}/>
                <AnimatedShapes/>
            </Grid>
      </Grid>
    </Container>
  )
}

export default Intro
