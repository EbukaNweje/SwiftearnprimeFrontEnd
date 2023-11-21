import React from 'react'
import { MyPlanPage, Plans, PlansOptions, PlansPrice, PlansBtn, PlansSpan, PlansHeader, PlansRow, PlansRowspan   } from './PlanStyle'
import { GrCheckmark } from 'react-icons/gr'
import PlansData from "./PlansData"

export default function Plan({Mydeposits, myPlans}) {
    console.log(PlansData)
  return (
    <MyPlanPage>
        {
            PlansData.map((props)=>(
                <Plans>
                <PlansPrice>
                    <PlansSpan>{props.PricePlan}</PlansSpan>
                    <PlansHeader>{props.PlanHeader}</PlansHeader>
                </PlansPrice>
                <PlansOptions>
                    <PlansRow>
                        <GrCheckmark />
                        <PlansRowspan>{props.PlansRowspan1}</PlansRowspan>
                    </PlansRow>
                    <PlansRow>
                        <GrCheckmark />
                        <PlansRowspan>{props.PlansRowspan2}</PlansRowspan>
                    </PlansRow>
                    <PlansRow>
                        <GrCheckmark />
                        <PlansRowspan>{props.PlansRowspan3}</PlansRowspan>
                    </PlansRow>
                    <PlansRow>
                        <GrCheckmark />
                        <PlansRowspan>{props.PlansRowspan4}</PlansRowspan>
                    </PlansRow>
                    <PlansRow>
                        <GrCheckmark />
                        <PlansRowspan>{props.PlansRowspan5}</PlansRowspan>
                    </PlansRow>
                </PlansOptions>
                <PlansBtn 
                    onClick={()=> {Mydeposits(true), myPlans(false)}}
                >Get started</PlansBtn>
            </Plans>
            ))
        }
    </MyPlanPage>
  )
}
