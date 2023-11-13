import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import logo from './budget.png'
import { useNavigate } from "react-router-dom";

const DepositPop = () => {
    const nav = useNavigate()
    const [plan, setPlan] = useState("")
    const [errmsg, setErrmsg] = useState("")
    const [err, setErr] = useState(false)
    const [amount, setAmount] = useState("")
    const [bronze, setBronze] = useState(false)
    const [silver, setSilver] = useState(false)
    const [gold, setGold] = useState(false)
    const [diamond, setDiamond] = useState(false)
    const [depositPop, setDepositPop] = useState(false)
    const [profitPopUp, setProfitPopUp] = useState(false)
    console.log(plan, depositPop)

    // const user = JSON.parse(localStorage.getItem("User"));
    useEffect(()=>{
        if(plan === "Bronze plan") {
            setBronze(true)
            setSilver(false)
            setGold(false)
            setDiamond(false)
        } 
        else if(plan === "Silver plan") {
            setSilver(true)
            setBronze(false)
            setGold(false)
            setDiamond(false)
            
        }
        else if(plan === "Gold plan") {
            setGold(true)
            setBronze(false)
            setSilver(false)
            setDiamond(false)
            
        }
        else if(plan === "Diamond plan") {
            setDiamond(true)
            setBronze(false)
            setSilver(false)
            setGold(false)
        } else {
            setBronze(false)
            setSilver(false)
            setGold(false)
            setDiamond(false)
        }
    },[plan])
    const convertedAmount = +(amount) 

    const CalculateEarning = () => {
        if(bronze && convertedAmount < 3000 ) {
            setErr(true)
            setErrmsg("Minimum Amount is $3000 ")
        } 
        else if(bronze && convertedAmount > 10000) {
            setErr(true)
            setErrmsg("Maximum Amount is $10000")
        } 
        else if(silver && convertedAmount  < 10000) {
            setErr(true)
            setErrmsg("Minimum Amount is $10000 ")
        } 
        else if(silver && convertedAmount > 30000) {
            setErr(true)
            setErrmsg("Maximum Amount is $30000 ")
        } 
        else if(gold && convertedAmount < 30000) {
            setErr(true)
            setErrmsg("Minimum Amount is $30000 ")
        } 
        else if(silver && convertedAmount > 10000) {
            setErr(true)
            setErrmsg("Maximum Amount is $100000 ")
        } 
        else if(gold && convertedAmount < 100000) {
            setErr(true)
            setErrmsg("Minimum Amount is $100000 ")
        } 
        else if(diamond && convertedAmount > 1000000) {
            setErr(true)
            setErrmsg("Maximum Amount is $1000000 ")
        }
        else if(plan === "") {
            setErr(true)
            setErrmsg("Please select a plan")
        } else {
            setErrmsg("")
            setErr(false)
            setProfitPopUp(true)
            setDepositPop(false)
        }
    
    }

    useEffect(()=>{
        setErr(false)
    },[])
   
    console.log(+(amount))
    useEffect(()=>{
        setTimeout(() => {
            setErr(false)
        }, 8000);
    },[err])

    // console.log({bronze, gold, silver, diamond})
    console.log(plan)

    return(
        <PopUpDiv>
           
        <PopUp>
            <PopUpLeft>
                <DepImg src={logo} />
            </PopUpLeft>
            <PopUpRight>
                <PopUpAmount>
                    <span>Amount</span>
                    <AmountInput type="number" placeholder="Enter Amount" value={amount} onChange={(e)=>{
                        setAmount(e.target.value) 
                    }}/>
                </PopUpAmount>
                <PopUpPlan>
                    <span>Investment Plan</span>
                    <PopUpPlanSelect onChange={(e)=>{
                        setPlan(e.target.value)
                    }}>
                        <option value="">Select plan</option>
                        <option value="Bronze plan">Bronze plan</option>
                        <option value="Silver plan">Silver plan</option>
                        <option value="Gold plan">Gold plan</option>
                        <option value="Diamond plan">Diamond plan</option>
                    </PopUpPlanSelect>
                </PopUpPlan>    
                <PopUpBtnDiv>
                    <PopUpBtn onClick={CalculateEarning}>Calculate Earnings</PopUpBtn>
                </PopUpBtnDiv>
            </PopUpRight>
        </PopUp>
        {
            profitPopUp?
            <EarningPopUp>
                <TopEarn>
                    <EarnText>Earning Calculations</EarnText>
                </TopEarn>
                <First>
                    <EarnSub>Plan</EarnSub>
                    <EarnSub>{plan}</EarnSub>
                </First>
                <Second>
                    <EarnSub>Amount</EarnSub>
                    <EarnSub>{amount}</EarnSub>
                </Second>
                <Second>
                    <EarnSub>Cashout Duration</EarnSub>
                    <EarnSub>12 days</EarnSub>
                </Second>
                <Second>
                    <EarnSub>Profit</EarnSub>
                    <EarnSub>325</EarnSub>
                </Second>
                <Second>
                    <EarnSub>Total</EarnSub>
                    <EarnSub>{convertedAmount * 325 }</EarnSub>
                </Second>
                <BotEarning>
                    <CloseBtn onClick={()=>{
                        setProfitPopUp(!profitPopUp)
                        setDepositPop(true)
                    }}>Close</CloseBtn>
                    <DepositBtn onClick={()=>{
                        nav('/login')
                    }}>Deposit</DepositBtn>
                </BotEarning>
            </EarningPopUp>:null
           }
          {
            err?
            <ErrorPop>
            <Errmsg>{errmsg}</Errmsg>
           </ErrorPop>
             :null
            }
    </PopUpDiv>
    
    )
}

export default DepositPop

const Errmsg = styled.div`
    font-size: 18px;
    color: white;
    padding-inline: 3%;
`

const ErrorPop = styled.div`
    width: 24%;
    height: 10vh;
    border-radius:3px;
    display: flex;
    align-items: center;
    background: rgba(255, 0, 0, 0.3);
    position: fixed;
    top: 5%;
    right: 2%;

    @media Screen and (max-width: 575px){
    width: 100%;
    top: 0;
    right: 0;
    height: 11vh;
    }
`

const DepositBtn = styled.button`
    width: 20%;
    height: 37%;
    border-radius:6px;
    background: #D77600;
    border: none;
    color: white;
    font-size: 17px;
    outline: none;
    cursor: pointer;

    @media Screen and (max-width: 575px){
    width: 29%;
    height: 39%;
    font-weight: bold;
    font-size: 20px;
    }

`

const CloseBtn = styled.span`
    font-size: 18px;
    color: white;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
    
    @media Screen and (max-width: 575px){
    font-size: 20px;
    }
`

const EarnSub = styled.div`
    font-size: 19px;
    color: white;
    width: 40%;

    @media Screen and (max-width: 575px){
    font-size: 22px;
    width: 50%;
    }
`

const EarnText = styled.div`
    font-size: 25px;
    font-weight:bold;
    color: white;
    margin-left: 5%;

    @media Screen and (max-width: 575px){
        margin-left: 20%;
         font-size: 24px;
    }
`

const TopEarn = styled.div`
    width: 100%;
    height: 16%;
    border-bottom: 1px solid rgba(255,255,255,0.7);
    display: flex;
    align-items: center;
`

const First = styled.div`
    width: 95%;
    height: 14%;
    border-bottom: 1px solid white;
    display: flex;
    align-items: center;


`

const Second = styled.div`
    width: 95%;
    height: 13%;
    border-bottom: 1px solid white;
    display: flex;
    align-items: center;

    @media Screen and (max-width: 575px){
        
    }
`

const BotEarning = styled.div`
    width: 95%;
    height: 28%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 7%;
    gap:5%;
`

const EarningPopUp = styled.div `
    width: 36%;
    border-radius: 5px;
    height: 65vh;
    top: 5%;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #000;
    z-index: 10000;
    padding: 20px;

    @media Screen and (max-width: 575px){
        top: 0;
        width: 100%;
        height: 70vh;
        z-index: 999;
    }
`

const PopUpDiv = styled.div`
    width: 100%;
    height:45vh;
    background: #000;
    flex-direction: column;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-bottom: 4px solid #D77600;

    @media Screen and (max-width: 575px){
    height: 75vh;
    }

`
const PopUp = styled.div`
    width: 95%;
    height:95%;
    background: #333;
    display: flex;
    justify-content: space-between;

    @media Screen and (max-width: 575px){
    flex-direction: column;
    align-items: center;
    }

`

const PopUpLeft = styled.div`
    width: 25%;
    height:100%;
    background: #D77600;
    object-fit: cover;
    display: flex;
    justify-content: center;
    align-items: center;

    @media Screen and (max-width: 575px){
    width: 98%;
    height:40%;
    }

`

const DepImg = styled.img`
    width: 70%;
    height:50%;

    @media Screen and (max-width: 575px){
    width: 50%;
    height:50%;
    }

`

const PopUpRight = styled.div`
    width: 70%;
    height:100%;
    background: #333;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media Screen and (max-width: 575px){
    width: 100%;
    height:55%;
    flex-direction: column;
    justify-content: center;
    }
`

const PopUpAmount = styled.div`
    width: 25%;
    height:28%;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media Screen and (max-width: 575px){
        width: 98%;
        height: 31%;
        justify-content: center;
        gap: 5%;
    }


`

const AmountInput = styled.input`
    width: 100%;
    height:60%;
    border-radius: 6px;
    font-size: 17px;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.5);
    background: #000;
    padding-left: 10px;
    outline: none;

    @media Screen and (max-width: 575px){
        width: 96%;
        height: 60%;
    }

    &:focus {
        border: 2px solid #D77600;
    }

    &::-webkit-outer-spin-button {
        display: none;
    }
    &::-webkit-inner-spin-button {
        display: none;
    }
`

const PopUpPlan = styled.div`
    width: 35%;
    height:28%;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media Screen and (max-width: 575px){
    width: 98%;
    height: 31%;
    justify-content: center;
    gap: 5%;
    }

`

const PopUpPlanSelect = styled.select`
    width: 100%;
    height:60%;
    border-radius: 6px;
    font-size: 17px;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.5);
    background: #000;
    padding-left: 10px;
    outline: none;
    @media Screen and (max-width: 575px){
        width: 100%;
        height: 60%;
    }
    
    &:focus {
        border: 2px solid #D77600;
    };
`

const PopUpBtnDiv = styled.div`
    width: 24%;
    height:28%;
    display: flex;
    align-items: flex-end;

    @media Screen and (max-width: 575px){
        width: 98%;
        height: 31%;
        
    }


`

const PopUpBtn = styled.button`
    width: 100%;
    height:63%;
    border-radius:6px;
    background: #D77600;
    border: none;
    font-size: 17px;
    outline: none;
    cursor: pointer;
`