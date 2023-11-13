import Icon from '@/components/Icon'

const DirectoryNavigation = () => {
  return (
    <span className='flex gap-2 opacity-20'>
      <Icon icon='ChevronLeftIcon' className='h-6 w-6' />
      <Icon icon='ChevronRightIcon' className='h-6 w-6' />
    </span>
  )
}

export default DirectoryNavigation
