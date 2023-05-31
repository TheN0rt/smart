import React from 'react'

const Carousel = ({data, offset, addAdditional, additionalArr}) => {
   console.log(data)

  return (
    <div className='carousel'>
      <h4>Что еще нужно ? <span>(Выберите один или несколько вариантов)</span></h4>
      <div className="carousel__container" >
         {
            data.map((arr, i) => (
               <div className="carousel__item-block" key={i} 
               style={{
                  transform: `translateX(${offset}px)`
               }}>
                  {
                     arr.map((e, i) => (
                        <div className="carousel__item" key={i} 
                        onClick={() => addAdditional(e.title)}
                        style={{
                           backgroundColor: additionalArr.includes(e.title) ? '#D0264F' : '#FFFFFF'
                        }}>
                           <img src={
                              additionalArr.includes(e.title) ? e.imageWhiteUrl 
                              : e.imageUrl
                           } alt="img" />
                           <p
                           style={{
                              color: additionalArr.includes(e.title) ? '#FFFFFF' : '#000000'
                           }}>
                              {e.title}
                           </p>
                        </div>
                     ))
                  }
               </div>
            ))
         }
      </div>
    </div>
  )
}

export default Carousel