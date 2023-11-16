import useFinderStore from '@/stores/finder-store'

import { FileStructure, fileStructure } from '@/constants/file-structure'

const Breadcrumbs = () => {
  const { currentDirectory, updateCurrentDirectory } = useFinderStore()
  let route = fileStructure as unknown as FileStructure

  return (
    <div className='row-span-1 flex items-center gap-3 self-end rounded-br-lg border-t border-white/10 bg-neutral-800 px-4 py-0.5 text-center text-xs'>
      {currentDirectory.map((directory, index) => {
        route = route[directory] as unknown as FileStructure
        if (directory === 'children') return null
        const { name, type } = route

        return (
          <div
            className='flex items-center gap-2'
            onClick={() =>
              updateCurrentDirectory(currentDirectory.slice(0, index + 2))
            }
          >
            {!!index && (
              <span className='pr-0.5 text-[9px] opacity-50'>{'>'}</span>
            )}
            {type as unknown as string}
            <span>{name as unknown as string}</span>
          </div>
        )
      })}
    </div>
  )
}

export default Breadcrumbs
