import { Icon } from '@/constants/icons'

import MenubarTrigger from './MenubarTrigger'

const MenubarBattery = () => {
  return (
    <span className='flex items-center gap-1.5 text-xs'>
      <p className='font-light'>78%</p>
      <MenubarTrigger icon={Icon.BATTERY} />
    </span>
  )
}

export default MenubarBattery
