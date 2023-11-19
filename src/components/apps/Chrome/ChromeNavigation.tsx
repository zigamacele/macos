import Icon from '@/components/Icon'

import { chromeIcons } from '@/constants/icons'

import Tabs from './Tabs'

const ChromeNavigation = () => {
  return (
    <nav>
      <Tabs />
      <section className='flex h-9 items-center gap-3 bg-zinc-700 px-3'>
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
        <Icon icon='DotsVerticalIcon' className='h-[22px] w-[22px] shrink-0' />
      </section>
    </nav>
  )
}

export default ChromeNavigation
