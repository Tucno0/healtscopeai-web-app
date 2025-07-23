import { cn } from '../lib/utils'
import Image from 'next/image'
import { useTheme } from 'next-themes'

// LIRYAL Logo Component using theme-appropriate PNG images
const LiryalLogo = ({ className }: { className?: string }) => {
  const { theme } = useTheme()
  
  // Use white logo for dark theme, black logo for light theme
  const logoSrc = theme === 'dark' ? '/icon-black.png' : '/icon-white.png'
  
  return (
    <Image
      src={logoSrc}
      alt="LIRYAL AI Logo"
      width={32}
      height={32}
      className={cn('h-8 w-8', className)}
    />
  )
};

export const Logo = ({ className }: { className?: string }) => {
    return (
        <div className={cn('flex items-center gap-3', className)}>
            <LiryalLogo />
            <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground">
                    LIRYAL
                </span>
              
            </div>
        </div>
    )
}

export const LogoIcon = ({ className }: { className?: string }) => {
    return <LiryalLogo className={cn('size-6', className)} />
}

export const LogoStroke = ({ className }: { className?: string }) => {
    return <LiryalLogo className={cn('size-7', className)} />
}
