import Icon from '@/components/Icon'

import useFinderStore from '@/stores/finder-store'

import { cn } from '@/utils/styles'

const DirectoryNavigation = () => {
  const { goBackDirectory, currentDirectory } = useFinderStore()
  return (
    <span className='flex gap-2'>
      <Icon
        icon='ChevronLeftIcon'
        className={cn('h-6 w-6', currentDirectory.length >= 2 && 'opacity-20')}
        onClick={goBackDirectory}
      />
      <Icon icon='ChevronRightIcon' className='h-6 w-6 opacity-20' />
    </span>
  )
}

export default DirectoryNavigation
