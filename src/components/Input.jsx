import React from 'react'

const Input = ({placeholder, style, onChange, value, onBlur}) => {
  return (
   <div className="input-block">
      <input type="text" placeholder={placeholder} style={style}
      value={value} onChange={(e) => onChange(e)} onBlur={() => onBlur()}/>
   </div>
  )
}

export default Input