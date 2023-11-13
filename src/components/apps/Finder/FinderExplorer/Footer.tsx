import { useContext } from 'react'

import { CurrentAppContext } from '@/components/homescreen/windowManager/AppWindow'

import useWindowManager from '@/stores/window_manager-store'

import { cn } from '@/utils/styles'

const Footer = () => {
  const { isAppFocused } = useWindowManager()
  const currentApp = useContext(CurrentAppContext)
  return (
    <footer
      className={cn(
        'row-span-1 flex h-6 items-center justify-center gap-1 self-end rounded-br-lg border-b border-black bg-neutral-800 px-4 text-center text-xs',
        isAppFocused(currentApp) && 'bg-neutral-700/60',
      )}
    >
      <span className='opacity-60'>? items,</span>
      <span className='opacity-60'>655,55 GB available</span>
    </footer>
  )
}

export default Footer
