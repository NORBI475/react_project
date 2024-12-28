import { useState } from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'



// IMG

import logo from './img/Website_banner4.png'
import png1 from './img/GastroChef/Ккал.png'
import png2 from './img/GastroChef/fish_1.png'
import png3 from './img/GastroChef/carrot.png'
import png4 from './img/GastroChef/bottle.png'
import png5 from './img/GastroChef/meat.png'
import png6 from './img/GastroChef/Group233.png'
import krug from './img/MaskGroup.png'


function Nav() {
  const [count, setCount] = useState(0)

  return (
    <>

    
    <nav className='nav'>
        <div className='logo'>
          <div className='logo-blok'>
            <img src={logo}/>
            <p>healthy ration</p>
          </div>
        </div>
        <div className='navv'>
          <div className='poloca'>
              <Link to='/MainPages'>Програмы питания</Link>
              <Link to='/Lanch'>Бизнес-ланчи</Link>
              <Link to='/Gastro'><a href="" className='green'>Gastro Shopa</a></Link>
              <Link to='/Onac'>О нас</Link>
              <Link to='/Blog'>Блог</Link>
          </div>
          <div className='polocaa'>
              <p className='green' href="">+38 (068) 949 - 49 -19</p>
          </div>
          <div className='polocaaa'>
              <a className='green' href="">RU</a>
          </div>
          <div className='polocaaa'>
              <a className='green' href="">UA</a>
          </div>
          <div className='polocaaa'>
              <a className='green' href="">EN</a>
          </div>
        </div>
    </nav>
    <header className='header1'>
      <div className='left-panel'>
        <div className='object-1'>
          <div className='krrug'>
            <img src={png1}/>
          </div>
        </div>
        <div className='object-1'>
          <div className='krrug'>
            <img src={png2}/>
          </div>
        </div>
        <div className='object-1'>
          <div className='krrug'>
            <img src={png3}/>
          </div>
        </div>
        <div className='object-1'>
          <div className='krrug'>
            <img src={png4}/>
          </div>
        </div>
        <div className='object-1'>
          <div className='krrug'>
            <img src={png5}/>
          </div>
        </div>
        <div className='object-1'>
          <div className='krrug'>
            <img src={png6}/>
          </div>
        </div>
      </div>
      <div className='ytcmkk'>

      </div>
    </header>
    </>
  )
}

export default Nav
