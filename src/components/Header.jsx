import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ShopIcon from '../assets/img/shopIcon.png'
import CallIcon from '../assets/img/callIcon.png'
import Logo from '../assets/img/logo.svg'
import ArrowDown from '../assets/img/arrowDown.png'
import ArrowDownWhite from '../assets/img/Vector 31.svg'

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

const Header = ({children, setIsActive, className}) => {
  const [isMouseMoveAdv, setIsMouseMoveAdv] = useState(false)
  const [isMouseMoveInfo, setIsMouseMoveInfo] = useState(false)
  const [isMouseMoveDB, setIsMouseMoveDB] = useState(false)

  return (
   <section className="preview">
      <div className="preview__top">
         <div className="header">
            <div className="header__top">
               <div className="left">
                  <Link to={'/'}>
                     <img src={Logo} alt="Logo"/>                     
                  </Link>
               </div>
               <div className="right">
                  <button className="header__btn btn">
                     <img src={ShopIcon} alt="" className="icon"/>
                     <p>Заказать демонстрацию</p>
                  </button>
                  <button className="header__btn btn" onClick={() => setIsActive(true)}>
                     <img src={CallIcon} alt="" className="icon"/>
                     <p>Заказать звонок</p>
                  </button>
                  <span className="header__number" 
                     onClick={() => setIsActive(true)}>
                     +7 (499) 283-12-73
                  </span>
               </div>
               <div className="burger">
                  <span></span>
                  <span></span>
                  <span></span>
               </div>
            </div>
            <div className="header__bottom">
               <nav className={className}>
                  <ul>
                     <li
                        onMouseEnter={() => setIsMouseMoveAdv(true)}>
                        <ul 
                        className={isMouseMoveAdv ? 'dropDown active' : 'dropDown'}
                        onMouseLeave={() => setIsMouseMoveAdv(false)}>
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
                        <a href="">Возможности</a>
                        <img src={className === 'black' ? ArrowDownWhite : ArrowDown} alt="arrowDown"/>
                     </li>
                     <li> 
                        <Link to={'/projects'}>Проекты</Link>
                     </li>
                     <li>
                        <a href="">Цены</a> 
                     </li>
                     <li onMouseEnter={() => setIsMouseMoveInfo(true)}>
                        <a href="">Информация</a>
                        <img src={className === 'black' ? ArrowDownWhite : ArrowDown} alt="arrowDown"/>
                        <ul 
                           className={isMouseMoveInfo ? 'dropDown active' : 'dropDown'}
                           onMouseLeave={() => setIsMouseMoveInfo(false)}>
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
                        <a href="">Контакты</a> 
                     </li>
                     <li onMouseEnter={() => setIsMouseMoveDB(true)}>
                        <a href="">База знаний</a>
                        <img src={className === 'black' ? ArrowDownWhite : ArrowDown} alt="arrowDown"/>
                        <ul 
                           className={isMouseMoveDB ? 'dropDown active' : 'dropDown'}
                           onMouseLeave={() => setIsMouseMoveDB(false)}>
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
               </nav>
            </div>
         </div>
      </div>

      {children}

   </section>
  )
}

export default Header