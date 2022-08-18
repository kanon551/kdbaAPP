import React from 'react'
import styled from 'styled-components'
import AdvocateCard from '../components/AdvocateCard'
import Feature from '../components/Feature'
import Intro from '../components/Intro'
import Judges from '../components/Judges'
import NavBar from '../components/NavBar'
import KdbaMembers from './KdbaMembers'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: linear-gradient(rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)), url("https://wallpaperaccess.com/full/4954969.jpg"),
    
    center;
    height: fit-content;
    width: 100%;
`

const Container2 = styled.div`
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: 100%;
    background: url("https://coolbackgrounds.io/images/backgrounds/index/sea-edge-79ab30e2.png");
    background-repeat: no-repeat;
    background-size: cover;
   z-index: -1;
   
`

const Container4 = styled.div`
  display: flex;
  height: fit-content;
  width: 100%;
  background: white;
  z-index: -1;
`

const Container5 = styled.div`
    display: flex;
  background-image: url("https://i.pinimg.com/originals/5c/e0/5e/5ce05e42fd984649cba8ff13d2697d82.jpg") ;
    background-repeat:no-repeat;
  background-size: cover;
    height: 100vh;
    z-index: -1;
`



const KdbaPage = () => {
  return (
    <>
      <Container>
              <NavBar/>
              <Intro/>
      </Container>
      <Container2>
              <Feature/>
      </Container2>
      <Container4>
        <Judges/>
      </Container4>
      <Container4>
        <AdvocateCard/>
      </Container4>
      <Container5>
        <KdbaMembers/>
      </Container5>
      
    </>
  )
}

export default KdbaPage
