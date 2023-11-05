import { Icon } from '@/constants/icons'

import MenubarTrigger from './MenubarTrigger'

const MenubarBattery = () => {
  return (
    <span className='flex cursor-pointer items-center gap-1 text-xs'>
      <p>81%</p>
      <MenubarTrigger icon={Icon.BATTERY} />
    </span>
  )
}

export default MenubarBattery
