import React from 'react'

import play from '../assets/img/play.png'

const HeaderProject = () => {
  return (
    <div className="project">
      <h1>БОЛЕЕ 150 успешных проектов</h1>
      <p>Следующий проект может быть Вашим, начните с бесплатной консультации!</p>
      <button>
         <img src={play} alt="play" />
         <span>Бесплатная кансультация</span>
      </button>
    </div>
  )
}

export default HeaderProject