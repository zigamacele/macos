import { useContext } from 'react'

import { CurrentAppContext } from '@/components/homescreen/windowManager/AppWindow'
import Icon from '@/components/Icon'

import useWindowManager from '@/stores/window_manager-store'

import { cn } from '@/utils/styles'

import CurrentDirectory from './CurrentDirectory'
import DirectoryNavigation from './DirectoryNavigation'

const Toolbar = () => {
  const { isAppFocused } = useWindowManager()
  const currentApp = useContext(CurrentAppContext)
  return (
    <header
      className={cn(
        'row-span-1 flex h-14 items-center justify-between rounded-tr-lg border-b border-black bg-neutral-800 px-4',
        isAppFocused(currentApp) && 'bg-neutral-700/60',
      )}
    >
      <div className='flex items-center gap-4'>
        <DirectoryNavigation />
        <CurrentDirectory />
      </div>
      <div className='flex gap-3'>
        <Icon icon='DoubleArrowRightIcon' className='h-5 w-5 opacity-60' />
        <Icon icon='MagnifyingGlassIcon' className='h-5 w-5 opacity-60' />
      </div>
    </header>
  )
}

export default Toolbar
