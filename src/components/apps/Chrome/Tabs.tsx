import { useContext } from 'react'

import { CurrentAppContext } from '@/components/homescreen/windowManager/AppWindow'
import Icon from '@/components/Icon'

import useChromeStore from '@/stores/chrome-store'
import useWindowManager from '@/stores/window_manager-store'

import { DEFAULT_URL } from '@/constants/links'
import { cn } from '@/utils/styles'

import { ManageAppAction } from '@/types/apps'

const Tabs = () => {
  const { isAppFocused, manageApp } = useWindowManager()
  const { tabs, removeTab, addTab, focusedTab, setFocusedTab } =
    useChromeStore()
  const currentApp = useContext(CurrentAppContext)
  const appNotInFocus = !isAppFocused(currentApp)

  const handleRemoveTab = (index: number, event?: React.MouseEvent) => {
    event?.stopPropagation()
    removeTab(index)

    if (tabs.length === 1) {
      manageApp(currentApp, ManageAppAction.MINIMIZE)
      addTab(DEFAULT_URL)
    }
  }
  return (
    <section
      className={cn(
        'flex h-11 items-end rounded-t-lg bg-zinc-800 pl-24 text-[13px]',
        appNotInFocus && 'bg-chrome-surface',
      )}
    >
      {tabs.map((tab, index) => {
        const isTabFocused = focusedTab === index
        return (
          <div
            key={index}
            onClick={() => setFocusedTab(index)}
            className={cn(
              'flex h-8 w-48 items-center justify-between rounded-t-lg px-2 transition-colors',
              !isTabFocused && 'hover:bg-zinc-600',
              isTabFocused && 'bg-zinc-700',
              appNotInFocus && isTabFocused && 'bg-chrome-navigation',
              appNotInFocus && !isTabFocused && 'bg-chrome-surface',
            )}
          >
            <div className='flex items-center gap-1'>
              <img src={tab.icon} className='h-6 w-6' />
              <span>{tab.title}</span>
            </div>
            <Icon
              icon='Cross2Icon'
              className={cn(
                'h-4 w-4 cursor-pointer rounded-full p-0.5 hover:bg-white/20',
                appNotInFocus && 'opacity-60',
              )}
              onClick={(event?: React.MouseEvent) =>
                handleRemoveTab(index, event)
              }
            />
          </div>
        )
      })}
      <Icon
        icon='PlusIcon'
        className='mb-1 ml-1.5 h-6 w-6 cursor-pointer rounded-full p-1 hover:bg-zinc-600'
        onClick={() => addTab(DEFAULT_URL)}
      />
    </section>
  )
}

export default Tabs
