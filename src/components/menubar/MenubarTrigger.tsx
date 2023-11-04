import { Icon, iconLibrary } from '@/constants/icons'
import { cn } from '@/utils/styles'

interface MenubarTriggerProps {
  icon?: Icon
  label?: string
  className?: string
}

const MenubarTrigger = ({ icon, label, className }: MenubarTriggerProps) => {
  const Trigger = ({ className }: MenubarTriggerProps) => {
    if (icon) {
      return <img src={iconLibrary[icon]} className={className} />
    }

    return <span className={className}>{label}</span>
  }

  return <Trigger className={cn('cursor-pointer', className)} />
}

export default MenubarTrigger
