import React from 'react'
import file from '../assets/img/instructionPage/file.svg'

export const InstructionBlock = ({data}) => {
  return (
   <div className="instr-block">
      <h2>Системы усиления 3G/4G</h2>
      <div className="instr-grid">
      {
         data.map((e, i) => (
            <div className="instr__item" key={i}>
            <img src={file} alt="file" />
            <span>
               {e}
            </span>
            </div>
         ))
      }
      </div>
   </div>
  )
}

export default InstructionBlock