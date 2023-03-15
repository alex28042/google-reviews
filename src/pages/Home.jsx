import React from 'react'
import BenefitsBuy from '../components/Home/BenefitsBuy'
import BuyBox from '../components/Home/BuyBox'

function Home() {
  return (
    <div>
      <div className='flex flex-row'>
        <BuyBox />
        <BenefitsBuy />
      </div>
      Home
    </div>
  )
}

export default Home