import React from 'react'

const SheetContext = React.createContext<{ onToggle?: () => void; open?: boolean }>({})

export const Sheet: React.FC<{
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children?: React.ReactNode
}> = ({ open = false, onOpenChange, children }) => {
  // children expected to include SheetTrigger and SheetContent in markup order
  const value = { onToggle: () => onOpenChange?.(!open), open }
  return (
    <SheetContext.Provider value={value}>
      <div>
        {open && <div className="sheet-backdrop" onClick={() => onOpenChange?.(false)} />}
        {children}
      </div>
    </SheetContext.Provider>
  )
}

export const SheetContent: React.FC<React.HTMLAttributes<HTMLDivElement> & { side?: 'left' | 'right' | 'top' | 'bottom' | string }> = ({ children, className = '', side, ...rest }) => {
  // Use context to determine whether to render the content (drawer) or not
  const ctx = React.useContext(SheetContext)
  if (!ctx.open) return null

  return (
    <div className={`p-4 ${className} ${side ? `sheet-side-${side}` : ''}`} {...rest}>
      {children}
    </div>
  )
}

export const SheetTrigger: React.FC<{ asChild?: boolean; children?: React.ReactNode }> = ({ children }) => {
  const ctx = React.useContext(SheetContext)
  if (React.isValidElement(children)) {
    const existingOnClick = (children.props as any).onClick as ((e?: any) => void) | undefined
    const handleClick = (e: any) => {
      existingOnClick?.(e)
      ctx.onToggle?.()
    }
    return React.cloneElement(children as React.ReactElement<any>, { onClick: handleClick } as React.DOMAttributes<any>)
  }

  return <>{children}</>
}

export default Sheet
