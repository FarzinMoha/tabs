import React, { useState } from 'react'
import CardInfo from './CardInfo'

function Card(props) {
    const company = [...props.companies]
    const [jobIndex , setJobIndex] = useState(0)
    const data = props.cardInfo
  return (
    <div className='card'>
        <div className='card-button'>
            {company.map((item , index)=>{
                return (<button onClick={()=>{setJobIndex(index)}} className={jobIndex==index ? 'card-btn  active' : 'card-btn'} key={index}>{item}</button>)
            })}
        </div>
        <div className='card-info'>
            {data.map((info , index)=>{
                return <CardInfo key={index} info={info[jobIndex]} />
            })}
            
        </div>

    </div>
  )
}

export default Card