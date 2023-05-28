import React from 'react'

const Input = ({placeholder, style, onChange, value}) => {
  return (
   <div className="input-block">
      <input type="text" placeholder={placeholder} style={style}
      value={value} onChange={(e) => onChange(e)}/>
   </div>
  )
}

export default Input