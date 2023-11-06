import DockApp from './dock/DockApp'

import { App } from '@/types/apps'

const Dock = () => {
  return (
    <section className='absolute left-2 top-1/2 -translate-y-1/2 rounded-xl border border-black/40'>
      <div className='rounded-xl border border-white/10 bg-black/20 py-0.5 pl-2 pr-1 backdrop-blur-2xl'>
        <DockApp app={App.FINDER} />
      </div>
    </section>
  )
}

export default Dock
