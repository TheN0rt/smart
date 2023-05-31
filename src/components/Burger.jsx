import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import lamp from '../assets/img/dropDown/lamp.svg'
import security from '../assets/img/dropDown/security.svg'
import media from '../assets/img/dropDown/media.svg'
import climate from '../assets/img/dropDown/climate.svg'
import camera from '../assets/img/dropDown/camera.svg'
import wifi from '../assets/img/dropDown/wifi.svg'
import displays from '../assets/img/dropDown/displays.svg'
import management from '../assets/img/dropDown/management.svg'
import wireless from '../assets/img/dropDown/wireless.svg'
import doneHome from '../assets/img/dropDown/doneHome.svg'

import about from '../assets/img/dropDown/about.svg'
import system from '../assets/img/dropDown/system.svg'
import designing from '../assets/img/dropDown/designing.svg'
import montage from '../assets/img/dropDown/montage.svg'

import instruction from '../assets/img/dropDown/instruction.svg'
import articles from '../assets/img/dropDown/articles.svg'
import videos from '../assets/img/dropDown/videos.svg'
import faq from '../assets/img/dropDown/faq.svg'

import ShopIcon from '../assets/img/shopIcon.png'
import CallIcon from '../assets/img/callIcon.png'
import ArrowDown from '../assets/img/arrowDown.png'

const Burger = ({isActive, setModalActive, setBurgerActive}) => {
   const [isDropdownOport, setDropdownOport] = useState(false)
   const [isDropdownInfo, setDropdownInfo] = useState(false)
   const [isDropdownDB, setDropdownDB] = useState(false)
   useEffect(() => {
      isActive ?
      document.querySelector('body').classList.add('stop-scrolling')
      :
      document.querySelector('body').classList.remove('stop-scrolling')
   }, [isActive])
  return (
    <div className={isActive ? 'burger__wrapper active' : 'burger__wrapper'} >
      <div className="close">
         <div className="close-menu" onClick={() => setBurgerActive(false)}>
            <span className={isActive ? 'active' : ''}></span>
            <span className={isActive ? 'active' : ''}></span>
            <span className={isActive ? 'active' : ''}></span>
         </div>
      </div>
      <ul>
         <li onClick={(e) => {
            e.preventDefault()
            setDropdownOport(!isDropdownOport)
         }}>
            <p>
               <span>Возможности</span>
               <img src={ArrowDown} alt="arrowDown"/>
            </p>
            <ul className={isDropdownOport ? 'active' : ''}>
               <li>  
                  <Link>
                     <img src={lamp} alt="lamp" />
                     <span>Управление освещением </span>   
                  </Link>
               </li>
               <li>
                  <Link>
                     <img src={security} alt="security" />
                     <span>Безопасность</span>   
                  </Link>  
               </li>
               <li>
                  <Link>
                     <img src={media} alt="media" />
                     <span>Мультимедиа</span>   
                  </Link> 
               </li>
               <li>
                  <Link>
                     <img src={climate} alt="climate" />
                     <span>Управление климатом</span>   
                  </Link>
               </li>
               <li>
                  <Link>
                     <img src={camera} alt="camera" />
                     <span>Охрана</span>   
                  </Link> 
               </li>
               <li>
                  <Link>
                     <img src={wifi} alt="wifi" />
                     <span>Сеть и бесшовный Wi-Fi</span>   
                  </Link>
               </li>
               <li>
                  <Link>
                     <img src={displays} alt="displays" />
                     <span>Управление устройствами</span>   
                  </Link>
               </li>
               <li>
                  <Link>
                     <img src={management} alt="management" />
                     <span>Управление умным домом</span>   
                  </Link> 
               </li>
               <li>
                  <Link>
                     <img src={wireless} alt="wireless" />
                     <span>Беспроводной умный дом </span>   
                  </Link>
               </li>
               <li>
                  <Link>
                     <img src={doneHome} alt="doneHome" />
                     <span>Готовые решения</span>   
                  </Link>
               </li>
            </ul>
         </li>
         <li>
            <Link to='/projects'> Проекты </Link>
         </li>
         <li>
            <span>Цены</span> 
         </li>
         <li onClick={(e) => {
            e.preventDefault()
            setDropdownInfo(!isDropdownInfo)
         }}>
            <p>
               <span>Информация</span>
               <img src={ArrowDown} alt="arrowDown"/>
            </p>
            <ul className={isDropdownInfo ? 'active' : ''}>
               <li> 
                  <Link>
                     <img src={about} alt="about" />
                     <span>О компании</span>   
                  </Link>
               </li>
               <li>
                  <Link>
                     <img src={system} alt="system" />
                     <span>О системе</span>   
                  </Link>  
               </li>
               <li>
                  <Link>
                     <img src={designing} alt="designing" />
                     <span>Проектирование</span>   
                  </Link> 
               </li>
               <li>
                  <Link>
                     <img src={montage} alt="montage" />
                     <span>Монтаж</span>   
                  </Link>
               </li>
            </ul>
         </li>
         <li>
            <span>Контакты</span>
         </li>
         <li onClick={(e) => {
            e.preventDefault()
            setDropdownDB(!isDropdownDB)
         }}>
            <p>
               <span>База знаний</span>
               <img src={ArrowDown} alt="arrowDown"/>
            </p>
            <ul className={isDropdownDB ? 'active' : ''}> 
               <li> 
                  <Link to={'/instruction'}>
                     <img src={instruction} alt="instruction" />
                     <span>Инструкции</span>   
                  </Link>
               </li>
               <li>
                  <Link>
                     <img src={articles} alt="articles" />
                     <span>Статьи</span>   
                  </Link>  
               </li>
               <li>
                  <Link>
                     <img src={videos} alt="videos" />
                     <span>Видео</span>   
                  </Link> 
               </li>
               <li>
                  <Link>
                     <img src={faq} alt="faq" />
                     <span>FAQ</span>   
                  </Link>
               </li>
            </ul>
         </li>
      </ul>
      <div className="btn-sector">
         <span>+7 (499) 283-12-73</span>
         <button className="btn">
            <img src={ShopIcon} alt="" className="icon"/>
            <p>Заказать демонстрацию</p>
         </button>
         <button className="btn" onClick={() => setModalActive(true)}>
            <img src={CallIcon} alt="" className="icon"/>
            <p>Заказать звонок</p>
         </button>
      </div>
    </div>
  )
}

export default Burger