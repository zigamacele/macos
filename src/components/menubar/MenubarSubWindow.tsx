import { SubMenu } from '@/types/apps'

interface MenubarSubWindowProps {
  subMenu: SubMenu[] | undefined
}

const MenubarSubWindow = ({ subMenu }: MenubarSubWindowProps) => {
  return (
    <section className='absolute top-20 z-50 text-black'>
      {subMenu?.map((menu) => (
        <div
          key={menu.label}
          onClick={menu.onClick}
          className='flex items-center justify-between'
        >
          <span>{menu.label}</span>
          <span>{menu.shortcut}</span>
        </div>
      ))}
    </section>
  )
}

export default MenubarSubWindow
