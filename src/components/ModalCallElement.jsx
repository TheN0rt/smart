import React, { useState } from 'react'

import close from '../assets/img/modal/close.svg'
import Form from './Form'
import Input from './Input'
import useInput from '../customHooks/useInput'
import { putCall } from '../db/database'

const ModalCallElement = ({setIsActive}) => {

   const phone = useInput('', {
      isEmpty: true,
      phone: true
   })

   const name = useInput('', {
      isEmpty: true,
      name: true
   })

   const comment = useInput('')

   const onSubmit = (data) => {
      putCall(data)
      phone.value = ''
      name.value = ''
      comment.value = ''
      console.log(phone.value, name.value, comment.value)
      setIsActive(false)
   }

  return (
    <div className='modalCall__wrapper'>
      <div className="modalCall__title">
         <h1>Мы свяжемся с вами</h1>
         <img src={close} alt="close" onClick={() => setIsActive(false)}/>
      </div>
      <div className="modalCall__container">
         <div className="info">
            <div className="time">
               <p>ЧАСЫ РАБОТЫ:</p>
               <p>ПН-ПТ 9:00-21:00</p>
            </div>
            <div className="number-block">
               <p>+ 7 (123) 456-78-90</p>
               <p>+ 7 (098) 765-43-21</p>
            </div>
         </div>
        <Form nameValid={name.inputValid} phoneValid={phone.inputValid}
        onSubmit={(e) => {
         e.preventDefault()
         onSubmit({
            name: name.value,
            phone: phone.value,
            comment: comment.value,
            callId: Math.random().toString(36).substring(2, 9)
         })
        }}>
            <Input placeholder='Ваше имя' value={name.value} onChange={name.onChange} onBlur={name.onBlur}/>
            <Input placeholder='Телефон' value={phone.value} onChange={phone.onChange} onBlur={phone.onBlur}/>
            <Input placeholder='Комментарии' value={comment.value} onChange={comment.onChange}/>
        </Form>
      </div>
      <div className="footer">
         <button className='back' onClick={() => setIsActive(false)}>
            Назад
         </button>
         <p>Прогресс 4/4</p>
      </div>
    </div>
  )
}

export default ModalCallElement