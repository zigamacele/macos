import Icon from '@/components/Icon'

import useFinderStore from '@/stores/finder-store'

import { FileIcons, FileType } from '@/constants/file-structure'
import { capitalize } from '@/utils/format'

const FileExplorer = () => {
  const { route, updateCurrentDirectory, setFocusedDirectory } =
    useFinderStore()

  const onDirectoryClick = (directory: string) => {
    setFocusedDirectory(capitalize(directory))
    updateCurrentDirectory(directory)
  }

  return (
    <section className='ml-2 text-[13px]'>
      {Object.keys(route).map((key) => {
        const fileType = route[key]?.type as FileType
        return (
          <div
            key={key}
            className='flex items-center gap-1'
            onClick={() => onDirectoryClick(key)}
          >
            <Icon icon='ChevronRightIcon' className='h-3 w-3 opacity-60' />
            <img
              src={FileIcons[fileType].icon}
              className={FileIcons[fileType].styles}
            />
            <span className='ml-0.5 opacity-90'>{route[key]?.name}</span>
          </div>
        )
      })}
    </section>
  )
}

export default FileExplorer
