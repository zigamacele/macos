import useChromeStore from '@/stores/chrome-store'

import ChromeNavigation from './Chrome/ChromeNavigation'

const Chrome = () => {
  const { focusedTab, tabs } = useChromeStore()
  return (
    <main className='flex h-full w-full flex-col rounded-lg'>
      <ChromeNavigation />
      <iframe
        className='h-full w-full rounded-b-lg bg-zinc-800'
        title={tabs[focusedTab]?.title}
        src={tabs[focusedTab]?.url}
      />
    </main>
  )
}

export default Chrome
