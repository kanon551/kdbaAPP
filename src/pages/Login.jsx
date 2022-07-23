import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import {useNavigate} from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const Container = styled.div`
    justify-content: center;
    display: flex;
    align-items: center;
    background: linear-gradient(rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)), url("https://wallpaperaccess.com/full/4954969.jpg"),
    
    center;
    height: 100vh;
    width: 100vw;
`
const Wrapper = styled.div`
width: auto;
padding: 20px;
border-radius: 20px;
background-color: #b2dfdb;
box-shadow:  5px -5px 10px #5a5a5a,
             -5px 5px 10px #ffffff;
`

const Title = styled.h1`
    margin: 10px;
    color: white;
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: auto;
    
`
const Buttons = styled.button`
     border-radius: 10px;
background: lightgreen;
    border: none;
    font-size: x-large;
    font-weight: 800;
    cursor: pointer;
    color: white;
    box-shadow:  5px 5px 11px #5a5a5a,
             -5px -5px 11px #ffffff;

             
`
const Navigate = styled.div`
padding: 20px;
  display: flex;
  justify-content: space-between;
  
`
const ButtonWrap = styled.div`
  justify-content: flex-end;
  display: flex;
`

const Login = () => {

  const navigate = useNavigate();
  const [adminButton, setAdminButton] = useState(false)
    const[password, setPassword] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(true);
    const [email, setEmail] = React.useState('');

    useEffect(() => {
      setAdminButton(false);
      }, [])



    
    const checkLoginStatus =() => {

      
    }


  return (
    <Container>
            {
                adminButton ? 
                                  <Wrapper>
                                  <Title>Sign In</Title>
                                  <Form>
                                        <TextField style={{margin: "10px"}}
                                          label="Email"
                                          value={email}
                                          onChange={(event)=> setEmail(event.target.value)}
                                        />
                                        
                                      <FormControl  style={{margin: "10px"}} variant="outlined">
                                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                  <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword === true ? "password" : "text"}
                                    value={password}
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

                                <Navigate>
                                      <Link to={'/register'}
                                    component="button"
                                    variant="body2"
                                    onClick={() => navigate('/register')}
                                  >
                                      Navigate to Account Creation
                                </Link>
                                </Navigate>
                                  </Form>
                                  <ButtonWrap>
                                    <Buttons onClick={()=>checkLoginStatus()}>Login</Buttons>
                                  </ButtonWrap>
                                  
                              </Wrapper>  

                  : 

                                <Stack spacing={10} direction="column">
                                    <Button variant="contained" onClick={() => navigate('/kdba_members')} >Open</Button>
                                    <Button variant="contained" onClick={()=>setAdminButton(true)} >Admin</Button>
                                </Stack>
            }
    </Container>
  )
}

export default Login
