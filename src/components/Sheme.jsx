import React from 'react'
import calc from '../assets/img/calc.png'
import blueArrowRight from '../assets/img/blueArrowRight.svg'
import checked from '../assets/img/checked.svg'

const Sheme = () => {
  return (
   <section class="sheme">
      <h2 class="sheme__title">Схема работы с клиентами</h2>
      <div class="sheme__subtitle">
         <div class="top">
            <div class="top__garant-block">
               <div class="img__container">
                  <img src={calc} alt="calc"/>
               </div>
               <h4>Гарантия</h4>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
               <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 2V51C2 51.5523 2.44772 52 3 52H51" stroke="#312EE9" stroke-width="4" stroke-linecap="round"/>
                  <path d="M0 5C0 7.76142 2.23858 10 5 10C7.76142 10 10 7.76142 10 5C10 2.23858 7.76142 0 5 0C2.23858 0 0 2.23858 0 5Z" fill="#312EE9"/>
               </svg>
            </div>
            <div class="top__garant-block">
               <div class="img__container">
                  <img src={calc}  alt="calc"/>
               </div>
               <h4>Гарантия</h4>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
               <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 2V51C2 51.5523 2.44772 52 3 52H51" stroke="#312EE9" stroke-width="4" stroke-linecap="round"/>
                  <path d="M0 5C0 7.76142 2.23858 10 5 10C7.76142 10 10 7.76142 10 5C10 2.23858 7.76142 0 5 0C2.23858 0 0 2.23858 0 5Z" fill="#312EE9"/>
               </svg>
            </div>
            <div class="top__garant-block">
               <div class="img__container">
                  <img src={calc}  alt="calc"/>
               </div>
               <h4>Гарантия</h4>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
               <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 2V51C2 51.5523 2.44772 52 3 52H51" stroke="#312EE9" stroke-width="4" stroke-linecap="round"/>
                  <path d="M0 5C0 7.76142 2.23858 10 5 10C7.76142 10 10 7.76142 10 5C10 2.23858 7.76142 0 5 0C2.23858 0 0 2.23858 0 5Z" fill="#312EE9"/>
               </svg>
            </div>
         </div>
         <div class="middle">
            <div class="img__container">
               <img src={blueArrowRight} alt="arrow" />
            </div>
            <div class="line"></div>
            <div class="img__container">
               <img src={checked} alt="checked"/>
            </div>
         </div>
         <div class="bottom">
            <div class="bottom__garant-block">
               <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 52V3C2 2.44771 2.44772 2 3 2H51" stroke="#D0264F" stroke-width="4" stroke-linecap="round"/>
                  <path d="M0 5C0 2.23858 2.23858 0 5 0C7.76142 0 10 2.23858 10 5C10 7.76142 7.76142 10 5 10C2.23858 10 0 7.76142 0 5Z" fill="#D0264F"/>
               </svg>
               <h4>Гарантия</h4>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
               <div class="img__container">
                  <img src={calc}  alt="calc"/>
               </div>
            </div>
            <div class="bottom__garant-block">
               <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 52V3C2 2.44771 2.44772 2 3 2H51" stroke="#D0264F" stroke-width="4" stroke-linecap="round"/>
                  <path d="M0 5C0 2.23858 2.23858 0 5 0C7.76142 0 10 2.23858 10 5C10 7.76142 7.76142 10 5 10C2.23858 10 0 7.76142 0 5Z" fill="#D0264F"/>
               </svg>
               <h4>Гарантия</h4>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
               <div class="img__container">
                  <img src={calc}  alt="calc"/>
               </div>
            </div>
         </div>
      </div>
   </section>
  )
}

export default Sheme