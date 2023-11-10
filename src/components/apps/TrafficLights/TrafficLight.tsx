import Icon from '@/components/Icon'

import { cn } from '@/utils/styles'

interface TrafficLightProps {
  icon: string
  color: string
  className?: string
  isAppFocused?: boolean
  onClick?: () => void
}

const TrafficLight = ({
  icon,
  color,
  className,
  isAppFocused,
  onClick,
}: TrafficLightProps) => {
  return (
    <button
      className={cn(
        'flex h-[13px] w-[13px] items-center justify-center rounded-full bg-neutral-600 p-0.5 text-black/60 transition-colors',
        isAppFocused && color,
        className,
      )}
      onClick={(e) => {
        e.stopPropagation()
        onClick && onClick()
      }}
    >
      <Icon icon={icon} className='rotate hidden group-hover:block' />
    </button>
  )
}

export default TrafficLight
