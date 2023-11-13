import React from "react";
import styled from 'styled-components';
import {FaBitcoin, FaEthereum, FaDollarSign} from 'react-icons/fa';
// import {SiTether} from 'react-icons/si';
import {BsBank} from 'react-icons/bs';
import bgbg from "./bgbg.jpg";
// import doge  from './dogecoin.jpg';
// import bnb from './bnb.png'
// import ripple from './ripple.png'
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const History2 = () =>{
    // const [plan, setPlan] = useState("")
    // const [err, setErr] = useState("")
    // const [amount, setAmount] = useState("")
    // const [bronze, setBronze] = useState(false)
    // const [silver, setSilver] = useState(false)
    // const [gold, setGold] = useState(false)
    // const [diamond, setDiamond] = useState(false)
    // const [depositPop, setDepositPop] = useState(false)
    // const [profitPopUp, setProfitPopUp] = useState(false)
    // console.log(plan)

    // const user = JSON.parse(localStorage.getItem("User"));
    // useEffect(()=>{
    //     if(plan === "Bronze plan") {
    //         setBronze(true)
    //         setSilver(false)
    //         setGold(false)
    //         setDiamond(false)
    //     } 
    //     else if(plan === "Silver plan") {
    //         setSilver(true)
    //         setBronze(false)
    //         setGold(false)
    //         setDiamond(false)
            
    //     }
    //     else if(plan === "Gold plan") {
    //         setGold(true)
    //         setBronze(false)
    //         setSilver(false)
    //         setDiamond(false)
            
    //     }
    //     else if(plan === "Diamond plan") {
    //         setDiamond(true)
    //         setBronze(false)
    //         setSilver(false)
    //         setGold(false)
    //     } else {
    //         setBronze(false)
    //         setSilver(false)
    //         setGold(false)
    //         setDiamond(false)
    //     }
    // },[plan])
    // const convertedAmount = +(amount) 

    // const CalculateEarning = () => {
    //     if(bronze && convertedAmount < 3000 ) {
    //         setErr(true)
    //         setErr("Minimum Amount is $3000 ")
    //     } 
    //     else if(bronze && convertedAmount > 10000) {
    //         setErr(true)
    //         setErr("Maximum Amount is $10000")
    //     } 
    //     else if(silver && convertedAmount  < 100000) {
    //         setErr(true)
    //         setErr("Minimum Amount is $10000 ")
    //     } 
    //     else if(silver && convertedAmount > 30000) {
    //         setErr(true)
    //         setErr("Maximum Amount is $30000 ")
    //     } 
    //     else if(gold && convertedAmount < 30000) {
    //         setErr(true)
    //         setErr("Minimum Amount is $30000 ")
    //     } 
    //     else if(silver && convertedAmount > 100000) {
    //         setErr(true)
    //         setErr("Maximum Amount is $100000 ")
    //     } 
    //     else if(gold && convertedAmount < 100000) {
    //         setErr(true)
    //         setErr("Minimum Amount is $100000 ")
    //     } 
    //     else if(diamond && convertedAmount > 1000000) {
    //         setErr(true)
    //         setErr("Maximum Amount is $1000000 ")
    //     }
    //     else if(plan === "") {
    //         setErr(true)
    //         setErr("Please select a plan")
    //     } else {
    //         setErr(false)
    //         setProfitPopUp(true)
    //         setDepositPop(false)
    //     }
    
    // }

    // useEffect(()=>{
    //     setErr(false)
    // },[])
   
    // console.log(+(amount))
    // useEffect(()=>{
    //     setTimeout(() => {
    //         setErr(false)
    //     }, 3000);
    // },[err])

    // console.log({bronze, gold, silver, diamond})
    // console.log(plan)

    return(
        <Container>
            <Dash>
                <Dashin>
                    <Divin>
                        <H1>Dashboard</H1>
                        <Holder>
                        <Icon />
                        <Pagename>--make deposit</Pagename>
                        </Holder>
                    </Divin>
                </Dashin>
            </Dash>
            <Wrapper>
                <Card>
                    <FaBitcoin style={{backgroundColor:"white", width: 259.9, height: 259.9, color: "orange", borderRadius: "50%"}}/>
                    <Div>
                        <Type>Bitcoin-BTC</Type>
                        <Limit>Limit: 1000 - 5000000 USD</Limit>
                    </Div>
                    <Div2>Charge - 0 USD + 0%</Div2>
                    <Div3>
                        <Button to='/walletid'>Deposit</Button>
                    </Div3>
                </Card>
                <Card>
                    <FaEthereum style={{borderRadius: "50%",padding: "10px",color:"silver",backgroundColor:"indigo", width: 240, height: 240}}/>
                    <Div>
                        <Type>ETHEREUM-ETH</Type>
                        <Limit>Limit: 1000 - 5000000 USD</Limit>
                    </Div>
                    <Div2>Charge - 0 USD + 0%</Div2>
                    <Div3>
                        <Button to='/ethereum'>Deposit</Button>
                    </Div3>
                </Card>
                {/* <Card>
                    <SiTether style={{borderRadius: "3px",padding: "10px",color:"silver",backgroundColor:"#27A17C", width: 250, height: 250}}/>
                    <Div>
                        <Type>Tether-Usdt</Type>
                        <Limit>Limit: 1000 - 5000000 USD</Limit>
                    </Div>
                    <Div2>Charge - 0 USD + 0%</Div2>
                    <Div3>
                        <Button to='/tether'>Deposit</Button>
                    </Div3>
                </Card> */}
                {/* <Card>
                    <Img src={doge} style={{padding: "10px",color:"silver", borderRadius: "5px", width: 250, height: 250}}/>
                    <Div>
                        <Type>DOGECOIN</Type>
                        <Limit>Limit: 1000 - 5000000 USD</Limit>
                    </Div>
                    <Div2>Charge - 0 USD + 0%</Div2>
                    <Div3>
                        <Button to='/dogecoin'>Deposit</Button>
                    </Div3>
                </Card> */}
                {/* <Card>
                    <Img src={ripple} style={{borderRadius: "50%",padding: "10px", width: 250, height: 250}}/>
                    <Div>
                        <Type>XRP</Type>
                        <Limit>Limit: 1000 - 5000000 USD</Limit>
                    </Div>
                    <Div2>Charge - 0 USD + 0%</Div2>
                    <Div3>
                        <Button to='/ripple'>Deposit</Button>
                    </Div3>
                </Card> */}
                {/* <Card>
                    <Img src={bnb} style={{borderRadius: "50%",padding: "10px", width: 250, height: 250}}/>
                    <Div>
                        <Type>BNB</Type>
                        <Limit>Limit: 1000 - 5000000 USD</Limit>
                    </Div>
                    <Div2>Charge - 0 USD + 0%</Div2>
                    <Div3>
                        <Button to='/bnb'>Deposit</Button>
                    </Div3>
                </Card> */}
                <Card>
                    <BsBank style={{borderRadius: "5px",padding: "10px", width: 250, height: 250, color: "#015FC9"}}/>
                    <Div>
                        <Type>Bank Transfer</Type>
                        <Limit>Limit: 1000 - 5000000 USD</Limit>
                    </Div>
                    <Div2>Charge - 0 USD + 0%</Div2>
                    <Div3>
                        <Button onClick={() =>{
                            Swal.fire({
                                icon: 'info',
                                title: "Please",
                                text: "Chat with life support",
                             }) 
                        }}>Deposit</Button>
                    </Div3>
                </Card>
            </Wrapper>
      
        </Container>
    )
};

export default History2;

// const Errmsg = styled.div`
//     font-size: 23px;
//     color: red;
//     padding-inline: 3%;
// `

// const ErrorPop = styled.div`
//     width: 24%;
//     height: 13vh;
//     border-radius:3px;
//     display: flex;
//     align-items: center;
//     background: rgba(255, 255, 255, 0.8);
//     position: fixed;
//     top: 5%;
//     right: 2%;
// `

// const DepositBtn = styled.button`
//     width: 20%;
//     height: 37%;
//     border-radius:6px;
//     background: #D77600;
//     border: none;
//     color: white;
//     font-size: 17px;
//     outline: none;
//     cursor: pointer;
// `

// const CloseBtn = styled.span`
//     font-size: 18px;
//     color: white;
//     font-weight: bold;
//     cursor: pointer;

//     &:hover {
//         text-decoration: underline;
//     }
// `

// const EarnSub = styled.div`
//     font-size: 19px;
//     color: white;
//     width: 40%;
// `

// const EarnText = styled.div`
//     font-size: 20px;
//     font-weight:bold;
//     color: white;
//     margin-left: 5%;
// `

// const TopEarn = styled.div`
//     width: 100%;
//     height: 17%;
//     border-bottom: 1px solid rgba(255,255,255,0.7);
//     display: flex;
//     align-items: center;
// `

// const First = styled.div`
//     width: 95%;
//     height: 14%;
//     border-bottom: 1px solid white;
//     display: flex;
//     align-items: center;
// `

// const Second = styled.div`
//     width: 95%;
//     height: 13%;
//     border-bottom: 1px solid white;
//     display: flex;
//     align-items: center;
// `

// const BotEarning = styled.div`
//     width: 95%;
//     height: 30%;
//     display: flex;
//     align-items: center;
//     justify-content: flex-end;
//     padding-right: 7%;
//     gap:5%;
// `

// const EarningPopUp = styled.div `
//     width: 36%;
//     border-radius: 5px;
//     height: 65vh;
//     top: 5%;
//     position: fixed;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     background: #333;
// `

// const CancelBtn = styled.span`
//     color: white;
//     font-size: 35px;
//     &:hover {
//         color: red;
//     }
// `

// const CancelPopUp = styled.div`
//     width: 100%;
//     height: 10%;
//     display: flex;
//     justify-content: flex-end;
//     padding-right: 10%;
//     color: white;
//     font-size: 35px;
// `

// const PopUpDiv = styled.div`
//     width: 100%;
//     height:100vh;
//     background: rgba(0, 0, 0, 0.6);
//     position: fixed;
//     top: 0;
//     flex-direction: column;
//     display: flex;
//     justify-content: space-evenly;
//     align-items: center;
// `
// const PopUp = styled.div`
//     width: 90%;
//     height:40%;
//     background: #333;
//     display: flex;
//     justify-content: space-between;
// `

// const PopUpLeft = styled.div`
//     width: 25%;
//     height:100%;
//     background: #D77600;
//     object-fit: cover;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `

// const DepImg = styled.img`
//     width: 70%;
//     height:50%;
// `

// const PopUpRight = styled.div`
//     width: 70%;
//     height:100%;
//     background: #333;
//     display: flex;
//     justify-content: space-around;
//     align-items: center;
// `

// const PopUpAmount = styled.div`
//     width: 25%;
//     height:28%;
//     color: white;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
// `

// const AmountInput = styled.input`
//     width: 100%;
//     height:60%;
//     border-radius: 6px;
//     font-size: 17px;
//     color: white;
//     border: 1px solid rgba(255, 255, 255, 0.5);
//     background: #000;
//     padding-left: 10px;
//     outline: none;

//     &:focus {
//         border: 2px solid #D77600;
//     }

//     &::-webkit-outer-spin-button {
//         display: none;
//     }
//     &::-webkit-inner-spin-button {
//         display: none;
//     }
// `

// const PopUpPlan = styled.div`
//     width: 35%;
//     height:28%;
//     color: white;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
// `

// const PopUpPlanSelect = styled.select`
//     width: 100%;
//     height:60%;
//     border-radius: 6px;
//     font-size: 17px;
//     color: white;
//     border: 1px solid rgba(255, 255, 255, 0.5);
//     background: #000;
//     padding-left: 10px;
//     outline: none;
    
//     &:focus {
//         border: 2px solid #D77600;
//     };
// `

// const PopUpBtnDiv = styled.div`
//     width: 24%;
//     height:28%;
//     display: flex;
//     align-items: flex-end;
// `

// const PopUpBtn = styled.button`
//     width: 100%;
//     height:63%;
//     border-radius:6px;
//     background: #D77600;
//     border: none;
//     font-size: 17px;
//     outline: none;
//     cursor: pointer;
// `


const H1 = styled.div`
font-size: 45px;
    color: whitesmoke;
    font-weight: bold;
@media Screen and (max-width: 768px){
    /* display: block; */
    font-size: 45px;
    color: whitesmoke;
    font-weight: bold;
}
`;
const Dash = styled.div`
 width: 100%;
    height: 40vh;
    /* min-height: max-content; */
    background-image: url(${bgbg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

@media Screen and (max-width: 768px){
    display: block;
    width: 100%;
    height: 40vh;
    /* min-height: max-content; */
    background-image: url(${bgbg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}


`;

const Dashin = styled.div`
width: 100%;
    height: 40vh;
    background-color: #000;
    opacity: 75%;
    display: flex;
    align-items:center;
@media Screen and (max-width: 768px){
    display: block;
    width: 100%;
    height: 40vh;
    background-color: #0F192C;
    opacity: 75%;
    display: flex;
    align-items:center;
}
`;

const Divin = styled.div`
width: auto;
    height: auto;
    /* background-color: red; */
    margin-left: 80px;
@media Screen and (max-width: 768px){
    width: auto;
    height: auto;
    /* background-color: red; */
    margin-left: 80px;
}
`;

const Holder = styled.div`
display: block;
    width: auto;
    display: flex;
    align-items: center;

@media Screen and (max-width: 768px){
    display: block;
    width: auto;
    display: flex;
    align-items: center;
    /* justify-content: ; */
} 
`;
const Pagename = styled.div`
/* display: none; */
font-size: 25px;
color: #D77600;
font-weight: bold;
display: block;
display: flex;
justify-content: flex-start;
@media Screen and (max-width: 768px){
font-size: 25px;
color: #D77600;
font-weight: bold;
display: block;
display: flex;
justify-content: flex-start;
}
`;
const Icon = styled(FaDollarSign)`
    color: #D77600;
    width: 30px;
    height: 30px;

@media Screen and (max-width: 768px){
    /* display: block; */
    color: #D77600;
    width: 30px;
    height: 30px;

}
`;
const Container = styled.div`
width: 100%;
background-color: #000;
display: flex;
flex-direction: column;
align-items: center;
border-bottom: 3px solid #333;
`;
const Wrapper = styled.div`
margin-top: 70px;
width: 85%;
display: flex;
justify-content: space-between;
flex-wrap: wrap;

@media Screen and (max-width: 768px){
    flex-direction: column;
    flex-wrap: wrap;
}
`;
const Card = styled.div`
box-shadow: rgba(17, 132, 194, 0.2) 0px 2px 8px 0px;
width: 30%;
height: auto;
padding: 10px;
display: flex;
flex-direction: column;
align-items: center;
margin: 10px 0;

@media Screen and (max-width: 768px){
    width: 100%;
}

`;
// const Img = styled.img`
// /* background-color: #F56D50; */
// /* color: #F56D50; */
// `;
const Div = styled.div`
width: 90%;
border: 1px dashed grey;
border-radius: 0.2rem;
padding: 10px;
text-align:center;
margin: 10px 0;

@media Screen and (max-width: 768px){
    text-align: center;
}

`;
const Type = styled.div`
color: whitesmoke;
font-size: 17px;
border-bottom: 1px dashed grey;
`;
const Limit = styled.div`
color: whitesmoke;
font-size: 17px;
`;
const Div2 = styled.div`
color: whitesmoke;
font-size: 17px;

`;
const Div3 = styled.div`
color: whitesmoke;
font-size: 17px;
border-bottom: 1px dashed grey;
 border-left: 1px dashed grey;
 border-right: 1px dashed grey;
 width: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 10px 0;
 margin: 20px 0 10px 0
`;
const Button = styled(Link)`
width: 70%;
background-color: #D77600;
text-align: center;
padding: 10px;
border-radius: 5px;
font-weight: bold;
cursor: pointer;
text-decoration: none;
color: white;
`;