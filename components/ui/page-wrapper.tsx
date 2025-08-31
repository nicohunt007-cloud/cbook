import type { ReactNode } from "react"

interface PageWrapperProps {
  children: ReactNode
  className?: string
}

export function PageWrapper({ children, className = "" }: PageWrapperProps) {
  return <div className={`min-h-screen animated-bg ${className}`}>{children}</div>
}
