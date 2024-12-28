import { useState } from 'react'
import './Section1.css'

// IMG

import img1 from './img/eco.png'
import img2 from './img/Group215.png'
import img3 from './img/Group213.png'
import img4 from './img/Group214.png'
import img5 from './img/night.png'
import img6 from './img/time.png'


function Section1() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section className='section1'>
        <div className='bbblok'>
            <div className='img'>
                <div className='tk'>
                    <img src={img1}/>
                    <p>Бережём природу.
                    Эко-тара и проборы.</p>
                </div>
            </div>
            <div className='img'>
            <div className='tk'>
                <img src={img2}/>
                <p>Бережём природу.
                Эко-тара и проборы.</p>
            </div>
        </div>
        <div className='img'>
            <div className='tk'>
                <img src={img3}/>
                <p>Бережём природу.
                Эко-тара и проборы.</p>
            </div>
        </div>
        <div className='img'>
            <div className='tk'>
                <img src={img4}/>
                <p>Бережём природу.
                Эко-тара и проборы.</p>
            </div>
        </div>
        <div className='img'>
            <div className='tk'>
                <img src={img5}/>
                <p>Бережём природу.
                Эко-тара и проборы.</p>
            </div>
        </div>
        <div className='img'>
            <div className='tk'>
                <img src={img6}/>
                <p>Бережём природу.
                Эко-тара и проборы.</p>
            </div>
        </div>
        </div>
    </section>
    </>
  )
}

export default Section1
