import './Section1.css'
import rgd from './img/Group239.png'
import eejfgj from './img/Group244.png'
import jfgdr from './img/Group245.png'
import { Link } from 'react-router-dom'

function Section1() {

    return (
      <>
      <section className='gastro-section1'>
        <Link to='/Page_Gastro'><img src={eejfgj}/></Link>
        <img src={jfgdr}/>
      </section>
      </>
    )
  }
  
  export default Section1