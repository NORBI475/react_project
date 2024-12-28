import { useState } from 'react'
import './index.css'
import Group from './img/group.png'
import Group235 from './img/Group235.png'

function Section3() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section className='section3_onac'>
      <div className='div-rukaa'>
        <div className='div-rukaa-p'>
          <h1>«GastroChef - легко для занятых»
          </h1>
          <p>GastroChef - правильное питание с доставкой на дом, создано что бы облегчить жизнь, освободить время от готовки, от ненужных перекусов, фастфудов и дать возможность чувствовать себя легко и полным энергии, сил, для новых свершений и побед.</p>
          <p>Все продукты для приготовления правильного питания закупаются только с сертификатами, а рационы готовятся на современной и безопасной кухне ночью перед приездом к Вам!</p>
          <p>Друзья, если у Вас остались вопросы Вы с легкостью можете позвонить нам или написать мне лично в Инстаграм или Фейсбук.</p>
          <h1>Знакомтесь! Команда GastroChef!</h1>
        <div className='ddff'>
          <img src={Group235}/>
          <p>- Я в социальных сетях</p>
        </div>
        </div>
        <img src={Group}/>
      </div>
      
    </section>
    </>
  )
}

export default Section3
