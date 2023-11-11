import { useState } from 'react'

import DockApp from './dock/DockApp'

import { App } from '@/types/apps'

const Dock = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)

  return (
    <section className='absolute left-2 top-1/2 z-40 -translate-y-1/2 rounded-xl border border-black/40'>
      <div className='flex w-14 flex-col gap-0.5 rounded-xl border border-white/10 bg-black/20 py-0.5 pl-2 pr-1 backdrop-blur-2xl transition-all'>
        {(Object.keys(App) as Array<keyof typeof App>).map((app, index) => {
          return (
            <DockApp
              key={app}
              app={App[app]}
              index={index}
              hoverIndex={hoverIndex}
              setHoverIndex={setHoverIndex}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Dock
