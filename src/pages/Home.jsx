import React, { useState } from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Advantages from '../components/Advantages'
import Complect from '../components/Complect'
import Garanties from '../components/Garanties'
import Opportunities from '../components/Opportunities'
import Sheme from '../components/Sheme'
import Statistics from '../components/Statistics'
import Footer from '../components/Footer'
import Smart from '../components/Smart'
import Modal from '../components/Modal'
import ModalCallElement from '../components/ModalCallElement'
import ModalCalcElement from '../components/ModalCalcElement'

const Home = ({isActive, setIsActive, isActiveCalc, setIsActiveCalc}) => {

  const [completed, setCompleted] = useState(1)

  return (
   <div class="container">
      <Header setIsActive={setIsActive}>
        <Smart setIsActive={setIsActiveCalc}/>
      </Header>
      <Garanties/>
      <Opportunities/>
      <About/>
      <Advantages/>
      <Complect/>
      <Sheme/>
      <Statistics/>
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

export default Home