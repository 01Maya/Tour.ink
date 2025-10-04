import React from 'react'

export const Tabs: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className = '', ...rest }) => (
  <div className={className} {...rest}>{children}</div>
)

export const TabsList: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className = '', ...rest }) => (
  <div className={`flex ${className}`} {...rest}>{children}</div>
)

export const TabsTrigger: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, className = '', ...rest }) => (
  <button className={className} {...rest}>{children}</button>
)

export const TabsContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className = '', ...rest }) => (
  <div className={className} {...rest}>{children}</div>
)

export default Tabs
