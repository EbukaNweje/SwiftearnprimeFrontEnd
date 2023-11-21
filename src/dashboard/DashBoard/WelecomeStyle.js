import styled from "styled-components";

export const ContainerBody = styled.div`
    width: 100%;
    height: max-content;
    margin-top: 3%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Welcome = styled.div`
  width: 90%;
  font-family: Nunito, sans-serif;
  color:  rgb(255, 255, 255);
  font-weight: 600;
  line-height: 26px;
  font-size: 25px;
  /* margin-left: 5%; */
`

export const ContainerWelcome= styled.div`
    width: 90%;
    height: 60px;
    background: #E1F0F9;
    margin-top: 5%;
    border-radius: 6px;
    display: flex;
    align-items: center;
    font-family: Nunito, sans-serif;
    color:  gray;
    font-weight: 500;
    line-height: 26px;
    font-size: 15px;
    padding-left: 10px;
    justify-content: space-between;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    span{
        color: red;
        margin-right: 3%;
        cursor: pointer;
    }
`
export const Account = styled.div`
    width: 90%;
    height: max-content;
    background: #fff;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin-top: 10%;
    padding: 3%;

`

export const AccountSummary = styled.div`
    width: 100%;
    height: max-content;

    h1{
        font-family: Nunito;
        font-size: 20px;
        font-weight: 400;
        color: rgb(41, 128, 185);
    }
`
export const PaymentBoxdiv = styled.div`
    width: 100%;
    height: max-content;
    display: flex;

@media screen  and (max-width: 900px){
    flex-direction: column
}

@media screen  and (max-width: 476px){
    flex-direction: column
}

@media screen  and (max-width: 414px){
    flex-direction: column
}
`

export const PaymentBox = styled.div`
    width: 35%;
    height: 23vh;
    /* background: #013454; */
    margin-top: 2%;
    border-radius: 7px;
    margin-left: 5px;
    display: flex;
    align-items: center;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
@media screen  and (max-width: 900px){
   width: 100%
}

@media screen  and (max-width: 476px){
   width: 100%
}

@media screen  and (max-width: 414px){
   width: 100%
}
`

export const Div = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* background: #000; */
`
export const TextDive = styled.div`
    width: 70%;
    margin-left: 3%;

    p{
    font-family: Nunito, sans-serif;
    font-weight: 600;
    font-size: 18px;
    margin-top: 2%;
    }
 `

export const Span = styled.div`
    color: #013454;
    font-family: Nunito, sans-serif;
    font-size: 18px;

`
export const ActivePlans = styled.div`
    width: 100%;
    height: max-content;
    margin-top: 10%;
    h1{
        font-family: Nunito;
        font-size: 20px;
        font-weight: 400;
        color: rgb(41, 128, 185);
    }
`
export const ActivePlansBigDiv = styled.div`
    width: 100%;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    height: 25vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2%;
    flex-direction: column;

@media screen  and (max-width: 900px){
   h1 {
    padding-left: 10px;
    font-size: 17px;
   }
}

@media screen  and (max-width: 476px){
   h1 {
    padding-left: 10px;
    font-size: 17px;
   }
}

@media screen  and (max-width: 414px){
   h1 {
    padding-left: 10px;
    font-size: 17px;
   }
}
`
export const ActivePlansBtn = styled.button`
    margin-top: 2%;
    width: 20%;
    height: 50px;
    background: #2980B9;
    cursor: pointer;
    border-radius: 7px;
    font-size: 18px;
    color: white;
    transition: all 350ms ease-in;

    &:hover{
        background: #013454;
    }

@media screen  and (max-width: 900px){
   width: 50%
}

@media screen  and (max-width: 476px){
   width: 50%
}

@media screen  and (max-width: 414px){
   width: 50%
}
`

export const Title = styled.div`
/* display: none; */
    display: flex;
    width: 100%;
    font-size: 15px;
    font-weight: 500;
    color: gray;
    margin-top: 20px;

    input{
      color: gray;
      background-color: #E1F0F9 ;
      width: 69%;
      outline: none;
      border: none;
      height: 40px;
      margin-left: 5%;
      padding-left: 10px;
    }

    button{
      border: none;
      background-color: #2980B9;
      color: white;
      height: 40px;
      border-radius: 3px;
      width: 10%;
      margin-left: 2%;

@media screen  and (max-width: 900px){
   width: 20%
}

@media screen  and (max-width: 476px){
   width: 20%
}

@media screen  and (max-width: 414px){
   width: 20%
}
}
@media Screen and (max-width: 768px){
    /* display: block; */
    font-size: 17px;
    font-weight: 500;
}
`;
