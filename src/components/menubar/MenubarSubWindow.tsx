import { SubMenu } from '@/types/apps'

interface MenubarSubWindowProps {
  subMenu: SubMenu[] | undefined
}

const MenubarSubWindow = ({ subMenu }: MenubarSubWindowProps) => {
  return (
    <div className='absolute left-0 top-7 z-50 min-w-max rounded-md border border-black/40 font-normal'>
      <div className='flex flex-col gap-0.5 rounded-md border border-white/10 bg-black/40 px-0.5 py-1 backdrop-blur-xl'>
        {subMenu?.map((menu) => {
          if (menu.label === 'hr') {
            return <hr className='mx-2 my-0.5 opacity-20' />
          }

          return (
            <button
              key={menu.label}
              onClick={menu.onClick}
              className='group flex items-center justify-between gap-12 rounded px-2 hover:bg-blue-500'
            >
              <span>{menu.label}</span>
              <span className='opacity-30 group-hover:opacity-100'>
                {menu.shortcut}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default MenubarSubWindow
