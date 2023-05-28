import React from 'react'

const Modal = ({children, isActive, setIsActive, className}) => {
  const childrenWithProps = React.Children.map(children, child => {
    // Checking isValidElement is the safe way and avoids a
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { setIsActive });
    }
    return child;
  });

  return (
    <div className={isActive ? 'modal active' : 'modal'} onClick={() => setIsActive(false)}>
      <div className={`modal__content ${className}`} 
        onClick={(e) => e.stopPropagation()}>
        {childrenWithProps}
      </div>
    </div>
  )
}

export default Modal