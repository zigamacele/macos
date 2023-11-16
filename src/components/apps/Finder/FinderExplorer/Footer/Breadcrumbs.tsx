import useFinderStore from '@/stores/finder-store'

import {
  FileIcons,
  FileStructure,
  fileStructure,
  FileType,
} from '@/constants/file-structure'

const Breadcrumbs = () => {
  const { currentDirectory, updateCurrentDirectory } = useFinderStore()
  let route = fileStructure as unknown as FileStructure

  return (
    <div className='row-span-1 flex items-center gap-2 self-end rounded-br-lg border-t border-white/10 bg-neutral-800 px-4 py-1 text-center text-xs'>
      {currentDirectory.map((directory, index) => {
        route = route[directory] as unknown as FileStructure
        if (directory === 'children') return null
        const { name, type } = route
        const typeAsFileType = type as unknown as FileType

        return (
          <div
            className='flex items-center gap-1.5'
            onClick={() =>
              updateCurrentDirectory(currentDirectory.slice(0, index + 2))
            }
          >
            {!!index && <span className='text-[9px] opacity-80'>{'>'}</span>}
            <img
              src={FileIcons[typeAsFileType].icon}
              className={FileIcons[typeAsFileType].styles}
            />
            <span className='opacity-60'>{name as unknown as string}</span>
          </div>
        )
      })}
    </div>
  )
}

export default Breadcrumbs
