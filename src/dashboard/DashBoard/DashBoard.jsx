import React, { useState, useEffect } from 'react'
import {MainContainer, DashBoardBody,DashBoardBodyContainer,DashBoardBodyContainerLeft,
    DashBoardBodyContainerRight,ContainerLeftLogo,ContainerLeftProfile,ContainerLeftUserName,
    ContainerLeftStatus, ContainerLeftBalances,ContainerLeftMenuNav,ContainerLeftMenuNavCard,
    ContainerLeftMenuNavCardBox, ContainerLeftContact, ContainerLeftButtons, ContainerRightHeader,
    ContainerRightSmallHeader,ContainerRightSmaillProfile, ContainerRightMainBodyChange,Logout,
    MobileSpan, DiskTopMenu, MobileNavMenu, ContainerLeftMenuNavMobile,ContainerLeftMenuNavCardmobile,
    ContainerLeftMenuNavCardBoxMobile, CloseSpanButton,Starting, LogoOut
} from "./DashBoardStyle"
import logo from "../../../assets/Icon.jpeg"
import Withdrawal from './Withdrawal/Withdrawal'
import {BiSolidUserCircle} from "react-icons/bi"
import {GrMoney} from "react-icons/gr"
import {AiOutlineMenu} from "react-icons/ai"
import {FaDownload, FaMoneyCheckAlt, FaHome, FaHandshake} from "react-icons/fa"
import {FaCircleUser, FaShareFromSquare} from "react-icons/fa6"
import {BiSolidUpArrowCircle} from "react-icons/bi"
import {PiGradientDuotone} from "react-icons/pi"
// import {RiHandCoinFill} from "react-icons/ri"
import WelcomePage from './WelcomePage'
import Profile from './Profile/Profile'
import Referrals from './Referrals/Referrals'
// import DepositsPage from "./Deposits/Deposits"
import Deposits from './Deposits/Deposits'
import Plans from "./Plan"
import {useParams} from "react-router-dom";
import axios from 'axios'
// import { useSelector } from "react-redux";
import { logOut }from "../../Global/ProductState"
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'





const DashBoard = () => {
    const [menuclose, setMenuClose] = useState(true)
    const [Mobilemenuclose, setMobileMenuClose] = useState(false)
    const [withdrawal, setWithdrawal] = useState(false)
    const [deposit, setDeposit] = useState(false)
    const [home, setHome] = useState(true)
    const [plan, setPlan] = useState(false)
    const [profiles, setProfiles] = useState(false)
    const [referral, setReferral] = useState(false)
    const [active, swtActive] = useState("rgb(1, 52, 84)")
    const [data, setData] = useState()
    const {id} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate();
    
    const url = `https://cheerful-fox-waders.cyclic.cloud/api/userdata/${id}`

    useEffect(() =>{
        axios.get(url).then(res => setData(res.data.data))
        /* eslint-disable-next-line react-hooks/exhaustive-deps */
      }, [])

      console.log("this is my get data", data?.isAdmin)

  return (
    <MainContainer>
        <DashBoardBody/>

        <DashBoardBodyContainer>

        {menuclose?
           <DashBoardBodyContainerLeft>
           <ContainerLeftLogo src={logo} alt='Logo'/>
           <ContainerLeftProfile>
               <BiSolidUserCircle style={{color: "white", fontSize: "120px", marginTop: "10%", cursor: "pointer"}}/>
               <ContainerLeftUserName>{data?.userName}</ContainerLeftUserName>
               <ContainerLeftStatus>Online</ContainerLeftStatus>
               <ContainerLeftBalances><GrMoney/> ${data?.totalDeposit}.00</ContainerLeftBalances>
           </ContainerLeftProfile>

           <ContainerLeftMenuNav>
               <ContainerLeftMenuNavCard>
                   <ContainerLeftMenuNavCardBox style={{background: `${home ? active : ""}`}}
                      onClick={()=>{
                        setDeposit(false)
                        setWithdrawal(false)
                        setHome(true)
                        setPlan(false)
                        setProfiles(false)
                        setReferral(false)
                       }}
                   ><FaHome style={{fontSize:"40px", color: "#fff", fontWeight: "700"}}/> <span>Home</span></ContainerLeftMenuNavCardBox>
                   <ContainerLeftMenuNavCardBox style={{background: `${deposit ? active : ""}`}}
                    onClick={()=>{
                        setDeposit(true)
                        setWithdrawal(false)
                        setHome(false)
                        setPlan(false)
                        setProfiles(false)
                        setReferral(false)
                       }}
                   ><FaDownload style={{fontSize:"40px", color: "#fff", fontWeight: "700"}}/> <span>Deposit</span></ContainerLeftMenuNavCardBox>
               </ContainerLeftMenuNavCard>
               <ContainerLeftMenuNavCard>
                   <ContainerLeftMenuNavCardBox style={{background: `${withdrawal ? active : ""}`}}
                   onClick={()=>{
                    setDeposit(false)
                    setWithdrawal(true)
                    setHome(false)
                    setPlan(false)
                    setProfiles(false)
                    setReferral(false)
                   }}
                   ><BiSolidUpArrowCircle style={{fontSize:"40px", color: "#fff", fontWeight: "700"}}/> <span>Withdraw</span></ContainerLeftMenuNavCardBox>
                   <ContainerLeftMenuNavCardBox style={{background: `${profiles ? active : ""}`}}
                    onClick={()=>{
                       setDeposit(false)
                       setWithdrawal(false)
                       setHome(false)
                       setPlan(false)
                       setProfiles(true)
                       setReferral(false)
                      }}
                   ><FaCircleUser style={{fontSize:"40px", color: "#fff", fontWeight: "700"}}/> <span>Profile</span></ContainerLeftMenuNavCardBox>
                   {/* <ContainerLeftMenuNavCardBox><FaMoneyCheckAlt style={{fontSize:"40px", color: "#fff", fontWeight: "700"}}/> <span>Transactions</span></ContainerLeftMenuNavCardBox> */}
               </ContainerLeftMenuNavCard>
               {/* <ContainerLeftMenuNavCard>
                   <ContainerLeftMenuNavCardBox><RiHandCoinFill style={{fontSize:"40px", color: "#fff", fontWeight: "700"}}/> <span>Trading Plans</span></ContainerLeftMenuNavCardBox>
               </ContainerLeftMenuNavCard> */}
               <ContainerLeftMenuNavCard>
                   <ContainerLeftMenuNavCardBox style={{background: `${plan ? active : ""}`}}
                     onClick={()=>{
                        setDeposit(false)
                        setWithdrawal(false)
                        setHome(false)
                        setPlan(true)
                        setProfiles(false)
                        setReferral(false)
                       }}
                   ><FaHandshake style={{fontSize:"40px", color: "#fff", fontWeight: "700"}}/> <span>My Plans</span></ContainerLeftMenuNavCardBox>
                   <ContainerLeftMenuNavCardBox
                   style={{background: `${referral ? active : ""}`}}
                   onClick={()=>{
                      setDeposit(false)
                      setWithdrawal(false)
                      setHome(false)
                      setPlan(false)
                      setProfiles(false)
                      setReferral(true)
                     }}
                   ><FaShareFromSquare style={{fontSize:"40px", color: "#fff", fontWeight: "700"}}/> <span>Referrals</span></ContainerLeftMenuNavCardBox>
               </ContainerLeftMenuNavCard>
                     {data?.isAdmin? 
                      <ContainerLeftMenuNavCard>
                      <ContainerLeftMenuNavCardBox
                      style={{background: `${referral ? active : ""}`}}
                      onClick={()=>{
                       navigate("/admin")
                      }}
                      ><PiGradientDuotone style={{fontSize:"40px", color: "#fff", fontWeight: "700"}}/> <span>Admin Update</span></ContainerLeftMenuNavCardBox>
                  </ContainerLeftMenuNavCard>:null}
           </ContainerLeftMenuNav>

           <ContainerLeftContact>
               <h1>Need Help!</h1>
               <span>Contact our 24/7 customer support center</span>
               <ContainerLeftButtons>Contact Us</ContainerLeftButtons>
           </ContainerLeftContact>

           <Logout onClick={()=>{
            dispatch(logOut()),
            localStorage.removeItem("User")
            navigate("/")
           }}>Log Out</Logout>
       </DashBoardBodyContainerLeft>: null
    }


            <DashBoardBodyContainerRight>
                <ContainerRightHeader>
                        <ContainerRightSmallHeader>
                                <DiskTopMenu>
                                <AiOutlineMenu style={{marginLeft: "5%", fontSize: "20px", color: "white", cursor: "pointer"}} onClick={()=> setMenuClose(!menuclose)}/>
                                </DiskTopMenu>
                                <MobileSpan>
                                <AiOutlineMenu style={{marginLeft: "5%", fontSize: "30px", color: "white", cursor: "pointer"}} onClick={()=> setMobileMenuClose(true)}/>
                                </MobileSpan>
                                <ContainerRightSmaillProfile><BiSolidUserCircle style={{color: "white", fontSize: "50px", cursor: "pointer",}}/>
                                    <span>{data?.userName}</span>
                                </ContainerRightSmaillProfile>
                                    <LogoOut
                                        onClick={()=>{
                                            dispatch(logOut()),
                                            localStorage.removeItem("User")
                                            navigate("/")
                                        }}
                                    >Logout</LogoOut>
                        </ContainerRightSmallHeader>
                </ContainerRightHeader>


                <ContainerRightMainBodyChange>
                        <Starting>{
                                home ? (` Welcome ${data?.userName}`):
                                withdrawal?("Withdrawal Page"):
                                deposit?("Deposit Page"):
                                plan?("Your Plans"):
                                profiles?("Profile Page"):
                                referral?("Referral Page"): null
                            }</Starting>
                        {
                            home?(<WelcomePage myPlans = {setPlan} myHome = {setHome} />):
                            withdrawal?(<Withdrawal />):
                            deposit?(<Deposits />):
                            plan?(<Plans Mydeposits = {setDeposit} myPlans = {setPlan} />):
                            profiles?(<Profile/>):
                            referral?(<Referrals/>): null
                        }
                        {/* <WelcomePage/> */}
                </ContainerRightMainBodyChange>

                    {
                        Mobilemenuclose ? <MobileNavMenu>
                           <CloseSpanButton onClick={()=> setMobileMenuClose(false)}>X</CloseSpanButton> <ContainerLeftLogo src={logo} alt='Logo'/>
                         <BiSolidUserCircle style={{color: "white", fontSize: "90px", marginTop: "5%", cursor: "pointer"}}/>
                <ContainerLeftMenuNavMobile>
               <ContainerLeftMenuNavCardmobile>            
                   <ContainerLeftMenuNavCardBoxMobile  style={{background: `${home ? active : ""}`}}
                       onClick={()=>{
                        setDeposit(false)
                        setWithdrawal(false)
                        setHome(true)
                        setMobileMenuClose(false)
                        setPlan(false)
                        setProfiles(false)
                       setReferral(false)
                       }}
                   ><FaHome style={{fontSize:"40px", color: "#2980B9", fontWeight: "700"}}/> <span>Home</span></ContainerLeftMenuNavCardBoxMobile>
                   <ContainerLeftMenuNavCardBoxMobile style={{background: `${deposit ? active : ""}`}}
                     onClick={()=>{
                        setDeposit(true)
                        setWithdrawal(false)
                        setHome(false)
                        setMobileMenuClose(false)
                        setPlan(false)
                        setProfiles(false)
                       setReferral(false)
                       }}
                   ><FaDownload style={{fontSize:"40px", color: "#2980B9", fontWeight: "700"}}/> <span>Deposit</span></ContainerLeftMenuNavCardBoxMobile>
               </ContainerLeftMenuNavCardmobile>
               <ContainerLeftMenuNavCardmobile>
                   <ContainerLeftMenuNavCardBoxMobile style={{background: `${withdrawal ? active : ""}`}}
                    onClick={()=>{
                        setDeposit(false)
                        setWithdrawal(true)
                        setHome(false)
                        setMobileMenuClose(false)
                        setPlan(false)
                        setProfiles(false)
                       setReferral(false)
                       }}
                   ><BiSolidUpArrowCircle style={{fontSize:"40px", color: "#2980B9", fontWeight: "700"}}/> <span>Withdraw</span></ContainerLeftMenuNavCardBoxMobile>
                   <ContainerLeftMenuNavCardBoxMobile
                   style={{background: `${plan ? active : ""}`}}
                   onClick={()=>{
                     setDeposit(false)
                     setWithdrawal(false)
                     setHome(false)
                     setPlan(false)
                     setMobileMenuClose(false)
                     setProfiles(true)
                       setReferral(false)
                    }}
                   ><FaCircleUser style={{fontSize:"40px", color: "#2980B9", fontWeight: "700"}}/> <span>Profile</span></ContainerLeftMenuNavCardBoxMobile>
                   {/* <ContainerLeftMenuNavCardBoxMobile><FaMoneyCheckAlt style={{fontSize:"40px", color: "#2980B9", fontWeight: "700"}}/> <span>Transactions</span></ContainerLeftMenuNavCardBoxMobile> */}
               </ContainerLeftMenuNavCardmobile>
               {/* <ContainerLeftMenuNavCardmobile>
                   <ContainerLeftMenuNavCardBoxMobile><RiHandCoinFill style={{fontSize:"40px", color: "#2980B9", fontWeight: "700"}}/> <span>Trading Plans</span></ContainerLeftMenuNavCardBoxMobile>
               </ContainerLeftMenuNavCardmobile> */}
               <ContainerLeftMenuNavCardmobile>
                   <ContainerLeftMenuNavCardBoxMobile style={{background: `${plan ? active : ""}`}}
                      onClick={()=>{
                        setDeposit(false)
                        setWithdrawal(false)
                        setHome(false)
                        setPlan(true)
                        setMobileMenuClose(false)
                        setProfiles(false)
                       setReferral(false)
                       }}
                   ><FaHandshake style={{fontSize:"40px", color: "#2980B9", fontWeight: "700"}}/> <span>My Plans</span></ContainerLeftMenuNavCardBoxMobile>
                   <ContainerLeftMenuNavCardBoxMobile
                        style={{background: `${referral ? active : ""}`}}
                        onClick={()=>{
                           setDeposit(false)
                           setWithdrawal(false)
                           setHome(false)
                           setPlan(false)
                           setProfiles(false)
                           setReferral(true)
                            setMobileMenuClose(false)
                          }}
                   ><FaShareFromSquare style={{fontSize:"40px", color: "#2980B9", fontWeight: "700"}}/> <span>Referrals</span></ContainerLeftMenuNavCardBoxMobile>
               </ContainerLeftMenuNavCardmobile>
                    {data?.isAdmin? 
                      <ContainerLeftMenuNavCard>
                      <ContainerLeftMenuNavCardBox
                      style={{background: "white", width: "35%"}}
                      onClick={()=>{
                       navigate("/admin")
                      }}
                      ><PiGradientDuotone style={{fontSize:"40px", color: "#2980B9", fontWeight: "700"}}/> <span style={{color: "#2980B9"}}>Admin Update</span></ContainerLeftMenuNavCardBox>
                  </ContainerLeftMenuNavCard>:null}
           </ContainerLeftMenuNavMobile>
                        </MobileNavMenu> : null
                    }

            </DashBoardBodyContainerRight>
        </DashBoardBodyContainer>
    </MainContainer>
  )
}

export default DashBoard