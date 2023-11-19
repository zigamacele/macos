import Icon from '@/components/Icon'

const Tabs = () => {
  return (
    <section className='flex h-10 items-end rounded-t-lg bg-zinc-800 pl-24 text-[13px]'>
      <div className='flex h-8 w-48 items-center justify-between rounded-t-lg bg-neutral-700 px-2'>
        <div className='flex items-center gap-1.5'>
          <img src='/asdf' />
          <span className=''>GACHAREVENUE</span>
        </div>
        <Icon icon='Cross2Icon' className='h-3.5 w-3.5' />
      </div>
    </section>
  )
}

export default Tabs
