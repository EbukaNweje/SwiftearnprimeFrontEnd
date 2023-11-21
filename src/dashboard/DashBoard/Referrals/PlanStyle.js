import styled from 'styled-components';

export const MyPlanPage = styled.div`
        width: 90%;
        height: 40%;
        background-color: white;
        display: flex;
        border-radius: 5px;;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        /* margin-right: 5%; */
        margin-top: 5%;
 @media screen  and (max-width: 900px){
   display: flex;
   flex-direction: column;
   width: 90%;
   height: 40%;
   margin-top: 10%;
}

@media screen  and (max-width: 476px){
   display: flex;
   flex-direction: column;
   width: 90%;
   height: 40%;
   margin-top: 10%;
}

@media screen  and (max-width: 414px){
   display: flex;
   flex-direction: column;
   width: 90%;
   height: 40%;
   margin-top: 10%;
}
`

export const ProfileDiv = styled.div`
  width: 100%;
 height: 90%;
 margin-top: 3%;
 padding-left: 20px;
 display: flex;
 flex-direction: column;

 input {
  width: 90%;
  height: 40px;
  outline: none;
  margin-top: 10px;
  border: 1px solid gray;
  padding-left: 10px;
  border-radius: 3px;
  margin-bottom: 3%;
  margin-left: 10px;
 }

 button {
  width: 150px;
  height: 40px;
  cursor: pointer;
  transition: all 350ms ease;
  margin-left: 10px;
  margin-top: 4%;

  &:hover {
  background: orange;
  }
 }


 @media screen  and (max-width: 900px){
   padding: 0px;
}

@media screen  and (max-width: 476px){
   padding: 0px;
}

@media screen  and (max-width: 414px){
   padding: 0px;
}
` 
export const Label = styled.label`
  width: 100%;
  font-size: 18px;
  font-family: Nunito, sans-serif;
  padding: 0px 10px;
` 