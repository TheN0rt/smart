import React from 'react'

const Statistics = () => {
  return (
   <section class="statistics">
      <h2 class="statistics__title">Smart Revolution в цифрах</h2>
      <div class="statistics__container">

         <div class="circle">
            <svg viewBox="0 0 200 200">
               <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                     <stop offset="0%" style={{stopColor:"#312EE9", stopOpacity:1}} />
                     <stop offset="100%" style={{stopColor: "#8785E1", stopOpacity: 1}} />
                  </linearGradient>
               </defs>
               <path d="M4 84V84C4 39.8172 39.8172 4 84 4V4C128.183 4 164 39.8172 164 84V84" stroke='none' stroke-width="8" stroke-dasharray="16 16" fill="none"/>
               <circle cx="100" cy="100" r="80" stroke-width="8" stroke="#000" stroke-dasharray="250" fill="transparent"/>
            </svg>
            <div class="text">
               <p class="text__count">36</p>
               <p class="text__string">Сотрудников</p>
            </div>
         </div>

         <div class="circle">
            <svg viewBox="0 0 200 200">
               <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                     <stop offset="0%" style={{stopColor: "#8785E1", stopOpacity: 1}} />
                     <stop offset="100%" style={{stopColor:"#312EE9", stopOpacity:1}} />
                  </linearGradient>
               </defs>

               <circle cx="100" cy="100" r="80" stroke-width="8" stroke="#000"
               fill="none" stroke-dasharray="502.6548246" stroke-dashoffset="125.6637061" />

               <path d="M84 80V80C39.8172 80 4 44.1828 4 -3.33786e-06V-3.33786e-06" stroke="white" stroke-width="8" stroke-dasharray="16 16"/>                        
            </svg>
            <div class="text">
               <p class="text__string">Реализовано</p>
               <p class="text__count">27</p>
               <p class="text__string">Объектов</p>
            </div>
         </div>

         <div class="circle">
            <svg viewBox="0 0 200 200">
               <circle cx="100" cy="100" r="80" stroke-width="8" stroke="#000"
                  fill="none" stroke-dasharray="125.6637061 502.6548246" stroke-dashoffset="0" />
                  
               <path d="M-2.38419e-06 4V4C44.1828 4 80 39.8172 80 84V84C80 128.183 44.1828 164 -9.37801e-06 164V164" stroke="white" stroke-width="8" stroke-dasharray="16 16" transform="translate(-91px, -184px)"/>

               <path d="M84 80V80C39.8172 80 4 44.1828 4 -3.33786e-06V-3.33786e-06" stroke="white" stroke-width="8" stroke-dasharray="16 16" class="net"/>                        
                     
            </svg>
            <div class="text">
               <p class="text__string">Площадь</p>
               <p class="text__count">1600+</p>
               <p class="text__string">метров</p>
            </div>
         </div>

         <div class="circle">
            <svg viewBox="0 0 200 200">
               <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                     <stop offset="0%" style={{stopColor: "#8785E1", stopOpacity: 1}} />
                     <stop offset="100%" style={{stopColor:"#312EE9", stopOpacity:1}} />
                  </linearGradient>
               </defs>

               <circle cx="100" cy="100" r="80" stroke-width="8" stroke="#000"
               fill="none" stroke-dasharray="502.6548246" stroke-dashoffset="125.6637061" />

               <path d="M80 0V0C80 44.1828 44.1828 80 0 80V80" stroke="white" stroke-width="8" stroke-dasharray="16 16"/>   
            </svg>
            <div class="text">
               <p class="text__count">135 <span>т.р</span></p>
               <p class="text__string">Средняя</p>
               <p class="text__string">Стоимость</p>
            </div>
         </div>

      </div>
   </section>
  )
}

export default Statistics