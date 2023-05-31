import React, { useState } from 'react'
import HeaderProject from '../components/HeaderProject'
import Header from '../components/Header'

import project1 from '../assets/img/projectsPage/project1.png'
import project2 from '../assets/img/projectsPage/project2.png'
import project3 from '../assets/img/projectsPage/project3.png'
import project4 from '../assets/img/projectsPage/project4.png'
import project5 from '../assets/img/projectsPage/project5.png'
import project6 from '../assets/img/projectsPage/project6.png'
import project7 from '../assets/img/projectsPage/project7.png'
import project8 from '../assets/img/projectsPage/project8.png'
import project9 from '../assets/img/projectsPage/project9.png'
import project10 from '../assets/img/projectsPage/project10.png'
import project11 from '../assets/img/projectsPage/project11.png'
import Footer from '../components/Footer'
import Modal from '../components/Modal'
import ModalCallElement from '../components/ModalCallElement'
import ModalCalcElement from '../components/ModalCalcElement'

const project = [
  {
    imgUrl: project1,
    title: 'Квартира в ЖК «Кутузовский LIFE»',
    subtitle: 'Четырехкомнатная квартира на Западе Москвы для молодой семьи.'
  },
  {
    imgUrl: project2,
    title: 'Квартира в ЖК «Neva Towers»',
    subtitle: 'Небольшая трехкомнатная квартира в элитном жилом комплексе'
  },
  {
    imgUrl: project3,
    title: 'Загородный дом в клубном поселке «АртЭко»',
    subtitle: 'Большой загородный дом дла всей семьи'
  },
  {
    imgUrl: project4,
    title: 'Квартира в «Сталинке» на Ленинградском пр-те',
    subtitle: 'Двухкомнатная квартира с дизайном в классическом стиле'
  },
  {
    imgUrl: project5,
    title: 'Квартира в ЖК «ВТБ Арена Парк»',
    subtitle: 'Большая просторная квартира у метро Динамо'
  },
  {
    imgUrl: project6,
    title: 'Квартира для большой семьи в ЖК «Лица»',
    subtitle: 'Две совмещенные квартиры для большой семьи из семи человек'
  },
  {
    imgUrl: project7,
    title: 'Евродвушка в ЖК «Среда»',
    subtitle: 'Небольшая квартира в Москве для молодой семьи'
  },
  {
    imgUrl: project8,
    title: 'Трехкомнатная квартира в ЖК «Юнион-Парк»',
    subtitle: 'Квартира в жилищном комплексе премиум-класса на западе столицы'
  },
  {
    imgUrl: project9,
    title: 'Двухуровневая квартира в ЖК «Дубровская слобода»',
    subtitle: 'Просторная квартира для большой семьи'
  },
  {
    imgUrl: project10,
    title: 'Квартира в клубном доме «Город Яхт»',
    subtitle: 'Просторная квартира для большой семьи'
  },
  {
    imgUrl: project11,
    title: 'Квартира Ксении Секиро в Петербурге',
    subtitle: 'Видовая квартира с собственной террасой с видом на реку'
  },
]

const Projects = ({isActive, setIsActive, isActiveCalc, setIsActiveCalc}) => {
  const [completed, setCompleted] = useState(1)
  return (
    <div className='projects__wrapper'>
      <Header setIsActive={setIsActive}>
        <HeaderProject/>
      </Header>
      <div className="projects__container">
        <h2>Выполненные проекты</h2>
        <div className="projects-grid">
          {
            project.map((e, i) => (
              <div className="project__item" key={i}>
                <img src={e.imgUrl} alt="img" />
                <div className="project__item-text">
                  <h5>{e.title}</h5>
                  <p>{e.subtitle}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <Footer setIsActive={setIsActive} setIsActiveCalc={setIsActiveCalc}/>
      <Modal isActive={isActive} setIsActive={setIsActive}>
        <Header setIsActive={() => {}} burgerColor={'black'}/>
        <ModalCallElement setIsActive={setIsActive}/>
      </Modal>
      <Modal isActive={isActiveCalc} setIsActive={setIsActiveCalc} className='black'>
        <Header setIsActive={() => {}} className='black'/>
        <ModalCalcElement completed={completed} setIsActiveCalc={setIsActiveCalc} setCompleted={setCompleted}/>
      </Modal>
    </div>
  )
}

export default Projects