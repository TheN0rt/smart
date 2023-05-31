import React from 'react'
import server from '../assets/img/server.svg'
import dblClick from '../assets/img/dblClick.svg'
import time from '../assets/img/time.svg'
import sensor from '../assets/img/sensor.svg'
import scalability from '../assets/img/scalability.svg'
import camera from '../assets/img/camera.svg'
import connection from '../assets/img/connection.svg'
import security from '../assets/img/security.svg'
import dipslays from '../assets/img/dipslays.svg'
import unicApp from '../assets/img/unicApp.svg'

const Advantages = () => {
  return (
   <section class="advantages">
      <h2 class="advantages__title">Преимущества</h2>
      <div class="advantages__subtitle">
         <div class="advantages-block">
            <img src={server} alt="server"/>
            <span>Сервер</span>
            <span>в России</span>
            <div class="ellipse"></div>
         </div>
         <div class="advantages-block">
            <img src={dblClick}  alt="dblClick"/>
            <span>Два клика до</span>
            <span>результата</span>
            <div class="ellipse"></div>
         </div>
         <div class="advantages-block">
            <img src={time}  alt="time"/>
            <span>Время отклика</span>
            <span>- 70 мс</span>
            <div class="ellipse"></div>
         </div>
         <div class="advantages-block">
            <img src={sensor}  alt="sensor"/>
            <span>Автоматическое добавление устройств и датчиков</span>
            <div class="ellipse"></div>
         </div>
         <div class="advantages-block">
            <img src={scalability}  alt="scalability"/>
            <span>Масштабируемость</span>
            <div class="ellipse"></div>
         </div>
         <div class="advantages-block">
            <img src={camera}  alt="camera"/>
            <span>Полноценная система видео наблюдения</span>
            <div class="ellipse"></div>
         </div>
         <div class="advantages-block">
            <img src={connection}  alt="connection"/>
            <span>Двусторонняя связь с мобильного устройства</span>
            <div class="ellipse"></div>
         </div>
         <div class="advantages-block">
            <img src={security}  alt="security"/>
            <span>Безопасность - высший приоритет</span>
            <div class="ellipse"></div>
         </div>
         <div class="advantages-block">
            <img src={dipslays}  alt="dipslays"/>
            <span>Широкий ассортимент устройств</span>
            <div class="ellipse"></div>
         </div>
         <div class="advantages-block">
            <img src={unicApp}  alt="unicApp"/>
            <span>Уникальное приложение</span>
            <div class="ellipse"></div>
         </div>
      </div>
   </section>
  )
}

export default Advantages