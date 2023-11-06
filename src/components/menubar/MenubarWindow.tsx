import { Fragment, useState } from 'react'

import useSystemStore from '@/stores/system-store'

import { AppMenubar } from '@/constants/apps'
import { cn } from '@/utils/styles'

import MenubarSubWindow from './MenubarSubWindow'

const MenubarWindow = () => {
  const { window } = useSystemStore()
  const [selectedMenu, setSelectedMenu] = useState<number | undefined>()

  const onMenuHover = (index: number) => {
    if (selectedMenu !== undefined) {
      setSelectedMenu(index)
    }
  }

  return (
    <section className='[&>*:nth-child(1)]:font-bold'>
      {AppMenubar[window].map((menu, index) => (
        <Fragment key={menu.label}>
          <button
            className={cn(
              'cursor-pointer px-3 py-0.5 drop-shadow-lg',
              selectedMenu === index && 'selectedMenu rounded bg-white/30',
            )}
            onClick={() =>
              setSelectedMenu((prev) => (prev === index ? undefined : index))
            }
            onMouseEnter={() => onMenuHover(index)}
          >
            {menu.label}
          </button>
          {selectedMenu !== undefined && (
            <>
              <MenubarSubWindow
                subMenu={AppMenubar[window][selectedMenu]?.submenu}
              />
              <span
                className='absolute left-0 top-0 z-[-10] h-screen w-screen'
                onClick={() => setSelectedMenu(undefined)}
              />
            </>
          )}
        </Fragment>
      ))}
    </section>
  )
}

export default MenubarWindow
