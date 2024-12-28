import { useState } from 'react'
import './Header.css'



// IMG

import logo from './img/Website_banner4.png'
import png1 from './img/GastroChef/Ккал.png'
import png2 from './img/GastroChef/fish_1.png'
import png3 from './img/GastroChef/carrot.png'
import png4 from './img/GastroChef/bottle.png'
import png5 from './img/GastroChef/meat.png'
import png6 from './img/GastroChef/Group233.png'
import krug from './img/MaskGroup.png'

function Header() {
  const [count, setCount] = useState(0)

  return (
    <>

    <header className='header'>
      <div className='info-blok'>
        <div className='ktdfj'>
          <div className='text'>
            <div className='trht'>
              <p>Detox программа –  <span className='span-header'>вкусное очищение</span> организма </p>
            </div>
            <div className='rjt'>
              <p>8 бутылочек <span className='span-header'>натуральных</span> смузи и фрешей.</p>
            </div>
            <div className='kjet'>
              <button>Заказать</button>
              <p>Пробный день всего: <span className='span-header-2'>427 руб</span> </p>
            </div>
          </div>
        </div>
      </div>
      <div className='ytcmk'>

        <div className='rjk'>
          <img className='rtjjr' src={krug}/>

        </div>
      </div>
    </header>

    </>
  )
}

export default Header
