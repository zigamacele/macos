import { useState } from 'react'

import useWindowManager from '@/stores/window_manager-store'

import { AppMenubar } from '@/constants/apps'
import { cn } from '@/utils/styles'

import MenubarSubWindow from './MenubarSubWindow'

const MenubarWindow = () => {
  const { focusedWindow } = useWindowManager()
  const [selectedMenu, setSelectedMenu] = useState<number | undefined>(
    undefined,
  )

  const onMenuHover = (index: number) => {
    if (selectedMenu !== undefined) {
      setSelectedMenu(index)
    }
  }

  const onMenuClick = (index: number) => {
    setSelectedMenu((prev) => (prev === index ? undefined : index))
  }

  return (
    <section className='[&>*:nth-child(1)]:font-bold'>
      {AppMenubar[focusedWindow].map((menu, index) => (
        <span key={menu.label} className='relative'>
          <button
            className={cn(
              'cursor-pointer px-3 py-0.5 drop-shadow-lg',
              selectedMenu === index && 'rounded bg-white/20',
            )}
            onClick={() => onMenuClick(index)}
            onMouseEnter={() => onMenuHover(index)}
          >
            {menu.label}
          </button>
          {selectedMenu === index && (
            <MenubarSubWindow subMenu={menu.submenu} />
          )}
          {selectedMenu !== undefined && (
            <span
              className='absolute left-0 top-0 z-[-10] h-screen w-screen'
              onClick={() => setSelectedMenu(undefined)}
            />
          )}
        </span>
      ))}
    </section>
  )
}

export default MenubarWindow
