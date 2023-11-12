import { useState } from 'react'

import useFinderStore from '@/stores/finder-store'

import { finderIcons, FinderMenu } from '@/constants/icons'
import { username } from '@/constants/system'
import { cn } from '@/utils/styles'

import Icon from '../Icon'

interface FinderProps {
  isAppFocused: boolean
}

const Finder = ({ isAppFocused }: FinderProps) => {
  const [hideFavorites, setHideFavorites] = useState(false)
  const { focusedMenu, setFocusMenu } = useFinderStore()
  return (
    <main className='grid h-full w-full grid-cols-7'>
      <section
        className={cn(
          'col-span-1 flex flex-col gap-0.5 rounded-l-lg border-r border-black bg-neutral-800 px-4 py-12 backdrop-blur-3xl',
          isAppFocused && 'bg-neutral-800/60',
        )}
      >
        <div className={cn(!isAppFocused && 'opacity-40')}>
          <div className='group flex justify-between opacity-30'>
            <span className='ml-2.5 overflow-hidden text-ellipsis text-[11px] font-medium'>
              Favourites
            </span>
            <Icon
              icon={hideFavorites ? 'ChevronRightIcon' : 'ChevronDownIcon'}
              onClick={() => setHideFavorites(!hideFavorites)}
              className='hidden transition-all group-hover:block'
            />
          </div>
          {!hideFavorites && (
            <div className='animate-in slide-in-from-top-5'>
              {(Object.keys(FinderMenu) as Array<keyof typeof FinderMenu>).map(
                (menu) => {
                  return (
                    <div
                      key={menu}
                      className={cn(
                        'flex items-center gap-0.5 rounded-md px-1',
                        focusedMenu === FinderMenu[menu] && 'bg-white/10',
                      )}
                      onClick={() => setFocusMenu(FinderMenu[menu])}
                    >
                      <img
                        src={finderIcons[FinderMenu[menu]]}
                        className='h-[30px] w-[30px] shrink-0'
                        alt={menu}
                      />
                      <span className='overflow-hidden text-ellipsis text-[13px]'>
                        {FinderMenu[menu] === FinderMenu.USER
                          ? username
                          : FinderMenu[menu]}
                      </span>
                    </div>
                  )
                },
              )}
            </div>
          )}
          <div className='ml-2.5 mt-4 flex flex-col gap-5'>
            <span className='overflow-hidden text-ellipsis text-[11px] font-medium opacity-30'>
              iCloud
            </span>
            <span className='overflow-hidden text-ellipsis text-[11px] font-medium opacity-30'>
              Tags
            </span>
          </div>
        </div>
      </section>
      <section className='col-span-6 rounded-r-lg bg-[#1F1F20]' />
    </main>
  )
}

export default Finder
