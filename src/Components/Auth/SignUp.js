import React, { useState } from 'react'
import {MdEmail, MdOutlineErrorOutline, MdPersonSearch, MdPersonAddDisabled, MdPhoneEnabled} from 'react-icons/md'
import {BsFillLockFill} from 'react-icons/bs'
import { SpinnerCircular } from 'spinners-react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import Axios from "axios"

import
{ Container, 
Wrapper,
Card, 
H1, 
Form, 
Label, 
Input,
PassWordText,
PassWordError,
CheckContainer,
CheckBox,Tetx, Button,
Span,
Span2
} from './SiginUpStyle'

const SignUp = () => {
    const navigate = useNavigate()
    const [fullName, setFullName] = useState("")
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [retypeEmail, setRetypeEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState({ error: false, msg:""});

    console.log(message);

    const Data = {fullName, userName, email, password, phoneNumber}
    const url = "https://swiftearnprime-coral.vercel.app/api/register"

    // console.log(url)

    const urll = "https://swiftearnprime.onrender.com/api/sandOtp"
    // const sandOtp = () => {
    //   Axios.post(urll, {email})
    //   .then(res => {
    //     console.log(res)
    //   }).catch((err)=>{
    //     console.log(err)
    //   })
    // }

    const Siginup =  async (e) => {
        e.preventDefault()
        setLoading(true)
        console.log(Data); 

         await Axios.post(url, Data)
        .then((res) => {
        localStorage.setItem("id", JSON.stringify(res.data));
        setMessage({ error: true, msg: res.data.message});
        // sandOtp()
        const getId = JSON.parse(localStorage.getItem("id"))
      //   Swal.fire({
      //     icon: 'success',
      //     title: 'Success',
      //     text: "Check your email for account verification to continue",
      //  }) 
        console.log("this is the data", getId.data._id)
        navigate("/login")
          // setTimeout(() => {
          //   // navigate(`/dashboard/${getId.data._id}`)
          //   window.location.href = `https://swiftearnprime-dashboard.vercel.app/`
          //   // navigate(`/verify/${getId.data._id}`)
          //   console.log(getId._id);
          // }, [2000]);
        }
        )
        .catch((error)=>{
          console.log(error);
          Swal.fire({
            icon: 'error',
            title: 'Oops!!!',
            text: error.response.data.message,
            });
          setLoading(false);
          setMessage({error: false, msg: error.data.message });
      });

    };

  return (
    <Container>
        <Wrapper>
            <Card>
                <H1>Create an account </H1>
                <Span>Already have an account? <Span2 to='/login'>Login</Span2></Span>
                {/* <span style={{color: "lightgrey", marginTop: "80px"}}>Already have and account? <span style={{color: "#FF4D4D"}}>Login</span></span> */}
                <Form onSubmit ={(e)=> Siginup(e)}>
                    <Label><MdPersonAddDisabled style={{marginRight:"2%" }}/>Full Name*</Label>
                    <Input type="text" placeholder='Full Name' value={fullName} onChange ={(e)=>{setFullName(e.target.value)}} required/>
                    <Label><MdPersonSearch style={{marginRight:"2%" }} />Username*</Label>
                    <Input type="text" placeholder='Username' value={userName} onChange ={(e)=>{setUserName(e.target.value)}} required/>
                    <Label><MdEmail style={{marginRight:"2%" }}/>Email*</Label>
                    <Input type="email" placeholder='Enter email address' value={email} onChange ={(e)=>{setEmail(e.target.value)}} required/>
                    <Label><MdEmail style={{marginRight:"2%" }}/>Retype Email*</Label>
                    <Input type="email" placeholder='confirm email address' value={retypeEmail} onChange ={(e)=>{setRetypeEmail(e.target.value)}} required/>
                    <Label><MdPhoneEnabled style={{marginRight:"2%" }}/>Phone Number*</Label>
                    <Input type="tel" placeholder='phone number' value={phoneNumber} onChange ={(e)=>{setPhoneNumber(e.target.value)}} required/>
                    <Label><BsFillLockFill style={{marginRight:"2%" }}/>Password*</Label>
                    <Input type="password" placeholder='Enter password' value={password} onChange ={(e)=>{setPassword(e.target.value)}} required/>
                    <Label><BsFillLockFill style={{marginRight:"2%" }}/>Retype Password*</Label>
                    <Input type="password" placeholder='Enter password' value={confirmPassword} onChange ={(e)=>{setConfirmPassword(e.target.value)}} required/>

                    <PassWordText>The password may include Latin, Cyrillic, numbers and special characters</PassWordText>
                    <PassWordError>
                        <MdOutlineErrorOutline style={{marginRight:"2%", fontSize: "50px", color:"#D77600" }}/>At least 8 characters, the password must contain uppercase and lowercase letters, a number and a special character
                    </PassWordError>

                    {/* <Label><MdPausePresentation style={{marginRight:"2%" }}/>Partner ID</Label>
                    <Input type="text" value=' N/A (n/a)'/> */}

                    <CheckContainer>
                        <CheckBox type="checkbox" required/>
                        <Tetx>I am over 18 years old and I agree to the terms and conditions preeminentcrypfield.com</Tetx>
                    </CheckContainer>
                    <Button>{loading ? <SpinnerCircular size={25} thickness={100} speed={100} color="rgba(255, 255, 255, 1)" secondaryColor="rgba(0, 0, 0, 0.44)" /> : "Create an account"}</Button>
                </Form>
            </Card>
        </Wrapper>
    </Container>
  )
};

export default SignUp;


//devdev: password