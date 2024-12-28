import { useEffect, useState } from 'react'
import './Button.css'
import Modal from '../Modal/Modal'
import krest from './img/Group242.png'
import thr from './img/Group248.png'


function Button() {
  const [modal, setModal] = useState(false)
  
  async function fetchUsers() {
    setLoading(true)
    setUsers(users)
    setLoading(false)  
  }

  useEffect(()  => {
    fetchUsers()
  }, [])




  function OpenModel(){
    setModal(true)
  }

  return (
    <>
    <section className='section-button'>
      <button className='kyt' onClick={OpenModel}>Оформить заказ</button>
      <Modal open={modal}>
        <div className='wgtrj'>
          <img className='erh' onClick={()=>setModal(false)} src={krest}/>
        </div>
        <div className='modal-button-2'>
          <div className='okna'>
            <div className='ytkytk'>
              <p>Имбирные конфеты с апельсином</p>
              <div className='rtjh'>
                <img src={thr}/>
                <p className='hgghd'>26 грн</p>
              </div>
              
            </div>
            <div className='ytkytk'>
              <p>Имбирные конфеты с апельсином</p>
              <div className='rtjh'>
                <img src={thr}/>
                <p className='hgghd'>26 грн</p>
              </div>

            </div>
            <div className='ytkytk'>
              <p>Имбирные конфеты с апельсином</p>
              <div className='rtjh'>
                <img src={thr}/>
                <p className='hgghd'>26 грн</p>
              </div>

            </div>
            <div className='ytkytk'>
              <p>Имбирные конфеты с апельсином</p>
              <div className='rtjh'>
                <img src={thr}/>
                <p className='hgghd'>26 грн</p>
              </div>

            </div>
            <div className='ytkytk'>
              <p>Имбирные конфеты с апельсином</p>
              <div className='rtjh'>
                <img src={thr}/>
                <p className='hgghd'>26 грн</p>
              </div>

            </div>
            <div className='ytkytk'>
              <p>Имбирные конфеты с апельсином</p>
              <div className='rtjh'>
                <img src={thr}/>
                <p className='hgghd'>26 грн</p>
              </div>

            </div>
            <div className='kytdg'>
              <div className='ukrt'>
                <button>Онлайн заказ</button>
              </div>
              <div className='nje'>
                <button>3шт/78 грн</button>
              </div>
              <div className='njrte'>
                <button>Заказ по телефону</button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </section>
    </>
  )
}

export default Button