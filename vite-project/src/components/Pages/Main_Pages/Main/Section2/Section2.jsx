import { useState } from 'react'
import './Section2.css'

// IMG

import img256 from './img/Group236.png'

function Section2() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section className='section2'>
      <div className='kgh'>
        <img src={img256}/>
      </div>
    </section>
    </>
  )
}

export default Section2
