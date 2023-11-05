import useSystemStore from '@/stores/system-store'

import { AppMenubar } from '@/constants/apps'

const MenubarWindow = () => {
  const { window } = useSystemStore()
  return (
    <>
      <span className='cursor-pointer font-bold drop-shadow-lg'>{window}</span>
      {AppMenubar[window].map((menu) => (
        <span key={menu} className='cursor-pointer drop-shadow-lg'>
          {menu}
        </span>
      ))}
    </>
  )
}

export default MenubarWindow
