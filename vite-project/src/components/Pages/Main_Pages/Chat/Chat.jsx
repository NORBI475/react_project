import { useState } from 'react'
import './Chat.css'
import myfb from './img/Group224.png'
import tjrs from './img/socseti.png'
import chat from './img/chat.png'
import sjrhrth from './img/txttchat.png'

function Chat() {
const [isBlockVisible, setBlockVisible] = useState(false);

const handleCircleClick = () => {
  setBlockVisible(!isBlockVisible);
};

return (
  <>

  <div className="container">

    <div className="big-circle" onClick={handleCircleClick}>
        <div className='lyuk'><p>1</p></div>
      <img src={chat}/>

      {isBlockVisible && <div className="white-block"><img src={tjrs}/></div>}
    </div>
    <div className="small-circle-left"></div>
    <div className='utyr'>  
        {/* <div className="small-circle-right"><img src={myfb}/></div> */}
    </div>

  </div>
  
  </>
);
};

export default Chat
