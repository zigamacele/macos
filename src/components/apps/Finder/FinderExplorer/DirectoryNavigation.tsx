import Icon from '@/components/Icon'

import useFinderStore from '@/stores/finder-store'

import { cn } from '@/utils/styles'

const DirectoryNavigation = () => {
  const {
    goBackDirectory,
    directoryHistory,
    directoryHistoryIndex,
    goForwardDirectory,
  } = useFinderStore()
  return (
    <span className='flex gap-2'>
      <Icon
        icon='ChevronLeftIcon'
        className={cn(
          'h-6 w-6 opacity-60',
          !directoryHistoryIndex && 'opacity-20',
        )}
        onClick={goBackDirectory}
      />
      <Icon
        icon='ChevronRightIcon'
        className={cn(
          'h-6 w-6 opacity-60',
          directoryHistoryIndex === directoryHistory.length - 1 && 'opacity-20',
        )}
        onClick={goForwardDirectory}
      />
    </span>
  )
}

export default DirectoryNavigation
