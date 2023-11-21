import React, { useState } from 'react'
import './Confirmation.css'
import {useParams} from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";


function Confirmation() {
    // const [proof, setProof] = useState("")
    const [remove, setRemove] = useState(false)
    const [proofShown, setProofShown] = useState("")
    const [change, setChange] = useState(false)
    const {paymentmathod} = useParams()
    // const [paymentText, setPaymantText] = useState()
    console.log(paymentmathod)
    
    const [state, setState] = useState({
        value: `${paymentmathod === "BitcoinPayment"? ("bc1qcxum393n73ywftqnm77kjg7kc0qtav5s9fay5a"): paymentmathod === "EthereumPayment"? ("0x02Af0f6631ff12a34cf6bf905a7b234683A770cA"): paymentmathod ==="DogecoinPayment"? ("DNRDKX9ZySoFfXXsbhVYrmGfZTRnMBNhLp"): paymentmathod==="BnbPayment"?("bnb1urf2a2keqeukmpqn3eyacp53s7zhhpy62cq6ck"):"Chosse a Payment Method"}`,
        copied: false,
      });

      const getAmount = JSON.parse(localStorage.getItem("Amounttopay"))
    // setProofShown(URL.createObjectURL(proof))
  return (
    <div className='Confirmation_Page'>
        <div className='ConfirmationWrapper'>
            <div className='Header_Texts'>
                <span>You have requested <span style={{color:"#EABE4D"}}>{getAmount} USD</span> , Please pay <span style={{color:"#EABE4D"}}>{getAmount} USD</span> for successful payment</span>
                <h2>Please follow the instruction below</h2>
            </div>
            <div className='Header_Instr'>
                <span>Kindly Make Payment to the Wallet Address</span>
                <span>below</span>

                {/* <h2>{paymentmathod === "BitcoinPayment"? ("bc1qcxum393n73ywftqnm77kjg7kc0qtav5s9fay5a"): paymentmathod === "EthereumPayment"? ("0x02Af0f6631ff12a34cf6bf905a7b234683A770cA"): "no"}</h2> */}
                <div style={{width: "100%", display: "flex", marginBottom: "10px"}}>
                             <input value={state.value} style={{width: "90%", paddingLeft: "10px"}}/>
                                <CopyToClipboard
                                 text={state.value}
                                 onCopy={() => setState({ copied: true })}
                                 >
                              <button style={{width: "20%"}}>{state.copied ? "Copied" : "Copy text"}</button>
                            </CopyToClipboard>
                        </div>
                <span>Provide Us With A Proof Of Payment using the form below after payment.</span>
            </div>
            <div className='ProofDiv'>
                <span>Note: Kindly check or confirm that you are making payment to the correct wallet address listed.</span>
                <p>Your Proof Of Payment *</p>
                <div className='Proof_Img'>
                    <div className={proofShown && !remove ?"Payment_PreviewSelected":change?"Payment_PreviewSelected":'Payment_Preview'}>
                    <img src={remove && !proofShown?"":proofShown} alt="" />
                    </div>
                    <input onChange={(e)=>{
                        const File =(e.target.files[0])
                        setProofShown(URL.createObjectURL(File))
                        {File?setChange(true):null}
                        }} className='Payment_Input' type="file" id='Payment'/>
                   {
                    proofShown && change?
                     <div className='Preview_Btn'>
                        <label className='Change_Btn' htmlFor="Payment">Change</label>
                        <button onClick={()=>{
                            setRemove(true)
                            setProofShown(!proofShown)
                            setChange(false)
                            
                        }} className='Remove_Btn'>Remove</button>
                    </div>:
                    !proofShown && !change?
                    <label className='Payment' htmlFor="Payment">Select your proof of payment</label>:null
                   }
                </div>
                <button className='Paynow_Btn' style={{background:"green", color:"white"}}>Pay now</button>
            </div>
        </div>
    </div>
  )
}

export default Confirmation