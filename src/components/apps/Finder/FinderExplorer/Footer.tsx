import { useContext } from 'react'

import { CurrentAppContext } from '@/components/homescreen/windowManager/AppWindow'

import useFinderStore from '@/stores/finder-store'
import useWindowManager from '@/stores/window_manager-store'

import { cn } from '@/utils/styles'

import Breadcrumbs from './Footer/Breadcrumbs'

const Footer = () => {
  const { isAppFocused } = useWindowManager()
  const currentApp = useContext(CurrentAppContext)
  const { route } = useFinderStore()
  return (
    <footer>
      <Breadcrumbs />
      <div
        className={cn(
          'row-span-1 flex items-center justify-center gap-1 self-end rounded-br-lg border-t border-black bg-neutral-800 px-4 py-1 text-center text-xs',
          isAppFocused(currentApp) && 'bg-neutral-700/60',
        )}
      >
        <span className='opacity-40'>{Object.keys(route).length} items,</span>
        <span className='opacity-40'>655,55 GB available</span>
      </div>
    </footer>
  )
}

export default Footer
