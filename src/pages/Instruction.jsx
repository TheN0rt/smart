import React from 'react'
import Header from '../components/Header'
import InstructionBlock from '../components/InstructionBlock'

import playVideo from '../assets/img/instructionPage/playVideo.svg'
import Modal from '../components/Modal'
import ModalCallElement from '../components/ModalCallElement'

const systemArr1 = [
  'ИНСТРУКЦИЯ ДЛЯ АНТЕНН СЕРИИ HYBRID (HUAWEI)',
  'ИНСТРУКЦИЯ ДЛЯ АНТЕНН СЕРИИ DUO (ZTE)',
  'ИНСТРУКЦИЯ ДЛЯ АНТЕНН СЕРИИ HYBRID (ZTE)',
  'ИНСТРУКЦИЯ ДЛЯ АНТЕНН СЕРИИ UNO',
  'ИНСТРУКЦИЯ ДЛЯ АНТЕНН СЕРИИ DUO (HUAWEI)',
]

const systemArr2 = [
  'ИНСТРУКЦИЯ ДЛЯ РАДИОВЫКЛЮЧАТЕЛЕЙ СЕРИИ LE-E/LE-L/LE-A/SN/UNI/DST',
  'ИНСТРУКЦИЯ СЕРВЕРА ДЛЯ УМРАВЛЕНИЯ УМНЫМ ДОМОМ GATEWAY',
  'ИНСТРУКЦИЯ ДЛЯ РАДИОВЫКЛЮЧАТЕЛЕЙ СЕРИИ SNART POWER/SMART CHECKER/SMART WATER',
  'ИНСТРУКЦИЯ ДЛЯ ДАТЧИКА ТЕМПЕРАТУРЫ SMART AIR',
  'ИНСТРУКЦИЯ ДЛЯ БЛОКА РАДИОРЕЛЕ RELAY-1/2',
  'ИНСТРУКЦИЯ ДЛЯ БЛОКА РАДИОРЕЛЕ RELAY-DRIVE/12V',
  'ИНСТРУКЦИЯ ДЛЯ БЛОКА РАДИОРЕЛЕ RELAY-4D',
  'ИНСТРУКЦИЯ ДЛЯ БЛОКА РАДИОРЕЛЕ RELAY-DRIVE',
  'ИНСТРУКЦИЯ ДЛЯ БЛОКА РАДИОРЕЛЕ RELAY-4M',
  'ИНСТРУКЦИЯ ДЛЯ БЛОКА РАДИОРЕЛЕ RELAY-F1/2',
  'ИНСТРУКЦИЯ ДЛЯ БЛОКА РАДИОРЕЛЕ RELAY-4S',
  'ИНСТРУКЦИЯ ДЛЯ ДАТЧИКА ДВИЖЕНИЯ LE-E/LE-L/LE-A/SN/UNI/DST',
  'ИНСТРУКЦИЯ ДЛЯ БЛОКА РАДИОРЕЛЕ RELAY-LED',
  'ИНСТРУКЦИЯ ДЛЯ БЛОКА РАДИОРЕЛЕ DIM',
  'ИНСТРУКЦИЯ ДЛЯ РАДИОУПРАВЛЯЕМОЙ РОЗЕТКИ SOCKET'
]

const Instruction = ({isActive, setIsActive}) => {
  return (
    <div className="instr">
      <Header setIsActive={setIsActive}/>
      <div className="instr__wrapper">
        <h1 className="instr__title">Инструкции</h1>
        <div className="instr__container">
          <InstructionBlock data={systemArr1}/>
          <InstructionBlock data={systemArr2}/>
          <div className="instr-block">
            <h2>Видео - инструкции</h2>
            <div className="instr-flex">
              <div className="instr__item-flex">
                <h5>НАСТРОЙКА БЛОКА РАДИОРЕЛЕ RELAY-F1</h5>
                <div className="video-block">
                  <img src={playVideo} alt="play" />
                </div>
              </div>
              <div className="instr__item-flex">
                <h5>НАСТРОЙКА БЛОКА РАДИОРЕЛЕ RELAY-F2</h5>
                <div className="video-block">
                  <img src={playVideo} alt="play" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal isActive={isActive} setIsActive={setIsActive}>
        <Header setIsActive={() => {}}/>
        <ModalCallElement setIsActive={setIsActive}/>
      </Modal>
    </div>

  )
}

export default Instruction