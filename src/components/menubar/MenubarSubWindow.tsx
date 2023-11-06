import { SubMenu } from '@/types/apps'

interface MenubarSubWindowProps {
  subMenu: SubMenu[] | undefined
}

const MenubarSubWindow = ({ subMenu }: MenubarSubWindowProps) => {
  return (
    <div className='absolute left-0 top-7 z-50 w-60 rounded-md border border-black/40 font-normal'>
      <div className='flex flex-col gap-0.5 rounded-md border border-white/10 bg-black/40 px-2.5 py-1 backdrop-blur-xl'>
        {subMenu?.map((menu) => (
          <span
            key={menu.label}
            onClick={menu.onClick}
            className='flex items-center justify-between gap-2'
          >
            <span>{menu.label}</span>
            <span className='opacity-30'>{menu.shortcut}</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default MenubarSubWindow
