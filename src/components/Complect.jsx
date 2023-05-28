import React from 'react'
import shopIconWhite from '../assets/img/shopIconWhite.png'
import complectSlider from '../assets/img/complectSlider.png'
import arrowLeft from '../assets/img/arrowLeft.svg'
import arrowRight from '../assets/img/arrowRight.svg'

const Complect = () => {
  return (
   <section class="complect">
      <div class="complect__left">
         <h3>Название демонстрационного комплекта</h3>
         <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in faucibus at faucibus. In ultrices id tincidunt in nulla orci volutpat leo. Porta mattis aliquam ac mauris, turpis condimentum ut elit. Suscipit non tellus sodales auctor volutpat non. Amet dictumst eget ac, risus vulputate elit consectetur lacinia bibendum. Non elementum, ac a sit eget eget sit donec. Netus odio blandit lectus amet, a tellus. Diam aenean venenatis, amet sed ut aenean arcu ac.
         </p>
         <button class="complect__btn">
            <img src={shopIconWhite} alt="shop"/>
            <span>Заказать демоснтрацию</span>
         </button>
      </div>
      <div class="complect__right slider">
         <img src={complectSlider} alt="slider"/>
         <div class="arrow__left-block">
            <img src={arrowLeft} alt=""/>
         </div>
         <div class="arrow__right-block">
            <img src={arrowRight} alt=""/>
         </div>
      </div>
   </section>
  )
}

export default Complect