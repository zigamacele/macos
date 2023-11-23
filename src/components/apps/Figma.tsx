import { useState } from 'react'

import figmaProjectIcon from '@/assets/apps/figma/project.png'

import { cn } from '@/utils/styles'

import Icon from '../Icon'

const Figma = () => {
  const [currentProject, setCurrentProject] = useState(0)
  const figmaEmbedPrefix =
    'https://www.figma.com/embed?embed_host=zigamacele_macos&url='

  const projects = [
    {
      title: 'Personal Project - pixiv',
      url: 'https://www.figma.com/file/OWbX6LxGrSZiFOyhonNCXE/Personal-Project---pixiv?type=design&node-id=0%3A1&mode=design&t=PnYWmNodRbI8oU6D-1',
    },
    {
      title: 'Liver',
      url: 'https://www.figma.com/file/ILCx9JI6lib8Sw6O4d7rrR/Liver?type=design&node-id=0%3A1&mode=design&t=NIoiotMRQNsI309p-1',
    },
  ]
  return (
    <div className='h-full w-full rounded-lg bg-neutral-900'>
      <div className='flex h-10 items-center justify-between rounded-t-lg bg-neutral-800 pl-24 text-xs'>
        <div className='flex h-full items-center'>
          <div className='flex h-full items-center [&>*:nth-child(1)]:border-l'>
            {projects.map((project, index) => (
              <div
                onClick={() => setCurrentProject(index)}
                className={cn(
                  'flex h-full cursor-pointer items-center gap-1 border-r border-white/10 px-3 transition-all',
                  currentProject === index
                    ? 'bg-white/10'
                    : 'hover:bg-neutral-700/40',
                )}
              >
                <img src={figmaProjectIcon} className='h-4 w-4' />
                <span>{project.title}</span>
                <Icon
                  icon='Cross2Icon'
                  className='ml-2 h-3 w-3 cursor-pointer opacity-60 hover:opacity-100'
                />
              </div>
            ))}
          </div>
          <Icon
            icon='PlusIcon'
            className='h-full w-9 cursor-pointer px-3 opacity-80 hover:bg-neutral-700/40 hover:opacity-100'
          />
        </div>
        <Icon
          icon='DotsHorizontalIcon'
          className='h-full w-12 cursor-not-allowed border-l border-white/10 px-4'
        />
      </div>
      <iframe
        key={currentProject}
        className='relative z-20 h-full w-full rounded-b-lg'
        src={figmaEmbedPrefix + projects[currentProject]?.url}
      />
      <Icon
        icon='FigmaLogoIcon'
        className='absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 animate-pulse'
      />
    </div>
  )
}

export default Figma
