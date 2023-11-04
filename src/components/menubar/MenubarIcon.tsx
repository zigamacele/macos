import { Icon, iconLibrary } from '@/constants/icons'
import { cn } from '@/utils/styles'

interface MenubarIconProps {
  icon: Icon
  className?: string
}

const MenubarIcon = ({ icon, className }: MenubarIconProps) => {
  return (
    <img src={iconLibrary[icon]} className={cn('cursor-pointer', className)} />
  )
}

export default MenubarIcon
