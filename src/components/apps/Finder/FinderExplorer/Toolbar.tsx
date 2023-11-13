import Icon from '@/components/Icon'

import CurrentDirectory from './CurrentDirectory'
import DirectoryNavigation from './DirectoryNavigation'

const Toolbar = () => {
  return (
    <header className='row-span-1 flex h-14 items-center justify-between rounded-tr-lg border-b border-black bg-neutral-700/60 px-4'>
      <div className='flex items-center gap-4'>
        <DirectoryNavigation />
        <CurrentDirectory />
      </div>
      <div className='flex gap-3'>
        <Icon icon='DoubleArrowRightIcon' className='h-5 w-5 opacity-60' />
        <Icon icon='MagnifyingGlassIcon' className='h-5 w-5 opacity-60' />
      </div>
    </header>
  )
}

export default Toolbar
