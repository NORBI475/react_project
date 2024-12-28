import { useState } from 'react'
import './Section4.css'
import Sectio4 from '../../Main_Pages/Main/Section4/Section4'
// IMG

import img256 from './img/Group236.png'

function Section4() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section className='section4rtjh'>
      <div className='kgh'>
        <Sectio4/>
      </div>
    </section>
    </>
  )
}

export default Section4
