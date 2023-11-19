import { useContext } from 'react'

import { CurrentAppContext } from '@/components/homescreen/windowManager/AppWindow'
import Icon from '@/components/Icon'

import useWindowManager from '@/stores/window_manager-store'

import { chromeIcons } from '@/constants/icons'
import { cn } from '@/utils/styles'

import Tabs from './Tabs'

const ChromeNavigation = () => {
  const { isAppFocused } = useWindowManager()
  const currentApp = useContext(CurrentAppContext)
  const appNotInFocus = !isAppFocused(currentApp)
  return (
    <nav>
      <Tabs />
      <section
        className={cn(
          'flex h-9 items-center gap-3 bg-zinc-700 px-3',
          appNotInFocus && 'bg-chrome-navigation',
        )}
      >
        <Icon
          icon='ArrowLeftIcon'
          className={cn(
            'h-[22px] w-[22px] shrink-0',
            appNotInFocus && 'opacity-40',
          )}
        />
        <Icon
          icon='ArrowRightIcon'
          className={cn(
            'h-[22px] w-[22px] shrink-0',
            appNotInFocus && 'opacity-40',
          )}
        />
        <div className='relative w-full'>
          <Icon
            icon='LockClosedIcon'
            className='absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2'
          />
          <input
            className='w-full rounded-full bg-zinc-800 py-1 ps-9 text-sm outline-2 focus:outline'
            type='text'
            value='https://gacharevenue.com/'
          />
        </div>
        <img
          src={chromeIcons.LIVER}
          className='h-5 w-5 rounded-full object-cover'
        />
        <img
          src={chromeIcons.EXTENSIONS}
          className={cn(
            'h-6 w-6 rounded-full object-cover',
            appNotInFocus && 'opacity-40',
          )}
        />
        <img
          src={chromeIcons.PROFILE}
          className='h-5 w-5 rounded-full object-cover'
        />
        <Icon
          icon='DotsVerticalIcon'
          className={cn(
            'h-[22px] w-[22px] shrink-0',
            appNotInFocus && 'opacity-40',
          )}
        />
      </section>
    </nav>
  )
}

export default ChromeNavigation
