import React from 'react'
import garantPrice from '../assets/img/garantPrice.png'
import garantQuality from '../assets/img/garantQuality.png'

const Garanties = () => {
  return (
   <section className="garanties">
      <div className="garanties-block">
         <img src={garantPrice} alt="priceImg"/>
         <h3 className="title">Самая низкая стоимость</h3>
         <p className="subtitle">
            Система умного дома под ключ по цене обычной электрики
         </p>
      </div>
      <div className="garanties-block">
         <img src={garantQuality} alt="qualityImg"/>
         <h3 className="title">7 лет работы без сбоев</h3>
         <p className="subtitle">
            Гарантия 5 лет от производителя, проверенная надежность
         </p>
      </div>
   </section>
  )
}

export default Garanties