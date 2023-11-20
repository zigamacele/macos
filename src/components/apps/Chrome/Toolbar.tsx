import { useContext } from 'react'

import { CurrentAppContext } from '@/components/homescreen/windowManager/AppWindow'
import Icon from '@/components/Icon'

import useWindowManager from '@/stores/window_manager-store'

import { chromeIcons } from '@/constants/icons'
import { GITHUB, LIVER } from '@/constants/links'
import { openInNewWindow } from '@/utils/global'
import { cn } from '@/utils/styles'

const Toolbar = () => {
  const { isAppFocused } = useWindowManager()
  const currentApp = useContext(CurrentAppContext)
  const appNotInFocus = !isAppFocused(currentApp)
  return (
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
      <div className='flex items-center gap-2 rounded-full border border-zinc-700 px-2 pr-3 transition-colors hover:border-white/20'>
        <img
          src={chromeIcons.LIVER}
          className='h-5 w-5 cursor-pointer rounded-full object-cover transition-opacity hover:opacity-60'
          onClick={() => openInNewWindow(LIVER)}
        />
        <img
          src={chromeIcons.EXTENSIONS}
          className={cn(
            'h-6 w-6 rounded-full object-cover',
            appNotInFocus && 'opacity-40',
          )}
        />
      </div>
      <img
        src={chromeIcons.PROFILE}
        className='h-5 w-5 cursor-pointer rounded-full object-cover transition-opacity hover:opacity-60'
        onClick={() => openInNewWindow(GITHUB)}
      />
      <Icon
        icon='DotsVerticalIcon'
        className={cn(
          'h-[22px] w-[22px] shrink-0',
          appNotInFocus && 'opacity-40',
        )}
      />
    </section>
  )
}

export default Toolbar
