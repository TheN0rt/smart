import React from 'react'

import arrrowRight from '../assets/img/modal/buttonArrowRight.svg'

const Form = (
   {
      styleForm, 
      styleText, 
      styleSpan, 
      children, 
      nameValid, 
      phoneValid,
      onSubmit,
   }) => {
  return (
   <form action="submit" style={styleForm} onSubmit={onSubmit}>
      {children}
      <div className="submit-block">
         <p style={styleText}>
            Нажимая кнопку “Отправить”,
            <br />
            вы соглашаетесь 
            <span style={styleSpan}>с политикой обработки персональных данных</span>
         </p>
         <button disabled={!nameValid || !phoneValid} type='submit'>
            <span>Отправить</span>
            <img src={arrrowRight} alt="arrow" />
         </button>
      </div>
   </form>
  )
}

export default Form