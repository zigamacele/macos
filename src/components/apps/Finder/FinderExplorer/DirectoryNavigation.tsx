import Icon from '@/components/Icon'

import useFinderStore, { Direction } from '@/stores/finder-store'

import { cn } from '@/utils/styles'

const DirectoryNavigation = () => {
  const { directoryHistory, directoryHistoryIndex, moveDirectory } =
    useFinderStore()
  return (
    <span className='flex gap-2'>
      <Icon
        icon='ChevronLeftIcon'
        className={cn(
          'h-6 w-6 opacity-60',
          !directoryHistoryIndex && 'opacity-20',
        )}
        onClick={() => moveDirectory(Direction.BACKWARD)}
      />
      <Icon
        icon='ChevronRightIcon'
        className={cn(
          'h-6 w-6 opacity-60',
          directoryHistoryIndex === directoryHistory.length - 1 && 'opacity-20',
        )}
        onClick={() => moveDirectory(Direction.FORWARD)}
      />
    </span>
  )
}

export default DirectoryNavigation
