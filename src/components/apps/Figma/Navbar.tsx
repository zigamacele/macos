import Icon from '@/components/Icon'

import useFigmaStore from '@/stores/figma-store'

import figmaProjectIcon from '@/assets/apps/figma/project.png'

import { cn } from '@/utils/styles'

const Navbar = () => {
  const { projects, currentProject, setCurrentProject, closeProject } =
    useFigmaStore()
  return (
    <section className='flex h-10 items-center justify-between rounded-t-lg bg-neutral-800 pl-24 text-xs'>
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
                onClick={() => closeProject(index)}
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
    </section>
  )
}

export default Navbar
