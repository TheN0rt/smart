import React from 'react'
import logoFooter from '../assets/img/logoFooter.svg'
import whatsApp from '../assets/img/whatsApp.svg'
import telegram from '../assets/img/telegram.svg'
import instagram from '../assets/img/instagram.svg'
import youtube from '../assets/img/youtube.svg'
import phoneSmall from '../assets/img/phoneSmall.svg'
import shopIconSmall from '../assets/img/shopIconSmall.svg'
import calcSmall from '../assets/img/calcSmall.svg'
import { Link } from 'react-router-dom'

const Footer = ({setIsActive, setIsActiveCalc}) => {
  return (
   <footer>
      <div class="top">
         <div class="top__left">
            <img src={logoFooter} alt="logo" class="top__left-img"/>
            <div class="call">
               <span class="call__text">Звоните нам:</span>
               <span class="call__number">+7 (499) 283-12-73</span>
            </div>
            <div class="media">
               <img src={whatsApp} alt="whatsApp"/>
               <img src={telegram} alt="telegram"/>
               <img src={instagram} alt="instagram"/>
               <img src={youtube} alt="youtube"/>
            </div>
            <button onClick={() => setIsActive(true)}>
               <img src={phoneSmall} alt="icon"/>
               <p>Заказать звонок</p>
            </button>
         </div>
         <div class="top__right">
            <ul>
               Возможности
               <li><a href="">Управление освещением</a></li>
               <li><a href="">Безопасность</a></li>
               <li><a href="">Мультимедиа</a></li>
               <li><a href="">Управление климатом</a></li>
               <li><a href="">Охрана</a></li>
               <li><a href="">Сеть и бесшовный Wi-Fi</a></li>
               <li><a href="">Управление устройствами</a></li>
               <li><a href="">Управление умным домом</a></li>
               <li><a href="">Беспроводной умный дом</a></li>
               <li><a href="">Готовые решения</a></li>
            </ul>
            <ul> <Link to='/projects'>Проекты</Link></ul>
            <ul>Цены</ul>
            <ul>
               Информация
               <li><a href="">О компании</a></li>
               <li><a href="">О системе</a></li>
               <li><a href="">Проектирование</a></li>
               <li><a href="">Монтаж</a></li>
            </ul>
            <ul>Контакты</ul>
            <ul>
               База знаний
               <li><Link to='/instruction'>Инструкции</Link></li>
               <li><a href="">Cтатьи</a></li>
               <li><a href="">Видео</a></li>
               <li><a href="">FAQ</a></li>
            </ul>
            <div class="btn-block">
               <button class="demo">
                  <img src={shopIconSmall} alt="icon"/>
                  <p>Заказать демонстрацию</p>
               </button>
               <button class="calc" onClick={() => setIsActiveCalc(true)}>
                  <img src={calcSmall} alt="icon"/>
                  <p>Расчёт стоимости</p>
               </button>
            </div>
         </div>
      </div>
      <hr/>
      <div class="bottom">
         <p>
            <span>&copy; 2022 </span>
            <span>smart-revolution.ru </span>
            <a href="">Политика конфиденциальности</a>
         </p>
      </div>
   </footer>
  )
}

export default Footer