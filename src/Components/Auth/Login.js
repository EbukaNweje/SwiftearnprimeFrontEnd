  import React, { useState } from 'react'
import {MdEmail} from 'react-icons/md'
import {BsFillLockFill} from 'react-icons/bs'
import Swal from 'sweetalert2'
import { SpinnerCircular } from 'spinners-react';
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
import{ Container, 
    Wrapper,
    Card, 
    H1, 
    Form, 
    Label, 
    Input,
    PassWordText, Button,
    Span, Span2
  } from "./LoginStyle";

const Login = () => {

    const navigate = useNavigate()
    const [email, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState({ error: false, msg:""});

    console.log(message);
    
    const url = "https://swiftearnprime.vercel.app/api/login"
  const Data = {email, password}

  const urll = "https://swiftearnprime.onrender.com/api/loginemail"

  const loginemail = () => {
    Axios.post(urll, {email})
    .then(res => {
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  }
  console.log(url)
  console.log(Data)

  const Login = (e) => {
    // navigate(`/dashboard/6666`)
    e.preventDefault()
    setLoading(true)
    Axios.post(url, Data)
    .then((res) => {
      console.log(res)
      localStorage.setItem("User", JSON.stringify(res.data));
      loginemail()
      console.log(res);

      const getId = JSON.parse(localStorage.getItem("User"));
      console.log(getId._id);
     setMessage({ error: true, msg: "successfully!" });
    setTimeout(() => {
       window.location.href = `https://accountswiftearnprime.vercel.app/#/${getId._id}`
      // navigate(`/dashboard/${getId._id}`)
      // window.location.reload()
    }, [2000]);
    // window.location.reload();
    }
    )
    .then(()=>{ 
      setMessage({ error: true, msg: "successfully!" });
    //   const getId = JSON.parse(localStorage.getItem("User"));
    //   console.log(getId.data._id);
    //  setMessage({ error: true, msg: "successfully!" });
    // setTimeout(() => {
    //   navigate(`/user/dashboard/${getId.data._id}`)
    // }, [2000]);
    })
    .catch((error)=>{
      console.log(error)
      setMessage({error: false, msg: error.response.data.message});
    setLoading(false)
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error.response.data.message,
   }) 
    console.log(error)
    //  reset(),
  })
  }
  

  return (
    <Container>
        <Wrapper>
            <Card>
                <H1 style={{textAlign: "center"}}>Log in to your account</H1>
                <Span>Don't have an account? <Span2 to='/register'>Sign up</Span2></Span>
                <Form onSubmit={(e)=> Login(e)}>
                    <Label><MdEmail style={{marginRight:"2%" }}/>Email*</Label>
                    <Input type="email" placeholder='Email' value={email} onChange ={(e)=>{setUserName(e.target.value)}} required/>

                    <Label><BsFillLockFill style={{marginRight:"2%" }}/>Password*</Label>
                    <Input type="password" placeholder='Qwerty123!@#' value={password} onChange ={(e)=>{setPassword(e.target.value)}} required/>
                    <Button>{loading ? <SpinnerCircular size={25} thickness={100} speed={100} color="rgba(255, 255, 255, 1)" secondaryColor="rgba(0, 0, 0, 0.44)" /> : "Log in"}</Button>
                    <PassWordText to="/forgotpassword"><span style={{color: "#D77600", cursor: "pointer", textDecoration: "underline"}}>Forgot your password?</span></PassWordText>
                </Form>
            </Card>
        </Wrapper>
    </Container>
  )
}

export default Login;


// devdev1234