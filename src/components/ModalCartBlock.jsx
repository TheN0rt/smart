import React from 'react'

const ModalCartBlock = ({data, onCartHandler}) => {
  return (
   <div className="modalCalc__container">
      <h4>Готовность объекта</h4>
      <div className="modalCalc__cart-block">
         {
            data.map((e,i) => (
               <div className="cart" key={i} 
               onClick={() => onCartHandler(e.title)}>
                  <img src={e.imageUrl} alt='img' />
                  <p>{e.title}</p>
               </div>
            ))
         }
      </div>
   </div>
  )
}

export default ModalCartBlock