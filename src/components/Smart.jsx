import React from 'react'

import Calc from '../assets/img/calc.png'
import Play from '../assets/img/play.png'
import HeaderRing from './HeaderRing'

const Smart = ({setIsActive}) => {
  return (
   <div className="smart">
      <div className="smart__top">
         <h1 className="title">
            УМНЫЙ ДОМ ОТ SMART REVOLUTION НАДЁЖНОЕ РЕШЕНИЕ ПО ДОСТУПНОЙ ЦЕНЕ
         </h1>
         <div className="subtitle">
            Узнайте стоимость системы умного дома для своего проекта
         </div>
      </div>
      <div className="smart__bottom">
         <button className="smart__btn btn" onClick={() => setIsActive(true)}>
            <img src={Calc} alt="calculator"/>
            <p>Расчёт стоимости</p>
         </button>
         <button className="smart__btn btn">
            <img src={Play} alt="calculator"/>
            <p>Смотреть видео</p>
         </button>
      </div>
      <HeaderRing/>
   </div>
  )
}

export default Smart