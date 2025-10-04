import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: 'icon' | 'sm' | 'md' | 'lg'
  variant?: 'ghost' | 'outline' | 'default'
}

const join = (...parts: Array<string | false | undefined>) => parts.filter(Boolean).join(' ')

export const Button: React.FC<ButtonProps> = ({ children, className = '', size = 'md', variant = 'default', ...rest }) => {
  const sizeClass =
    size === 'icon'
      ? 'p-2 rounded-full'
      : size === 'sm'
      ? 'px-3 py-1 text-sm rounded-md'
      : size === 'lg'
      ? 'px-6 py-3 rounded-full text-lg'
      : 'px-4 py-2 rounded-md'

  const variantClass =
    variant === 'ghost'
      ? 'bg-transparent text-gray-700 hover:bg-gray-100'
      : variant === 'outline'
      ? 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
      : 'bg-orange-500 text-white hover:bg-orange-600'

  const base = 'inline-flex items-center justify-center gap-2 font-medium transition-colors'

  return (
    <button className={join(base, sizeClass, variantClass, className)} {...rest}>
      {children}
    </button>
  )
}

export default Button
