import React, { useState, useEffect } from 'react'
import './Withdrawal.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Withdrawal() {
    const [confirmation, setConfirmation] = useState(false)
    const [walt, setWalt] = useState(false)
    const [withdrw, setWithdrw] = useState()
    const [data, setData] = useState()
    const [err, setErr] = useState()
    const [amount, setAmount] = useState("0.00")
    const [amountError, setAmountError] = useState("")
    const [isButtonDisabled, setButtonDisabled] = useState(true);
    const [btc, setBtc] = useState(false)
    const [bnb, setBnb] = useState(false)
    const [ethereum, setEthereum] = useState(false)
    const [dogecoin, setDogecoin] = useState(false)

    const [withdrawalWallet, setWithdrawalWallet] = useState()
    const [withdrawalWalleteroo, setWithdrawalWalletEroo] = useState()

  let userName = data?.userName
  let email = data?.email

  console.log(userName, email)

    const datas = {withdrawalWallet, userName, email, amount}

    const {id} = useParams()

    const handleAmount = (e) => {
        const newAmount = e.target.value;
        setWithdrw(newAmount);
        // Validate the email
        if(newAmount.trim() === '') {
            setErr('Withdrawal code is required');
        }else {
            setErr('');
        }
      };

      const urll = `https://cheerful-fox-waders.cyclic.cloud/api/userdata/${id}`
      const url = `https://webtext-qigk.onrender.com/api/requestwithdrawcode/${id}`
      const urlll = `https://webtext-qigk.onrender.com/api/withdrawal`


      const sendWallet = () => {
        if(!withdrawalWallet){
            setWithdrawalWalletEroo("You can not leave this Field Empty")
        }else{
            setWalt(false)
            axios.post(urlll, datas)
            .then(res => {console.log(res), window.location.reload()})
            .catch((err)=>{
                console.log(err)
            })
        }
    }


      useEffect(() =>{
          axios.get(urll).then(res => setData(res.data.data))
          /* eslint-disable-next-line react-hooks/exhaustive-deps */
        }, [])

        console.log(data)


    const sendWithdrawcode = ()=>{
        if(amount === "0.00"){
            setAmountError("You can not leave this Field Empty")
        }
        else{
                 // console.log(id)
            setConfirmation(true)
            axios.post(url)
                .then(res=>{
                console.log(res)
            })
             .catch((err)=>{
                console.log(err)
            })
        }
    }

    const seeNext = ()=>{
        if(!withdrw){
            setErr("Withdrawal code is required")
        }else if(data.withdrawCode != withdrw){
            setErr("Invalid Code")
        }
        else{
            setConfirmation(false),
            setWalt(true)
        }
    }

 

    const handleAmountVal = (e) => {
        const newAmounts = e.target.value;
        setAmount(newAmounts);
        // Validate the email
        if(newAmounts.trim() === '') {
            setAmountError('Amount is required');
        }else {
            setAmountError('');
        }
      };

    const handlewallt = (e) => {
        const newAmounts = e.target.value;
        setWithdrawalWallet(newAmounts);
        // Validate the email
        if(newAmounts.trim() === '') {
            setWithdrawalWalletEroo('Amount is required');
        }else {
            setWithdrawalWalletEroo('');
        }
      };


  return (
    <div className='Withdrawal_Container'>
        <section  className='Withdrawal_Wrapper'>
            <div className='Withdrawal_Card'>
               <div className='Withdrawal_CardWrapper'>
                 <div className='Withdrawal_Amount'>
                    <div className='Amount_Top'>
                        <span className='Ammount_Label'>Enter Amount</span>
                        <input className='Amount_Input' type="text" placeholder='Enter Amount'  onChange={handleAmountVal}/>
                        <p style={{marginTop: "-3%", marginLeft: "2%", color: "red", fontSize: "12px"}}>{amountError}</p>
                    </div>
                    <div className='Amount_Bot'>
                        <span className='Ammount_Label'>Choose Payment Method from the list below</span>
                        <div className='Choose_Div'>
                            <div className='Transfer_Bitcoin'>
                            <div className='Transfer_Div'>
                            <img src="data:image/png;base64,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" alt="" /><span>Bitcoin</span>
                            </div>   
                                <input type="radio" name="wel" onChange={()=> {setEthereum(false), setBtc(true), setBnb(false), setDogecoin(false), setButtonDisabled(false)}}/>
                            </div>
                            <div className='Transfer_Bitcoin'>
                                <div className='Transfer_Div'>
                                  <img src="data:image/jpeg;base64,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" alt="" /><span>Ethereum</span>
                                </div>
                                <input type="radio" name="wel" onChange={()=> {setEthereum(true), setBtc(false), setBnb(false), setDogecoin(false), setButtonDisabled(false)}}/>
                            </div>
                            {/* <div className='Transfer_Bitcoin'>
                                <div className='Transfer_Div'>
                                <img src="https://app.kryptbased-assets.com/assets/images/gateway/62be9a611d53b1656658529.png" alt="" /><span>Tether</span>
                                </div>
                                <input type="radio"/>
                            </div> */}
                            <div className='Transfer_Bitcoin'>
                                <div className='Transfer_Div'>
                               <img src="data:image/jpeg;base64,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" alt="" /><span>DOGECOIN</span>
                                </div>
                                <input type="radio" name="wel" onChange={()=> {setEthereum(false), setBtc(false), setBnb(false), setDogecoin(true), setButtonDisabled(false)}}/>
                            </div>
                            <div className='Transfer_Bitcoin'>
                                <div className='Transfer_Div'>
                            <img src="data:image/png;base64,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" alt="" /><span>BNB</span>
                                </div>
                                <input type="radio" name="wel" onChange={()=> {setEthereum(false), setBtc(false), setBnb(true), setDogecoin(false), setButtonDisabled(false)}}/>
                            </div>
                        </div>
                    </div>
                    <button className='Amount_Btn'
                         style={{background: `${isButtonDisabled ? "#E0E0E5" : "#2980B9"}`}}
                            onClick={()=>{sendWithdrawcode()}}>
                        {btc? ("Withdraw from wallet"): bnb?("Withdraw from wallet"): ethereum?("Withdraw from wallet"): dogecoin?("Withdraw from wallet"): "Withdraw from wallet"}
                    </button>
                </div>
                <div className='Withdrawal_Total'>
                    <div className='Total_Card'>
                        <div className='Total_Top'>
                            <div className='Inner'>
                                <span>Total Withdrawal</span>
                                <h4>-</h4>
                            </div>
                            <div className='Inner'>
                                <h4>${amount}</h4>
                                <span>Amount</span>
                            </div>

                        </div>
                        <div className='Total_Bot'>
                            <span>View Withdrawal history</span>
                        </div>
                    </div>
                </div>
               </div>
            </div>
        </section>
        {
            confirmation?
            <div className='Amount_Confrimation'>
            <div className='Amount_ConfrimationCard'>
                <div className='Cancel_Div'>
                    <span onClick={()=>{
                        setConfirmation(false)
                    }}>X</span>
                </div>
                <div className='Confirmation_Body'>
                    <h1>Enter the code sent to your mail below</h1>
                    <input className='Confirmation_Input' type="text" onChange={handleAmount} />
                    <p style={{marginTop: "-3%", marginLeft: "2%", color: "white", fontSize: "12px"}}>{err}</p>
                    <button className='Confirmation_Btn'
                        onClick={()=>{
                            seeNext()
                        }}
                    >Confirm Withdrawal</button>
                </div>
            </div>
        </div>:
        null
        }
        {
            walt?
            <div className='Amount_Confrimation'>
            <div className='Amount_ConfrimationCard'>
                <div className='Cancel_Div'>
                    <span onClick={()=>{
                        setWalt(false)
                    }}>X</span>
                </div>
                <div className='Confirmation_Body'>
                    <h1>Select your Wallet Address</h1>
                        <select name="" id="" style={{width:"80%", height:"40px"}}>
                            <option value="Bitcon">Bitcoin</option>
                            <option value="Bitcon">Ethereum</option>
                            <option value="Bitcon">DOGECOIN</option>
                            <option value="Bitcon">BNB</option>
                        </select>
                        <span>Enter your Wallet Address</span>
                    <input className='Confirmation_Input' type="text" onChange={handlewallt} />
                    <p style={{marginTop: "-3%", marginLeft: "2%", color: "red", fontSize: "12px"}}>{withdrawalWalleteroo}</p>
                    <button className='Confirmation_Btn'
                     onClick={()=>{
                        sendWallet()
                    }}
                    >Withdrawal</button>
                </div>
            </div>
        </div>:
        null
        }
    </div>
  )
}

export default Withdrawal