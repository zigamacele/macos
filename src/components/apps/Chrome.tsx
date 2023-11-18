import { chromeIcons } from '@/constants/icons'

import Icon from '../Icon'

const Chrome = () => {
  return (
    <div className='flex h-full w-full flex-col rounded-lg backdrop-blur-3xl'>
      <nav>
        <div className='flex h-10 items-end rounded-t-lg bg-zinc-800 pl-24 text-[13px]'>
          <div className='flex h-8 w-48 items-center justify-between rounded-t-lg bg-neutral-700 px-2'>
            <div className='flex items-center gap-1.5'>
              <img src='/asdf' />
              <span className=''>GACHAREVENUE</span>
            </div>
            <Icon icon='Cross2Icon' className='h-3.5 w-3.5' />
          </div>
        </div>
        <div className='flex h-9 items-center gap-3 bg-zinc-700 px-3'>
          <Icon icon='ArrowLeftIcon' className='h-[22px] w-[22px] shrink-0' />
          <Icon icon='ArrowRightIcon' className='h-[22px] w-[22px] shrink-0' />
          <div className='relative w-full'>
            <Icon
              icon='LockClosedIcon'
              className='absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2'
            />
            <input
              className='w-full rounded-full bg-zinc-800 py-1 ps-9 text-sm outline-2 focus:outline'
              type='text'
              value='https://gacharevenue.com/'
            />
          </div>
          <img
            src={chromeIcons.LIVER}
            className='h-5 w-5 rounded-full object-cover'
          />
          <img
            src={chromeIcons.EXTENSIONS}
            className='h-6 w-6 rounded-full object-cover'
          />
          <img
            src={chromeIcons.PROFILE}
            className='h-5 w-5 rounded-full object-cover'
          />
          <Icon
            icon='DotsVerticalIcon'
            className='h-[22px] w-[22px] shrink-0'
          />
        </div>
      </nav>
      <iframe
        className='h-full w-full rounded-b-lg border border-black/10 drop-shadow-lg'
        title='GACHAREVENUE'
        src='https://gacharevenue.com/'
      />
    </div>
  )
}

export default Chrome
