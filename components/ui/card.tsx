import React from 'react'

export const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className = '', ...rest }) => (
  <div className={`rounded-xl overflow-hidden bg-white shadow-sm ${className}`} {...rest}>
    {children}
  </div>
)

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className = '', ...rest }) => (
  <div className={`${className}`} {...rest}>
    {children}
  </div>
)

export default Card
