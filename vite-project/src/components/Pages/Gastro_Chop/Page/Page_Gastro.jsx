import './Page_Gastro.css'
import Fjf from '../../Biznec_Lanch/Section1/Section1'
import Button from '../../../Modal_Window/Button/Button'
import ilyuky from './img/Group246.png'
import Section3 from '../../Main_Pages/Main/Section3/Section3'

function Page_Gastro() {

    return (
      <>
      <section className='gastro-section-page'>
        <Fjf/>
        <div className='tjrejlutk'>
          <div className='ytjkytker'>
            <Button/>
          </div>
            
            <img src={ilyuky}/>
        </div>
        <Section3/>
      </section>
      </>
    )
  }
  
  export default Page_Gastro