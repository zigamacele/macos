import { useState } from 'react'

import Icon from '@/components/Icon'

import { FinderMenu } from '@/constants/icons'
import { cn } from '@/utils/styles'

import MenuItem from './MenuItem'

interface FinderSidebarProps {
  isAppFocused: boolean
}

const FinderSidebar = ({ isAppFocused }: FinderSidebarProps) => {
  const [hideFavorites, setHideFavorites] = useState(false)
  return (
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
          <span className='animate-in slide-in-from-top-5'>
            {(Object.keys(FinderMenu) as Array<keyof typeof FinderMenu>).map(
              (menu) => {
                return <MenuItem key={menu} menu={menu} />
              },
            )}
          </span>
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
  )
}

export default FinderSidebar
