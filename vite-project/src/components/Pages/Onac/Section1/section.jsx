import { useState } from 'react'
import './index.css'
import Ruka from './img/ruka.png'

function Section1() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section className='section1_onac'>
      <div className='div-ruka'>
        <img src={Ruka}/>
        <div className='div-ruka-p'>
          <h1>История GastroChef началась более 6-ти лет назад... </h1>
          <p>Долгое время я наблюдал как людям не хватает времени 
          для правильного и здорового питания, какое правильного, просто питания регулярного. </p>
          <p>Они могли позавтракать, в обед съесть что-то типа шаурмы или снэка, а вечером в силу голода наесться, что плохо сказывалось на их обмене веществ и естественно здоровье. </p>
          <p>Я со своим 17-и летним опытом в спорте 
и проф. образованием, вместе с диетологом разработали рационы правильного питания 
с подсчетом калорий (КБЖУ).
</p>
          <h1>Знакомтесь! Команда GastroChef!</h1>
        </div>
      </div>
    </section>
    </>
  )
}

export default Section1
