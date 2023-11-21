import styled from 'styled-components';

export const MyPlanPage = styled.div`
        width: 97%;
        height: 30%;
        background-color: white;
        display: flex;
        border-radius: 5px;
        justify-content: space-evenly;
        align-items: center;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        margin-right: 5%;
        margin-top: 5%;
 @media screen  and (max-width: 900px){
   display: flex;
   flex-direction: column;
   width: 100%;
   height: 100%;
}

@media screen  and (max-width: 476px){
   display: flex;
   flex-direction: column;
   width: 100%;
   height: 100%;
}

@media screen  and (max-width: 414px){
   display: flex;
   flex-direction: column;
   width: 100%;
   height: 100%;
}
`
export const Plans = styled.div`
        width: 24%;
        height: 90%;
        background:white;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        align-items: center;
        display: flex;
        flex-direction: column;
        
@media screen  and (max-width: 900px){
   width: 90%;
}

@media screen  and (max-width: 476px){
   width: 90%;
}

@media screen  and (max-width: 414px){
   width: 90%;
}
`
export const PlansPrice = styled.div`
        width: 100%;
        height: 20%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: flex-end;
`
export const PlansSpan = styled.span`
        font-size:17px;
        font-weight: bold;
        color:#C28138;
        font-family: Nunito, sans-serif;

`
export const PlansHeader = styled.h1`
        font-size:22px;
        font-weight: bold;
        color:#C28138;
        font-family: Nunito, sans-serif;

`
export const PlansRow = styled.div`
        width: 100%;
        /* height: 30px; */
        padding-block: 10px;
        padding-left: 20px;
`

export const PlansRowspan = styled.span`
        width: 65%;
        font-family: Nunito, sans-serif;

`

export const PlansOptions = styled.div`
        width: 100%;
        height: 60%;
        display: flex;
        align-items: center;
        /* justify-content: space-between; */
        justify-content: center;
        /* background: #000; */
        flex-direction: column;
`

export const PlansBtn = styled.button`
        width: 70%;
        height: 10%;
        background: red;
        color: white;
        border: none;
        outline: none;
        border-radius: 5px;
        font-size: 15px;
        font-weight: bold;
        cursor: pointer;

`

