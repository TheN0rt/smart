import React, { useState } from 'react'
import Carousel from './Carousel'
import useInput from '../customHooks/useInput'
import { putCalculation } from '../db/database'

import close from '../assets/img/modal/close.svg'
import arrowRight from '../assets/img/modal/buttonArrowRight.svg'

import breaks from '../assets/img/modal/breaks.svg'
import paint from '../assets/img/modal/paint.svg'
import done from '../assets/img/modal/done.svg'

import appartment from '../assets/img/modal/appartment.svg'
import house from '../assets/img/modal/house.svg'
import ofice from '../assets/img/modal/ofice.svg'
import ModalCartBlock from './ModalCartBlock'

import modalArrowRight from '../assets/img/modal/modalArrowRight.svg'
import modalArrowLeft from '../assets/img/modal/modalArrowLeft.svg'

import modalLamp from '../assets/img/modal/carouselBlock/lamp.svg'
import modalLampWhite from '../assets/img/modal/carouselBlock/lampWhite.svg'
import temp from '../assets/img/modal/carouselBlock/temp.svg'
import tempWhite from '../assets/img/modal/carouselBlock/tempWhite.svg'
import media from '../assets/img/modal/carouselBlock/media.svg'
import mediaWhite from '../assets/img/modal/carouselBlock/mediaWhite.svg'
import security from '../assets/img/modal/carouselBlock/security.svg'
import securityWhite from '../assets/img/modal/carouselBlock/securityWhite.svg'
import camera from '../assets/img/modal/carouselBlock/camera.svg'
import cameraWhite from '../assets/img/modal/carouselBlock/cameraWhite.svg'
import wifi from '../assets/img/modal/carouselBlock/wifi.svg'
import wifiWhite from '../assets/img/modal/carouselBlock/wifiWhite.svg'
import displays from '../assets/img/modal/carouselBlock/displays.svg'
import displaysWhite from '../assets/img/modal/carouselBlock/displaysWhite.svg'
import management from '../assets/img/modal/carouselBlock/management.svg'
import managementWhite from '../assets/img/modal/carouselBlock/managementWhite.svg'
import wireless from '../assets/img/modal/carouselBlock/wireless.svg'
import wirelessWhite from '../assets/img/modal/carouselBlock/wirelessWhite.svg'
import Form from './Form'
import Input from './Input'
import { useResize } from '../customHooks/useResize'

const readyArr = [
   {
      imageUrl: breaks,
      title: 'Идет строительство',
   },
   {
      imageUrl: paint,
      title: 'Стадия отделки',
   },
   {
      imageUrl: done,
      title: 'Готовый',
   },
]

const wantInArr = [
   {
      imageUrl: appartment,
      title: 'Квартиру',
   },
   {
      imageUrl: house,
      title: 'Коттедж',
   },
   {
      imageUrl: ofice,
      title: 'Офис',
   },
]

const carouselContext = [
   // [
      {
         imageUrl: modalLamp,
         imageWhiteUrl: modalLampWhite,
         title: 'Управление светом и выключателями'
      },
      {
         imageUrl: temp,
         imageWhiteUrl: tempWhite,
         title: 'Управление климатом'
      },
      {
         imageUrl: media,
         imageWhiteUrl: mediaWhite,
         title: 'Управление музыкой и мультимедиа'
      },
      {
         imageUrl: security,
         imageWhiteUrl: securityWhite,
         title: 'Система безопасности'
      },
   // ],
   // [
      {
         imageUrl: camera,
         imageWhiteUrl: cameraWhite,
         title: 'Система видеонаблюдения'
      },
      {
         imageUrl: wifi,
         imageWhiteUrl: wifiWhite,
         title: 'Подключения Wi-Fi'
      },
      {
         imageUrl: displays,
         imageWhiteUrl: displaysWhite,
         title: 'Система управления устройствами'
      },
      {
         imageUrl: management,
         imageWhiteUrl: managementWhite,
         title: 'Система управления умным домом'
      },
   // ],
   // [
      {
         imageUrl: wireless,
         imageWhiteUrl: wirelessWhite,
         title: 'Установка беспроводной системы управления домом'
      },
   // ]
]

const MAX_PAGES = 3


const ModalCalcElement = ({setIsActiveCalc, completed, setCompleted, setIsActive}) => {

   const screenWidth = useResize()

   const [userData, setUserData] = useState({
      calcId: Math.random().toString(36).substring(2, 9),
      placement: '',
      stageReadyPlacement: '',
      additional: [],
   })

   const [offset, setOffset] = useState(0)

   const phone = useInput('', {
      isEmpty: true,
      phone: true
   })

   const name = useInput('', {
      isEmpty: true,
      name: true
   })

   const getContainerWidth = () => {
      let containerWidth;
      
      if(screenWidth.isScreenXxsm) containerWidth = 250+100
      if(screenWidth.isScreenXsm) containerWidth = 380+100
      if(screenWidth.isScreenSm) containerWidth = 480+130
      if(screenWidth.isScreenMd) containerWidth = 654+100
      if(screenWidth.isScreenLg) containerWidth = 991+100
      if(screenWidth.isScreenXl) containerWidth = 991+100
      if(screenWidth.isScreenXxl) containerWidth = 317*4+110

      return containerWidth
   }

   const getCarouselLength = () => {
      let size;
      if(screenWidth.isScreenXxsm) size = 2
      if(screenWidth.isScreenXsm) size = 3
      if(screenWidth.isScreenSm) size = 4
      if(screenWidth.isScreenMd) size = 2
      if(screenWidth.isScreenLg) size = 3
      if(screenWidth.isScreenXl) size = 3
      if(screenWidth.isScreenXxl) size = 4

      console.log('size ', size)
      console.log('width', screenWidth)
      return size
   }

   const getCarouselSubarray = (arr) => {
      let size = getCarouselLength(); //размер подмассива
      let subarray = []; //массив в который будет выведен результат.
      for (let i = 0; i <Math.ceil(arr.length/size); i++){
         subarray[i] = arr.slice((i*size), (i*size) + size);
      }
      return subarray
   }

   const handleLeftArrowClick = () => {
      const CONTAINER_WIDTH = getContainerWidth()
      setOffset((currentOffset) => {
         const newOffset = currentOffset + CONTAINER_WIDTH

         // console.log(newOffset)
         return Math.min(newOffset, 0)
      })
   }

   const handleRightArrowClick = () => {
      const CONTAINER_WIDTH = getContainerWidth()
      const size = getCarouselLength()
      setOffset((currentOffset) => {
         const newOffset = currentOffset - CONTAINER_WIDTH 
         const maxOffset =  size === 2 ? -(CONTAINER_WIDTH * (MAX_PAGES+1)) :  -(CONTAINER_WIDTH * (MAX_PAGES-1))

         // console.log(newOffset, maxOffset)
         return Math.max(newOffset, maxOffset)
      })
   }

   const addPlacement = (placement) => {
      setUserData({...userData, placement: placement})
      setCompleted(completed+1)
   }

   const addStageReady = (stageReadyPlacement) => {
      setUserData({...userData, stageReadyPlacement: stageReadyPlacement})
      setCompleted(completed+1)
   }
   const addAdditional = (addit) => {
      userData.additional.includes(addit) ? 
      setUserData({...userData, 
         additional: [...userData.additional.filter(e => e !== addit)]
      })
      : setUserData({...userData, additional: [...userData.additional, addit]})
      console.log(userData)
   }

   const progressBarStyles = {
      height: '2px',
      width: `${completed * 25}%`,
      backgroundColor: '#ffffff'
   }

   const onSubmit = (data) => {
      putCalculation(data)
      setUserData({
         calcId: Math.random().toString(36).substring(2, 9),
         placement: '',
         stageReadyPlacement: '',
         additional: [],
      })
      name.value = ''
      phone.value = ''
      setIsActive(false)
      setCompleted(1)
   }

   const getModalElement = (completed) => {
      let element;

      switch(completed){
         case 1: 
            return element = <ModalCartBlock data={wantInArr} setCompleted={setCompleted} completed={completed} onCartHandler={addPlacement} />
         case 2: 
            return element = <ModalCartBlock data={readyArr} setCompleted={setCompleted} completed={completed} onCartHandler={addStageReady} />
         case 3:
            return element = <Carousel data={getCarouselSubarray(carouselContext)} offset={offset}
            addAdditional={addAdditional} additionalArr={userData.additional}/>
         case 4:
            return element = <Form styleForm={{margin: '0 auto'}}
            styleText={{color: '#FFFFFF'}} 
            styleSpan={{color: 'rgba(255, 255, 255, 0.5)'}}
            nameValid={name.inputValid} phoneValid={phone.inputValid}
            onSubmit={(e) => {
               e.preventDefault()
               onSubmit({
                  name: name.value,
                  phone: phone.value,
                  ...userData,
               })
               }}>
               <Input placeholder='Ваше имя' onChange={name.onChange} value={name.value} onBlur={name.onBlur} style={{color: '#FFFFFF'}}/>
               <span className={ name.isDirty ? 'err active' : 'err'}>
                  {
                     name.isEmpty ? 'Поле не может быть пустым! ' : ''
                  }
                  {
                     name.nameErr ? 
                     'Поле испульзует только кириллицу или латиницу! ' : ''
                  }
               </span>
               <Input placeholder='Телефон' onChange={phone.onChange} value={phone.value} onBlur={phone.onBlur} style={{color: '#FFFFFF'}}/>
               <span className={ phone.isDirty ? 'err active' : 'err'}>
                  {
                     phone.isEmpty ? 'Поле не может быть пустым! ' : ''
                  }
                  {
                     phone.phoneErr ? 
                     'Некорректно задан номер! ' : ''
                  }
               </span>
            </Form>
         default:
            break;
      }
      return element
   }

   const modalElement = getModalElement(completed)

  return (
    <div className='modalCalc__wrapper'>
      <div className="title">
         <h1>РАСЧЕТ СТОИМОСТИ УМНОГО ДОМА</h1>
         <img src={close} alt="close" 
            onClick={() => setIsActiveCalc(false)}/>
      </div>
      {modalElement}
      <div className="modalCalc__progress">
         <div className="modalCalc__progress-sector">
            <div className="btn-block">
               {completed > 1 ? 
                  <button className='previous'
                  onClick={() => setCompleted(completed - 1)}>
                     Назад
                  </button>
                  :
                  ''
               }
               {
                  completed === 3 ? 
                  <button className="next" onClick={() => setCompleted(completed + 1)}>
                     <span>Вперед</span>
                     <img src={arrowRight} alt="next" />
                  </button>
                  :
                  ''
               }
            </div>
            {
               completed === 3 ?
               <div className="slider-block">
                  <div className="slider__btn" 
                  onClick={() => handleLeftArrowClick()}>
                     <img src={modalArrowLeft} alt="left" />
                  </div>
                  <div className="slider__btn"
                  onClick={() => handleRightArrowClick()}>
                     <img src={modalArrowRight} alt="right" />
                  </div>
               </div>
               : ''
            }
         </div>
         <div className="modalCalc__progress-block">
            <p>Прогресс {completed}/4</p>
            <div className="progress__bar-block">
               <div className="progress__bar" style={progressBarStyles}></div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default ModalCalcElement