import useFigmaStore from '@/stores/figma-store'

import { FIGMA_FILE_VIEWER } from '@/constants/links'

import Navbar from './Figma/Navbar'
import Icon from '../Icon'

const Figma = () => {
  const { projects, currentProject } = useFigmaStore()

  return (
    <div className='h-full w-full rounded-lg bg-neutral-900'>
      <Navbar />
      {currentProject !== null && (
        <iframe
          key={currentProject}
          className='relative z-20 h-full w-full rounded-b-lg'
          src={FIGMA_FILE_VIEWER + projects[currentProject]?.url}
        />
      )}
      <Icon
        icon='FigmaLogoIcon'
        className='absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 animate-pulse'
      />
    </div>
  )
}

export default Figma
