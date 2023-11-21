import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100%;
    height: 375vh;
    position: sticky;
    top: 0px;
    background-color: #E1F0F9;
    z-index: 9999999999;
    bottom: 0px;

@media screen  and (max-width: 900px){
   min-height: 300vh;
   width: 100%;
   margin-left: 0px;
   background: white;
}

@media screen  and (max-width: 476px){
   min-height: 300vh;
   width: 100%;
   margin-left: 0px;
   background: white;
}

@media screen  and (max-width: 414px){
   height: 300vh;
   width: 100%;
   margin-left: 0px;
   background: white;
}
`

export const DashBoardBody = styled.div`
    width: 100%;
    height: 80vh;
    background: #2980B9;
    border-bottom-left-radius: 7%;
`

export const DashBoardBodyContainer = styled.div`
    width: 100%;
    min-height: max-content;
    position: absolute;
    top: 0%;
    display: flex;
    /* background: #000; */
`

export const DashBoardBodyContainerLeft = styled.div`
    width: 40%;
    height: 300vh;
    /* background: #000; */
    padding: 20px;

@media screen  and (max-width: 900px){
    position: sticky;
    top: 0;
    z-index: 99999999;
    background: #000;
    width: 40%;
    height: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    display: none;

}

@media screen  and (max-width: 476px){
    position: sticky;
    top: 0;
    z-index: 99999999;
    background: #000;
    width: 40%;
    height:max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    display: none;

}

@media screen  and (max-width: 414px){
    position: sticky;
    top: 0;
    z-index: 99999999;
    background: green;
    width: 40%;
    height: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    display: none;
}
`

export const ContainerLeftLogo = styled.img`
   width: 35px;
   height: 35px;
@media screen  and (max-width: 900px){
 margin-top: 5%;   

}

@media screen  and (max-width: 476px){
margin-top: 5%;

}

@media screen  and (max-width: 414px){
margin-top: 5%;

}
`
export const ContainerLeftProfile = styled.div`
   width: 90%;
   height: 20%;
   /* background: #000; */
   margin-top: 5%;
   display: flex;
   flex-direction: column;
   align-items:center;

   @media screen  and (max-width: 900px){
   display: flex;
   flex-direction: column;
   width: 100%;
   /* background: #000; */
   height: max-content;
}

@media screen  and (max-width: 476px){
   display: flex;
   flex-direction: column;
   width: 100%;
   height: max-content;
}

@media screen  and (max-width: 414px){
   display: flex;
   flex-direction: column;
   width: 100%;
   height: max-content;
}
`
export const ContainerLeftUserName = styled.div`
    color: rgb(255, 255, 255);
    font-family: Nunito, sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 26px;
    margin-top: 4%;
`
export const ContainerLeftStatus = styled.div`
    color: rgb(255, 255, 255);
    font-family: Nunito, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 23.8px;
    margin-top: 2%;
`
export const ContainerLeftBalances = styled.div`
    width: 95px;
    height: 20px;
    background-color:#ECECEC;
    border-radius: 30px;
    margin-top: 7%;
    display: flex;
    align-items: center;
    padding: 10px;
    justify-content: space-around;
    color: rgb(39, 52, 68);
    font-family: Nunito, sans-serif;
    font-size: 14px;
    font-weight: 600;
    line-height: 21px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`
export const ContainerLeftMenuNav= styled.div`
    width: 100%;
    height: max-content;
    /* background: #000; */
    margin-top: 20%;
    /* padding: 20px; */
    /* justify-content: space-around; */

@media screen  and (max-width: 900px){
   margin-top: 10%;
   /* background-color: green; */
   min-height: max-content;
   width: 90%;
   margin-left: 0px;
}

@media screen  and (max-width: 476px){
   margin-top: 10%;
   /* background-color: green; */
   min-height: max-content;
   width: 90%;
   margin-left: 0px;
}

@media screen  and (max-width: 414px){
   margin-top: 10%;
   /* background-color: green; */
   min-height: max-content;
   width: 90%;
   margin-left: 0px;
}
`

export const ContainerLeftMenuNavCard = styled.div`
    width: 100%;
    height: 30vh;
    /* background-color: red; */
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 3%;

@media screen  and (max-width: 900px){
   display: flex;
   flex-direction: column;
   width: 100%;
   /* background: #000; */
   height: max-content;
   padding-bottom: 10px;
}

@media screen  and (max-width: 476px){
   display: flex;
   flex-direction: column;
   width: 100%;
   /* background: #000; */
   height: max-content;
   padding-bottom: 10px;
}

@media screen  and (max-width: 414px){
   display: flex;
   flex-direction: column;
   width: 100%;
   /* background: #000; */
   height: max-content;
   padding-bottom: 10px;
}
`
export const ContainerLeftMenuNavCardBox = styled.div`
     width: 40%;
     height: 80px; 
    background-color:  #2980B9;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border-radius: 7px;
    cursor: pointer;

    span{
        margin-top: 5px;
        color: rgb(255, 255, 255);
        font-size: 14px;
        font-family: Nunito, sans-serif;
        line-height: 21px;
        font-weight: 600;
        transition: all 350ms ease-in;
        transform: scale(1)

    }

    &:hover{
        transform: scale(1.09);
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }

@media screen  and (max-width: 900px){
   margin-top: 5%;
   height: 100px;
   width: 100%;
}

@media screen  and (max-width: 476px){
   margin-top: 5%;
   height: 100px;
   width: 100%;
}

@media screen  and (max-width: 414px){
   margin-top: 5%;
   height: 100px;
   width: 100%;
}
`
export const ContainerLeftContact = styled.div`
    width: 70%;
    height: 33vh;
    background:  #2980B9;
    margin-top: 20%;
    border-radius: 7px;
    padding: 10px 0px 0px 10px;

    h1 {
        font-family: Nunito, sans-serif;
        color:  rgb(255, 255, 255);
        font-weight: 600;
        line-height: 26px;
        font-size: 20px;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    span {
        font-family: Nunito, sans-serif;
        color:  rgb(255, 255, 255);
        font-weight: 400;
        line-height: 27.2px;
        font-size: 16px;
    }
`


export const ContainerLeftButtons = styled.div`
    width: 90%;
    height: 40px;
    background: #FEFEFE;
    border-radius: 10px;
    margin-top: 7%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Nunito, sans-serif;
    font-size: 14px;
    font-weight: 600;
    line-height: 21px;
    color: rgb(39, 52, 68);
    cursor: pointer;
`

export const DashBoardBodyContainerRight = styled.div`
    width: 100%;
    height: 300vh;
    position: relative;
    /* background: green; */
`

export const ContainerRightHeader = styled.div`
    width: 100%;
    height:  7%;
    /* background: #000; */
    display: flex;
    justify-content: flex-end;
    align-items:center;
    border-bottom: 1px solid #c6c6c6ac;
`
export const ContainerRightSmallHeader = styled.div`
    width: 40%;
    height: 60%;
    /* background: red; */
    display: flex;
    align-items: center;
    justify-content: space-between;

@media screen  and (max-width: 900px){
   min-height: max-content;
   width: 90%;
}

@media screen  and (max-width: 476px){
   min-height: max-content;
   width: 90%;
}

@media screen  and (max-width: 414px){
   min-height: max-content;
   width: 90%;
}
`

export const ContainerRightSmaillProfile = styled.div`
    width: max-content;
    height: 80%;
    background: #5e5d5d9a;
    margin-right: 10%;
    border-radius: 30px;
    display: flex;
    align-items: center;
    padding-right: 6%;

    span {
    width: 100%;
    color: rgb(255, 255, 255);
    font-family: Nunito, sans-serif;
    font-size: 15px;
    font-weight: 600;
    line-height: 26px;
    margin-left: 5%;
    }
`

export const ContainerRightMainBodyChange = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction:column;
    align-items: center;

    @media screen and (max-width:430px){
        
    }
`

 export const Logout = styled.div`
    width: 30%;
    height: 40px;
    background: red;
    color: white;
    display:flex;
    justify-content: center;
    align-items: center;
    margin-top: 25%;
    border-radius: 7px;
    font-family: Nunito, sans-serif;
    cursor: pointer;
    font-size: 15px;
`

export const MobileSpan = styled.div`
    display: none;

@media screen  and (max-width: 900px){
  display: flex;
}

@media screen  and (max-width: 476px){
  display: flex;
}

@media screen  and (max-width: 414px){
  display: flex;
}
`
export const DiskTopMenu = styled.div`
    display: flex;

@media screen  and (max-width: 900px){
   display: none
}

@media screen  and (max-width: 476px){
   display: none
}

@media screen  and (max-width: 414px){
   display: none
}
`

export const MobileNavMenu = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background: #2980B9;
    top: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ContainerLeftMenuNavMobile = styled.div`
 width: 100%;
 height: max-content;
 /* background: #000; */
 display: flex;
align-items: center;
 flex-direction: column;
 margin-top: 2%;
`
export const ContainerLeftMenuNavCardmobile = styled.div`
    width: 90%;
    height: max-content;
    /* background-color: red; */
    display: flex;
    justify-content: space-around;
    margin-bottom: 3%;
`
export const ContainerLeftMenuNavCardBoxMobile = styled.div`
    width: 40%;
     height: 80px; 
    background-color:  white;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border-radius: 7px;
    cursor: pointer;

    span{
        margin-top: 5px;
        color: #2980B9;
        font-size: 14px;
        font-family: Nunito, sans-serif;
        line-height: 21px;
        font-weight: 600;
        transition: all 350ms ease-in;
        transform: scale(1)

    }

    &:hover{
        transform: scale(1.09);
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
`


export const CloseSpanButton = styled.div`
    font-size: 30px;
    font-weight: 700;
    color: white;
    cursor: pointer;
    font-family: Nunito, sans-serif;
    position: absolute;
    right: 20px;
    top: 20px;
`
export const Starting = styled.div`
    width: 90%;
    margin-top: 5%;
    width: 90%;
  font-family: Nunito, sans-serif;
  color:  rgb(255, 255, 255);
  font-weight: 600;
  line-height: 26px;
  font-size: 25px;

`

export const LogoOut = styled.div`
   margin-right: 5%;
  font-family: Nunito, sans-serif;
  color: red;
 font-size: 15px;
 background-color: white;
 padding: 5px;
 border-radius: 7px;
 box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
 cursor: pointer;
 display: none;

@media screen  and (max-width: 900px){
   display: flex
}

@media screen  and (max-width: 476px){
   display: flex
}

@media screen  and (max-width: 414px){
   display: flex
}
`

