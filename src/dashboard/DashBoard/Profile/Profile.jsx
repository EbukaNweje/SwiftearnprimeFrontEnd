import React, { useState, useEffect } from 'react'
import { MyPlanPage, ProfileDiv, Label } from './PlanStyle'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import {BeatLoader} from "react-spinners"
// import { GrCheckmark } from 'react-icons/gr'
// import PlansData from "./PlansData"

export default function Profile() {
  const [fullName, setFullName] = useState()
  const [userName, setUserName] = useState()
  const [email, setEmail] = useState()
  const [phoneNumber, setPhoneNumber] = useState()
  const [data, setData] = useState()
  const {id} = useParams()
  const [msg, setMsg] = useState()
  const [isButtonDisabled, setButtonDisabled] = useState(false);


  const userinfo = {fullName, userName,email,phoneNumber}


  const url = `https://cheerful-fox-waders.cyclic.cloud/api/userdata/${id}`
  const updateuserurl = `https://cheerful-fox-waders.cyclic.cloud/api/userdata/${id}`

  useEffect(() =>{
      axios.get(url).then(res => setData(res.data.data))
      /* eslint-disable-next-line react-hooks/exhaustive-deps */
    }, [])

    const upDateUser = () => {
      setButtonDisabled(true)
      axios.patch(updateuserurl, userinfo)
      .then(res=>{setMsg(res.data.message), setButtonDisabled(false)})
      .catch((error)=>{
        setButtonDisabled(false)
        console.log(error)
      })
    }

  const handleFullNameChange = (e) => {
    const newFullName = e.target.value;
    setFullName(newFullName);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
  };
  
  const handlephoneNumberChange = (e) => {
    const newPhoneNumber = e.target.value;
    setPhoneNumber(newPhoneNumber);
  }; 

  const handleuserNameChange = (e) => {
    const newUserName = e.target.value;
    setUserName(newUserName);
  };


  return (
    <MyPlanPage>
          <ProfileDiv>
              <Label>FullName*</Label>
              <input type="text" placeholder={data?.fullName}  onChange={handleFullNameChange}/>
              <Label>UserName*</Label>
              <input type="text" placeholder={data?.userName}  onChange={handleuserNameChange} />
              <Label>Email*</Label>
              <input type="email" placeholder={data?.email}  onChange={handleEmailChange}/>
              <Label>Phone Number*</Label>
              <input type="tel" placeholder={data?.phoneNumber} onChange={handlephoneNumberChange} />
               <p style={{marginTop: "1%", marginLeft: "2%", color: "green", fontSize: "18px", fontFamily:"Nunito, sans-serif;"}}>{msg}</p>
              <button
              disabled={isButtonDisabled}
              style={{background: `${isButtonDisabled ? "#E0E0E5" : "#EABD4E"}`}}
               onClick={upDateUser}> {isButtonDisabled ? <BeatLoader color="#8d8f8f"/>: "Update Profile"}</button>
          </ProfileDiv>
    </MyPlanPage>
  )
}
