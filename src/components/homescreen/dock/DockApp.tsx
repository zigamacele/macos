import { AppIcon } from '@/constants/apps'

import { App } from '@/types/apps'

interface DockAppProps {
  app: App
}

const DockApp = ({ app }: DockAppProps) => {
  return (
    <div className='relative'>
      <img src={AppIcon[app]} className='h-12 w-12' />
      <span className='absolute left-[-4px] top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-white/80' />
    </div>
  )
}

export default DockApp
