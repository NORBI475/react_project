import logotip from './img/Group181.png'
import './Footer.css'

function Footer() {

      
  return (
    <>
    
    <footer className='footer'>
        <div className='info_footer'>
            <div className='a_footer'>
                <a href="">Програмы питания</a>
                <a href="">О нас</a>
                <a href="">Бизнес-ланчи</a>
                <a href="">Gastro Shop</a>
                <a href="">Блог</a>
            </div>
            <div className='logotip'>
                <img src={logotip}/>
            </div>
            <div className='p_footer'>
                <p>Условия
                сотрудничества</p>
                <p>FAQ</p>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer