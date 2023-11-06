import Icon from '@/components/Icon'

import { cn } from '@/utils/styles'

interface TrafficLightProps {
  icon: string
  color: string
  className?: string
  onClick?: () => void
}

const TrafficLight = ({
  icon,
  color,
  className,
  onClick,
}: TrafficLightProps) => {
  return (
    <button
      className={cn(
        'flex h-[13px] w-[13px] items-center justify-center rounded-full p-0.5 text-black/60',
        color,
        className,
      )}
      onClick={onClick}
    >
      <Icon icon={icon} className='rotate hidden group-hover:block' />
    </button>
  )
}

export default TrafficLight
