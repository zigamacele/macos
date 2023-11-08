import { useState } from 'react'

import useWindowManager from '@/stores/window_manager-store'

import { AppIcon } from '@/constants/apps'

import { App } from '@/types/apps'

interface DockAppProps {
  app: App
}

const DockApp = ({ app }: DockAppProps) => {
  const [isHovering, setIsHovering] = useState(false)
  const { isAppOpen } = useWindowManager()
  return (
    <div className='relative'>
      <img
        src={AppIcon[app]}
        className='h-11 w-11'
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      />
      {isAppOpen(app) && (
        <span className='absolute left-[-4px] top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-white/80' />
      )}
      {isHovering && (
        <span className='absolute left-14 top-1/2 -translate-y-1/2 rounded border border-black/40 text-[13px]'>
          <span className='flex rounded border border-white/10 bg-neutral-700/90 px-2 py-0.5 backdrop-blur-2xl'>
            {app}
          </span>
        </span>
      )}
    </div>
  )
}

export default DockApp
