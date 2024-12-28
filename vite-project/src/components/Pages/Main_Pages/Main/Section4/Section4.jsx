import React, { useRef, useState } from "react";
import "./Section4.css";


export default function Section4() {

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
    <section className="section4-zakaz">
      <div className="div-1-left">
        <div className="div-1-p">
          <h6>Оформить заказ</h6>
          <p>Обсудите все детали заказа по телефону
          или сами укажите все подробности онлайн</p>
        </div>
        <div className="div-1-input">
          <div className="yjdrzs">
            <p className="ryplto">Имя</p>
            <input type="text" />
          </div>
          <div className="yjdrzs">
            <p className="rhhkr">Номер телефона</p>
            <input type="text" />
          </div>
        </div>
        <div className="checkbox">
          <div className="checkbox-1">
            <input type="checkbox" id="checkbox" />
            <p>Тест-день! Получить скидку -30%?</p>
          </div>
          <div className="checkbox-1">
            <input type="checkbox" id="checkbox" />
            <p>Согласен с условиями сотрудничества</p>
          </div>
        </div>
        <div className="ytryjkttky">
          <button className='kyttt'>Заказ по телефону</button>
          <p>ИЛИ</p>
          <button className='kytt'>Оформить заказ</button>
        </div>
      </div>





      <div className="div-1-right">
        <h6>Часто задаваемые вопросы</h6>
      <button className="rkrtyrty"
        onClick={handleClick}
        style={{

        }}
      >
        Как осуществляется доставка правильного питания?
      </button>
      
      {isClicked && (
        <div className="style-button">
          <p>
          <h5>Как осуществляется доставка правильного питания?</h5>
          <br />
          Доставка рационов здорового питания осуществляется ежедневно с 6.00 до 10.00 в выбранный Вами часовой диапазон. Время ожидания курьера по адресу составляет 10 мин. Далее курьер едет на следующий адрес. Если Вас не было по адресу или Вы не вышли на связь, пакет повторно может быть доставлен к Вам на такси за Ваш счет или будет списан.
          </p>
        </div>
        
      )}
       <button
      >
        Как осуществляется доставка правильного питания?
      </button>
      <button
      >
        Как осуществляется доставка правильного питания?
      </button>
      <button
      >
        Как осуществляется доставка правильного питания?
      </button>
      <button
      >
        Как осуществляется доставка правильного питания?
      </button>
      <button
      >
        Как осуществляется доставка правильного питания?
      </button>
      <button
      >
        Как осуществляется доставка правильного питания?
      </button>
      <button
      >
        Как осуществляется доставка правильного питания?
      </button>
    </div>

    </section>
    </>
  );
}
