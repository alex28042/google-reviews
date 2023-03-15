import React from 'react'
import BenefitsBuy from '../components/Home/BenefitsBuy'
import BuyBox from '../components/Home/BuyBox'

function Home() {
  return (
    <div>
      <h1 className='font-bold text-4xl text-center mb-32'>Buy Google Reviews</h1>
      <div className='flex flex-row'>
        <BuyBox />
        <BenefitsBuy />
      </div>
    </div>
  )
}

export default Home