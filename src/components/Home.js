import React, { useState } from 'react'
import data from '../data'
import Card from './Card'

const companies = [...new Set(data.map((item)=>item.company))]

function Home() {
    const [cardInfo , setCardInfo] = useState(data) 
    const [CardCompanies , setCardCompanies] = useState(companies) 
  return (
    <div className='container'>
        <h1 className='container-title'>Experience</h1>
        <div className='underline'></div>
        <div className='experience-container'>
            <Card companies={CardCompanies} cardInfo = {[cardInfo]} />
        </div>


    </div>
  )
}

export default Home