import React from 'react'
import logo from '../assets/img/logo.svg'
import aboutSlider from '../assets/img/aboutSlider.png'
import arrowLeft from '../assets/img/arrowLeft.svg'
import arrowRight from '../assets/img/arrowRight.svg'

const About = () => {
  return (
   <section class="about">
      <div class="about__left">
         <h2>О компании</h2>
         <div class="subtitle">
            <img src={logo} alt="Logo"/>
            <div class="proc">
               <div class="proc__top">
                  <div class="cart">Инсталяция</div>
                  <div class="cart">Проект</div>
                  <div class="cart">Оборудование</div>
               </div>
               <div class="proc__bottom">
                  <div class="cart">Приложение</div>
                  <div class="cart">Поддержка</div>
                  <div class="cart">Гарантия</div>
               </div>
            </div>
         </div>
      </div>
      <div class="about__right">
         <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in faucibus at faucibus. In ultrices id tincidunt in nulla orci volutpat leo. Porta mattis aliquam ac mauris, turpis condimentum ut elit. Suscipit non tellus sodales auctor volutpat non. Amet dictumst eget ac, risus vulputate elit consectetur lacinia bibendum. Non elementum, ac a sit eget eget sit donec. Netus odio blandit lectus amet, a tellus. Diam aenean venenatis, amet sed ut aenean arcu ac.
         </p>
         <div class="slider">
            <img src={aboutSlider} alt="slider"/>
            <div class="arrow__left-block">
               <img src={arrowLeft} alt="arrowLeft"/>
            </div>
            <div class="arrow__right-block">
               <img src={arrowRight} alt="arrowRight"/>
            </div>
         </div>
      </div>
   </section>
  )
}

export default About