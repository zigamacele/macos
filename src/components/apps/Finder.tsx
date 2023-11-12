import { useState } from 'react'

import { finderIcons, FinderMenu } from '@/constants/icons'
import { username } from '@/constants/system'
import { cn } from '@/utils/styles'

import Icon from '../Icon'

interface FinderProps {
  isAppFocused: boolean
}

const Finder = ({ isAppFocused }: FinderProps) => {
  const [hideFavorites, setHideFavorites] = useState(false)
  return (
    <section className='grid h-full w-full grid-cols-7'>
      <div
        className={cn(
          'col-span-1 flex flex-col gap-0.5 rounded-l border-r border-black bg-neutral-800 px-4 py-12 backdrop-blur-3xl',
          isAppFocused && 'bg-neutral-800/60',
        )}
      >
        <div className='group flex justify-between opacity-30'>
          <span className='ml-1.5 overflow-hidden text-ellipsis text-[11px] font-medium'>
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
                  <div key={menu} className='flex items-center gap-0.5'>
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
        <div className='mt-4 flex flex-col gap-5'>
          <span className='ml-1.5 overflow-hidden text-ellipsis text-[11px] font-medium opacity-30'>
            iCloud
          </span>
          <span className='ml-1.5 overflow-hidden text-ellipsis text-[11px] font-medium opacity-30'>
            Tags
          </span>
        </div>
      </div>
      <div className='col-span-6 rounded-r bg-[#1F1F20]'></div>
    </section>
  )
}

export default Finder
