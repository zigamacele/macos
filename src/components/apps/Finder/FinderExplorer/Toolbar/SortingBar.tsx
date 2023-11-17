import Icon from '@/components/Icon'

const SortingBar = () => {
  return (
    <div className='flex divide-x bg-finder-background'>
      <div className='flex w-full items-center justify-between border-b border-white/10 px-4 py-1 text-[11px] font-semibold'>
        <span className='opacity-80'>Name</span>
        <Icon icon='ChevronDownIcon' className='opacity-60' />
      </div>
      <div className='flex w-2/3 items-center justify-between border-b border-white/10 px-4 py-1 text-[11px] font-semibold'>
        <span className='opacity-80'>Data Modified</span>
        <Icon icon='ChevronDownIcon' className='opacity-60' />
      </div>
    </div>
  )
}

export default SortingBar
