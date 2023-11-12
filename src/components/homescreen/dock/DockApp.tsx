import { useState } from 'react'

import useWindowManager from '@/stores/window_manager-store'

import { AppIcon } from '@/constants/apps'
import { cn } from '@/utils/styles'

import { App, ManageAppAction } from '@/types/apps'

interface DockAppProps {
  app: App
  index: number
  hoverIndex: number | null
  setHoverIndex: (index: number | null) => void
}

const DockApp = ({ app, index, hoverIndex, setHoverIndex }: DockAppProps) => {
  const [isHovering, setIsHovering] = useState(false)
  const { isAppOpen, manageApp, setFocusWindow } = useWindowManager()

  const onAppClick = () => {
    manageApp(app, ManageAppAction.OPEN)
    setFocusWindow(app)
  }

  const onAppHover = () => {
    setIsHovering(true)
    setHoverIndex(index)
  }

  const onAppLeave = () => {
    setIsHovering(false)
    setHoverIndex(null)
  }

  const hoverClasses = () => {
    if (hoverIndex === null) return
    const position = Math.abs(hoverIndex - index)
    if (position === 0) return 'my-2.5 ml-4 scale-150'
    if (position === 1) return 'my-1.5 ml-2 scale-125'
    if (position === 2) return 'my-0.5 ml-1 scale-110'
    return
  }

  return (
    <div
      className={cn(
        'relative',
        index + 1 === Object.keys(App).length &&
          'border-t border-white/20 pt-1',
      )}
    >
      <img
        alt={app}
        src={AppIcon[app]}
        className={cn(
          'h-11 w-11 shrink-0 cursor-pointer transition-all active:opacity-40 active:grayscale',
          hoverClasses(),
        )}
        onMouseEnter={onAppHover}
        onMouseLeave={onAppLeave}
        onClick={onAppClick}
      />
      {isAppOpen(app) && (
        <span className='absolute left-[-4px] top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-white/80' />
      )}
      {isHovering && (
        <span className='absolute left-[5.5em] top-1/2 -translate-y-1/2 rounded border border-black/40 text-[13px]'>
          <span className='flex rounded border border-white/10 bg-neutral-700/90 px-2 py-0.5 backdrop-blur-2xl'>
            {app}
          </span>
        </span>
      )}
    </div>
  )
}

export default DockApp
