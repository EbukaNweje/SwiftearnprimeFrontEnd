import React, {useEffect, useState} from 'react'
import {Container, From, Wrapper, TextDiv, InputData} from "./UpdateuserStyle"
import Axios from "axios"
// import Swal from 'sweetalert2'


const UpdateUser = ({Display}) => {
  const [data, setData] = useState()
  const [accountBalance, setAccountBalance] = useState()
  const [totalProfit, setTotalProfit] = useState()
  const [bonus, setBonus] = useState()
  const [totalDeposit, setTotalDeposit] = useState()
  const [totalWithdrawal, setTotalWithdrawal] = useState()
  const [totalInvestment, setTotalInvestment] = useState()
  const [ref, setRef] = useState()
  // console.log(depositWalletbalance, interestWalletbalance, 
  //   totalWithdraw, totalInvest, totalDeposit, lastWithdrawal, ref,)

    const url = `https://swiftearnprime.onrender.com/api/alluserdata`
  
    useEffect(()=>{
      Axios.get(url).then(res => setData(res.data.data))
      /* eslint-disable-next-line react-hooks/exhaustive-deps */
  },[])
  
  /* onst mydata = {...data} */
  console.log("this is the datas i what to use",data)
    useEffect(()=>{
        /* eslint-disable-next-line no-unused-expressions */
        return Display
        /* eslint-disable-next-line react-hooks/exhaustive-deps */
      },[])
  
      // const upddatebtn = async(id, e) => {

       
      //   const { value: totalDeposit } = await Swal.fire(
        
      //     {
      //     title: e.target.title,
      //     input: 'text',
      //     inputLabel: e.target.title,
      //     inputValue: last,
      //     showCancelButton: true,
      //     inputValidator: (value) => {
      //       if (!value) {
      //         return 'You need to write something!'
      //       }
      //     }
      //   } 
      //   )
        
      //   if (totalDeposit) {
      //     Swal.fire(`Your LastDeposit is ${totalDeposit}`)
          
      //     let UpdateValues = e.target.title
      //     let finalData = {UpdateValues, totalDeposit}
      //     const sentApi = Object.values(finalData)
      //     const myObject = {};
      //     myObject[sentApi[0]] = sentApi[1];
      //     console.log(myObject)
          
          
      //    const lastDepositupdate = `https://newbestkryptfieldbackend.onrender.com/api/${UpdateValues}/${id}`
      //    Axios.patch(lastDepositupdate, myObject)
      //     .then(res => console.log(res))
      //      console.log("this is the id", id) 
      //     console.log(totalDeposit) 
      //   }
      // }


      const updatedata = {accountBalance, totalProfit,  bonus, totalDeposit, totalWithdrawal, totalInvestment, ref,};
      const updateprofile = (id) => {
        const updateuserurl = `https://swiftearnprime.vercel.app/api/userdata/${id}`
          console.log(updateuserurl)
        Axios.patch(updateuserurl, updatedata)
        .then(res => {
          console.log(res)
          window.location.reload()
        })
        .catch((Err)=>{
          console.log(Err)
        })
      }

  return (
    <Container>
        <h1>
          Update User Data: 
        </h1>


        <From>
         {
          data?.map((props)=>(
            <Wrapper>
            <TextDiv>
            <label>Name:</label>
             <p>{props.fullName}</p>
            </TextDiv>

          <TextDiv>
          <label>Email:</label>
            <p> {props.email}</p>
          </TextDiv>
         
          {/* <InputData>
            <label>last deposit: </label>
            <input type="text" value={last} onChange ={(e)=>{setLast(e.target.value)}}/>
              <button onClick={(e)=>upddatebtn(props._id,e)} title={"lastDeposit"}>update</button> 
              <span>${props.lastDeposit}</span>
          </InputData> */}

          <InputData>
            <label>Account Balance: </label>
            <input type='text' placeholder='0' onChange={(e)=>{setAccountBalance(e.target.value)}}/>
            {/* <button onClick={(e)=>upddatebtn(props._id,e)} title={"totalDeposit"}>update</button> */}
            <span>${props.accountBalance}</span>
          </InputData>

          <InputData>
            <label>Total Profit: </label>
            <input type='text' placeholder='0' onChange={(e)=>{setTotalProfit(e.target.value)}}/>
            {/* <button onClick={(e)=>upddatebtn(props._id,e)} title={"totalDeposit"}>update</button> */}
            <span>${props.totalProfit}</span>
          </InputData>

          <InputData>
            <label>Bonus: </label>
            <input type='text' placeholder='0' onChange={(e)=>{setBonus(e.target.value)}}/>
            {/* <button onClick={(e)=>upddatebtn(props._id,e)} title={"totalDeposit"}>update</button> */}
            <span>${props.bonus}</span>
          </InputData>

          <InputData>
            <label>Total Deposits: </label>
            <input type='text' placeholder='0' onChange={(e)=>{setTotalDeposit(e.target.value)}}/>
            {/* <button onClick={(e)=>upddatebtn(props._id,e)} title={"totalDeposit"}>update</button> */}
            <span>${props.totalDeposit}</span>
          </InputData>

          <InputData>
            <label>Total Widthdrawal: </label>
            <input type='text' placeholder='0' onChange={(e)=>{setTotalWithdrawal(e.target.value)}}/>
            {/* <button onClick={(e)=>upddatebtn(props._id,e)} title={"totalDeposit"}>update</button> */}
            <span>${props.totalWithdrawal}</span>
          </InputData>

          <InputData>
            <label>Total Investment: </label>
            <input type='text' placeholder='0' onChange={(e)=>{setTotalInvestment(e.target.value)}}/>
            {/* <button onClick={(e)=>upddatebtn(props._id,e)} title={"totalDeposit"}>update</button> */}
            <span>${props.totalInvestment}</span>
          </InputData>
{/* 
          <InputData>
            <label>Total Invest: </label>
            <input/>
            <button onClick={(e)=>upddatebtn(props._id,e)} title={"totalDeposit"}>update</button>
            <span>${props.totalInvest}</span>
          </InputData> */}

          {/* <InputData>
            <label>Total Withdraw: </label>
            <input/>
            <button onClick={(e)=>upddatebtn(props._id,e)} title={"totalDeposit"}>update</button>
            <span>${props.totalWithdraw}</span>
          </InputData> */}

          {/* <InputData>
            <label>Account balance: </label>
            <input/>
            <button onClick={(e)=>upddatebtn(props._id,e)} title={"accountBalance"}>Update</button>
            <span>${props.accountBalance}</span>
          </InputData> */}

          {/* <InputData>
            <label>Start up deposit: </label>
            <input />
            <button onClick={(e)=>upddatebtn(props._id,e)} title={"startUpDeposit"}>Update</button>
            <span>${props.startUpDeposit}</span>
          </InputData> */}

          <InputData>
              <label>Referral earnings: </label>
              <input type='text' placeholder='0' onChange={(e)=>{setRef(e.target.value)}} /> 
              {/* <button onClick={(e)=>upddatebtn(props._id,e)} title={"totalEarned"}>Update</button> */}
              <span>${props.ref}</span>
          </InputData>
            <button style={{margin: "10px 0px", height: "40px"}} onClick={()=>updateprofile(props._id)}>Update</button>
          </Wrapper>
          ))
         }
        </From>
    </Container>
  )
}

export default UpdateUser;
