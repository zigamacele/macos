import DockApp from './dock/DockApp'

import { App } from '@/types/apps'

const Dock = () => {
  return (
    <section className='absolute left-2 top-1/2 -translate-y-1/2 rounded-xl border border-black/40'>
      <div className='flex flex-col gap-0.5 rounded-xl border border-white/10 bg-black/20 py-0.5 pl-2 pr-1 backdrop-blur-2xl'>
        {(Object.keys(App) as Array<keyof typeof App>).map((app, index) => {
          return <DockApp key={app} app={App[app]} index={index} />
        })}
      </div>
    </section>
  )
}

export default Dock
