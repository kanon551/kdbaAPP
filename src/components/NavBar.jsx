import React from 'react'
import styled from 'styled-components'
import kdbaLogo from '../assets/kdbaLogo.jpeg';

const Container = styled.div`
    height: fit-content;
    width: 100%;
`

const Logo = styled.div`
    display: flex;
    flex-direction: row;
`

const PureLogo = styled.img`
     background-repeat:no-repeat;
  background-size: cover;
  width: 100%;
    height: 100%;
`

const LogoTitle = styled.div`
    font-weight: bold;
    color: white;
    font-size: x-large;
    width: 70%;
    flex-wrap: wrap;
    text-decoration: underline #F4A460;
`

const AdminButton = styled.div`
    border: 2px solid white;
    cursor: pointer;
    color: white;
    padding: 10px;
    font-weight: bold;
    border-radius: 15px;
    justify-content: center;
    display: flex;
    background: #F4A460;
    width: 100px;
    &:hover{
        border: 2px solid #F4A460;
    }
`

const Wrapper = styled.div`
 padding: 20px;
 display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
`


const NavBar = () => {
  return (
    <Container>
        <Wrapper>
            <Logo>
                <PureLogo src={kdbaLogo}/>
                <LogoTitle>
                    Kurnool District Bar Association
                </LogoTitle>
            </Logo>
            <AdminButton>
                    Admin
            </AdminButton>
        </Wrapper>
    </Container>
  )
}

export default NavBar
