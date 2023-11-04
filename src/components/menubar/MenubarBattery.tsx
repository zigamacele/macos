import { Icon } from '@/constants/icons'

import MenubarIcon from './MenubarIcon'

const MenubarBattery = () => {
  return (
    <span className='flex items-center gap-1.5 text-xs'>
      <p className='font-light'>78%</p>
      <MenubarIcon icon={Icon.BATTERY} />
    </span>
  )
}

export default MenubarBattery
