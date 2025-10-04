import React from 'react'

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ className = '', ...rest }) => (
  <input className={`border rounded px-3 py-2 ${className}`} {...rest} />
)

export default Input
