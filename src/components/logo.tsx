import { cn } from '../lib/utils'

// Custom AI Logo Component
const HealthScopeLogo = ({ className }: { className?: string }) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('h-8 w-8', className)}
  >
    {/* Brain/Neural Network Background */}
    <circle cx="16" cy="16" r="14" fill="url(#brainGradient)" />
    
    {/* Neural Network Nodes */}
    <circle cx="12" cy="10" r="1.5" fill="white" opacity="0.9" />
    <circle cx="20" cy="10" r="1.5" fill="white" opacity="0.9" />
    <circle cx="16" cy="16" r="1.5" fill="white" opacity="0.9" />
    <circle cx="10" cy="22" r="1.5" fill="white" opacity="0.9" />
    <circle cx="22" cy="22" r="1.5" fill="white" opacity="0.9" />
    
    {/* Neural Network Connections */}
    <path
      d="M12 10L16 16L20 10"
      stroke="white"
      strokeWidth="1"
      opacity="0.7"
    />
    <path
      d="M16 16L10 22L22 22"
      stroke="white"
      strokeWidth="1"
      opacity="0.7"
    />
    <path
      d="M12 10L10 22"
      stroke="white"
      strokeWidth="1"
      opacity="0.5"
    />
    <path
      d="M20 10L22 22"
      stroke="white"
      strokeWidth="1"
      opacity="0.5"
    />
    
    {/* AI Pulse Effect */}
    <circle cx="16" cy="16" r="8" stroke="white" strokeWidth="0.5" opacity="0.3">
      <animate
        attributeName="r"
        values="8;12;8"
        dur="2s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        values="0.3;0.1;0.3"
        dur="2s"
        repeatCount="indefinite"
      />
    </circle>
    
    {/* Gradients */}
    <defs>
      <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="50%" stopColor="#8B5CF6" />
        <stop offset="100%" stopColor="#06B6D4" />
      </linearGradient>
    </defs>
  </svg>
);

export const Logo = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
    return (
        <div className={cn('flex items-center gap-3', className)}>
            <HealthScopeLogo />
            <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground">
                    HealthScope
                </span>
                <span className="text-xs font-medium text-primary -mt-1">
                    AI
                </span>
            </div>
        </div>
    )
}

export const LogoIcon = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
    return <HealthScopeLogo className={cn('size-6', className)} />
}

export const LogoStroke = ({ className }: { className?: string }) => {
    return <HealthScopeLogo className={cn('size-7', className)} />
}
