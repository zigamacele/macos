import { useContext } from 'react'

import { CurrentAppContext } from '@/components/homescreen/windowManager/AppWindow'
import Icon from '@/components/Icon'

import useWindowManager from '@/stores/window_manager-store'

import { cn } from '@/utils/styles'

const Tabs = () => {
  const { isAppFocused } = useWindowManager()
  const currentApp = useContext(CurrentAppContext)
  const appNotInFocus = !isAppFocused(currentApp)
  return (
    <section
      className={cn(
        'flex h-10 items-end rounded-t-lg bg-zinc-800 pl-24 text-[13px]',
        appNotInFocus && 'bg-chrome-surface',
      )}
    >
      <div
        className={cn(
          'flex h-8 w-48 items-center justify-between rounded-t-lg bg-neutral-700 px-2',
          appNotInFocus && 'bg-chrome-navigation',
        )}
      >
        <div className='flex items-center gap-1.5'>
          <img src='/asdf' />
          <span className=''>GACHAREVENUE</span>
        </div>
        <Icon
          icon='Cross2Icon'
          className={cn('h-3.5 w-3.5', appNotInFocus && 'opacity-60')}
        />
      </div>
    </section>
  )
}

export default Tabs
